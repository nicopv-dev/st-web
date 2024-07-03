import api from "@/lib/axios";
import { PostForm } from "@/types/forms/post-form";
import Post from "@/types/models/post";

export const getPosts = async () => await api.get<Post[]>("/posts");

export const getPost = async (id: string) =>
  await api.get<Post>(`/posts/${id}`);

export const createPost = async (data: PostForm) =>
  await api.post<Post>("/posts/", data);
