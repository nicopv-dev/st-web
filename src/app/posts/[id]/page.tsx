import BackButton from "@/components/common/back-btn";
import Wrapper from "@/components/ui/wrapper";
import { getPost } from "@/services/posts-service";
import { error } from "console";

interface PostProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  try {
    const { data: post } = await getPost(id);
    return {
      error: false,
      post,
    };
  } catch (e) {
    return {
      error: true,
    };
  }
};

export default async function Post({ params: { id } }: PostProps) {
  const { error, post } = await getData(id);

  if (error || !post)
    return (
      <Wrapper className="flex justify-center items-center">
        <h4 className="text-2xl">Post Not Found</h4>
      </Wrapper>
    );

  return (
    <Wrapper className="flex flex-col gap-4">
      <div>
        <BackButton />
      </div>

      <div>
        <h2 className="text-2xl">{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </Wrapper>
  );
}
