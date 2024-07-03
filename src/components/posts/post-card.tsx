"use client";

import Post from "@/types/models/post";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { id, title, content } = post;

  return (
    <Link href={`/posts/${id}`} className="space-y-2">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          alt="card"
          src={
            "https://cdn.pixabay.com/photo/2018/07/13/19/56/st-peters-church-3536449_1280.jpg"
          }
          sizes="100vw"
          width={0}
          height={0}
          objectFit="cover"
          className="w-full h-64 object-cover rounded-xl transition-all duration-300 ease-in-out scale-100 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <button type="button" className="p-1.5 rounded-full bg-primary">
            <HeartIcon size={18} className="text-white" />
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-zinc-400">{content}</p>
      </div>
    </Link>
  );
}
