import { z } from "zod";

export const PostFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
});

export type PostForm = z.infer<typeof PostFormSchema>;
