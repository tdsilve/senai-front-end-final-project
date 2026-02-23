import { getPosts } from "@/actions/post";
import { PostList } from "./post-list";

export const Posts = async () => {
  const posts = await getPosts();

  if (!posts) {
    return <div>No posts</div>;
  }

  return <PostList posts={posts} />;
};
