import Wrapper from "@/components/ui/wrapper";
import Link from "next/link";

export default function NotFound() {
  return (
    <Wrapper>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/posts">Return Home</Link>
    </Wrapper>
  );
}
