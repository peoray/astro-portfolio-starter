import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    draft: z.boolean(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    minutesRead: z.string().optional()
  }),
});

export const collections = { blog: blogCollection };