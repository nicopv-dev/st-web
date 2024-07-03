"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Wrapper from "@/components/ui/wrapper";
import { createPost } from "@/services/posts-service";
import { PostFormSchema, PostForm } from "@/types/forms/post-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostForm>({
    resolver: zodResolver(PostFormSchema),
  });
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<PostForm> = async (formData) => {
    try {
      const { data: post, status } = await createPost(formData);
      if (status === 201) {
        reset();
        router.push(`/posts/${post.id}`);
      }
    } catch (e) {
      toast({
        title: "Error",
        description: "Ocurrio un error al crear el post",
        duration: 3000,
      });
    }
  };

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-xl"
      >
        <div className="flex flex-col gap-1">
          <span>Titulo</span>
          <input
            {...register("title")}
            placeholder="Titulo"
            className="text-white bg-zinc-700 px-4 py-2 rounded-md"
          />
          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <span>Descripcion</span>
          <input
            {...register("content")}
            placeholder="Descripcion"
            className="text-white bg-zinc-700 px-4 py-2 rounded-md"
          />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span>Author</span>
          <input
            {...register("author")}
            placeholder="Author"
            className="text-white bg-zinc-700 px-4 py-2 rounded-md"
          />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}
        </div>
        <Button type="submit">Crear</Button>
      </form>
    </Wrapper>
  );
}
