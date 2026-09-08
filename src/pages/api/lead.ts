import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';
import { brand } from '../../config/brand';
export const prerender = false;

const Lead = z.object({
  verksamhet: z.string().min(1).max(200),
  namn: z.string().min(1).max(120),
  epost: z.string().email(),
  telefon: z.string().max(40).optional().default(''),
  behov: z.string().max(3000).optional().default(''),
  nisch: z.string().max(60).optional().default('okänd'),
  referrer: z.string().max(500).optional().default(''),
  website: z.string().optional().default(''), // honeypot
});

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export const POST: APIRoute = async ({ request }) => {
  const fd = await request.formData();
  const raw = Object.fromEntries(fd.entries());
  const parsed = Lead.safeParse(raw);
  if (!parsed.success) return new Response('Ogiltiga fält', { status: 400 });
  const d = parsed.data;
  if (d.website) return new Response('ok', { status: 200 }); // bot, låtsas lyckas

  const key = import.meta.env.RESEND_API_KEY;
  if (!key) return new Response('RESEND_API_KEY saknas', { status: 500 });

  const resend = new Resend(key);
  const subject = `Ny demo-förfrågan [${d.nisch}] – ${d.verksamhet}`;
  const html = `
    <h2>${esc(subject)}</h2>
    <table cellpadding="6">
      <tr><td><b>Nisch</b></td><td>${esc(d.nisch)}</td></tr>
      <tr><td><b>Verksamhet</b></td><td>${esc(d.verksamhet)}</td></tr>
      <tr><td><b>Namn</b></td><td>${esc(d.namn)}</td></tr>
      <tr><td><b>E-post</b></td><td><a href="mailto:${esc(d.epost)}">${esc(d.epost)}</a></td></tr>
      <tr><td><b>Telefon</b></td><td>${esc(d.telefon) || '–'}</td></tr>
      <tr><td><b>Behov</b></td><td>${esc(d.behov).replace(/\n/g, '<br>') || '–'}</td></tr>
      <tr><td><b>Referrer</b></td><td>${esc(d.referrer) || '–'}</td></tr>
    </table>`;

  const { error } = await resend.emails.send({
    from: `${brand.name} <leads@reelestate.se>`,
    to: [brand.contactEmail],
    replyTo: d.epost,
    subject,
    html,
  });
  if (error) return new Response('Mailfel', { status: 502 });
  return new Response('ok', { status: 200 });
};
