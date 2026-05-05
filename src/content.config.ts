import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    client: z.string(),
    role: z.string(),
    duration: z.string(),
    year: z.number(),
    tags: z.array(z.string()),
    coverImage: z.string(),
    excerpt: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies };
