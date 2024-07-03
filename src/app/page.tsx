import { redirect } from "next/navigation";

export default function Home() {
  redirect("/posts");

  return <div>home</div>;
}
