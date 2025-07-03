import { Post } from "@/model/types";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    next: { revalidate: false },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const { posts } = await res.json();

  if (!posts || posts.length === 0) {
    throw new Error("No posts");
  }
  return posts;
}
