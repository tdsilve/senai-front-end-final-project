import { Post } from "@/model/types";

import { PostItem } from "./post-item";
import { getPosts } from "@/app/actions/post";

export const Posts = async () => {
  const posts = await getPosts();

  if (!posts) {
    return <div>No posts</div>;
  }

  return (
    <div className="space-y-10">
      {posts?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
