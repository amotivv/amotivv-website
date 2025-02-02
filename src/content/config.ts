import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      avatar: z.string()
    }),
    tags: z.array(z.string())
  })
});

export const collections = {
  articles
};