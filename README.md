# reelestate.se

Multi-nisch landningssidor för Reel Estate. Astro + Tailwind v4, deploy på Vercel.

## Kom igång
```
npm install
cp .env.example .env   # lägg in RESEND_API_KEY
npm run dev            # http://localhost:4321
npm run build
```

## Lägga till en nisch (≈30 min, mest copy)
1. Kopiera `src/content/niches/padel.md` till `src/content/niches/<slug>.md`.
2. Byt alla texter. Fälten:
   - `heroScreen` – vilken vy hero visar: `home | access | booking | feed`
   - `screens.*` – innehållet i de fyra app-vyerna (ritas automatiskt, inga skärmdumpar)
   - `screenCaptions` – bildtext under varje vy i showcasen
   - `features` – exakt 6
   - `comparison` – valfri, ta bort blocket helt om nischen saknar tydlig konkurrent
   - `backoffice.view` – `news` eller `bookings`
   - `howItWorks` – exakt 3, `faq` – exakt 5
3. **Citera alla strängar** (`"..."`) – annars klipps text vid kommatecken.
4. Ikonnamn = lucide i PascalCase (`CalendarCheck`, `DoorOpen`). Lista: https://lucide.dev/icons
5. `npm run build` – schemat validerar och säger exakt vad som saknas.

Prissektion, kundrad och pristext ligger globalt i `src/config/brand.ts`.

## Byta branding
Allt ligger i `src/config/brand.ts` (namn, tagline, färger, typsnitt, kontaktmail, Calendly, Plausible).
Färgerna speglas i `@theme` i `src/styles/global.css` – uppdatera båda ställena vid färgbyte.

## Formulär och leads
- `/demo?nisch=<slug>` → formulär → `POST /api/lead` → mail via Resend till `brand.contactEmail`.
- Ämnesrad: `Ny demo-förfrågan [nisch] – Verksamhet`. Reply-to sätts till leadens e-post.
- `/tack?nisch=<slug>` visar Calendly inline (`brand.calendlyUrl`).
- Honeypot-fält `website` mot spam.

## Deploy (Vercel)
1. Pusha repot till GitHub.
2. Importera i Vercel – framework upptäcks som Astro.
3. Env: `RESEND_API_KEY`.
4. Domän: lägg till `reelestate.se` + `www` i Vercel, peka DNS enligt Vercels anvisningar.

## Att göra manuellt innan lansering
- [ ] Resend: skapa konto, verifiera `reelestate.se`, skapa API-nyckel, lägg i Vercel env.
- [ ] Calendly: skapa event "Demo 30 min", byt `calendlyUrl` i `brand.ts`.
- [ ] Plausible: skapa site `reelestate.se` (eller ta bort script-taggen i `BaseLayout.astro`).
- [ ] Byt `customerLine` i `brand.ts` när fler referenskunder får nämnas.
- [ ] Ersätt `public/og-default.png` med en riktig OG-bild om ni vill.
