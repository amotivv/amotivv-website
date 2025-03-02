import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().refine(
      (val) => {
        // Accept either YYYY-MM-DD or full ISO date strings with timezone
        return /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/.test(val);
      },
      {
        message: "Date must be in YYYY-MM-DD format, optionally with time and timezone information",
      }
    ),
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
