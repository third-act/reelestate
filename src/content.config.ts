import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const iconLabel = z.object({ icon: z.string(), label: z.string() });

const niches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/niches' }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    title: z.string(),
    subtitle: z.string(),
    painLine: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    accentColor: z.string(),
    accentInk: z.string().default('#14213D'),
    cardLabel: z.string(),
    cardBlurb: z.string(),
    exampleBrand: z.object({ name: z.string(), initials: z.string(), color: z.string() }),
    heroScreen: z.enum(['home', 'access', 'booking', 'feed']),
    screens: z.object({
      home: z.object({
        quickActions: z.array(iconLabel).length(4),
        important: z.object({ title: z.string(), text: z.string() }),
        news: z.object({ title: z.string(), text: z.string() }),
      }),
      access: z.object({
        doors: z.array(z.object({ name: z.string(), fav: z.boolean().default(false) })).min(3).max(4),
      }),
      booking: z.object({
        categories: z.array(z.string()).length(3),
        resource: z.object({
          name: z.string(),
          times: z.string(),
          desc: z.string(),
          tags: z.array(z.string()).length(3),
        }),
      }),
      feed: z.object({
        groups: z.array(z.string()).length(2),
        posts: z.array(z.object({
          author: z.string(),
          date: z.string(),
          text: z.string(),
          comments: z.number().default(0),
        })).length(3),
      }),
    }),
    screenCaptions: z.object({
      home: z.string(), access: z.string(), booking: z.string(), feed: z.string(),
    }),
    features: z.array(z.object({ icon: z.string(), title: z.string(), description: z.string() })).length(6),
    comparison: z.object({
      genericLabel: z.string().default('Generisk app'),
      rows: z.array(z.object({ label: z.string(), generic: z.string(), own: z.string() })).min(4).max(6),
    }).optional(),
    backoffice: z.object({
      view: z.enum(['news', 'bookings']),
      heading: z.string(),
      points: z.array(z.string()).length(4),
      rows: z.array(z.object({ a: z.string(), b: z.string(), c: z.string() })).length(3),
    }),
    howItWorks: z.array(z.object({ day: z.string(), title: z.string(), description: z.string() })).length(3),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).length(5),
    ctaHeading: z.string(),
  }),
});

export const collections = { niches };
