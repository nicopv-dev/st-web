import Failed from "@/components/common/failed";
import PostCard from "@/components/posts/post-card";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/ui/wrapper";
import { getPosts } from "@/services/posts-service";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function Posts() {
  const { data: posts, status } = await getPosts();

  if (status !== 200) return <Failed text="Error al obtener los posts" />;

  return (
    <Wrapper className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Todas las publicaciones</h2>
        <Link
          href="/posts/create"
          className="py-2 px-6 bg-primary rounded-md flex items-center w-max"
        >
          <PlusIcon />
          Crear post
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Wrapper>
  );
}
