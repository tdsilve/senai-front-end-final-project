'use client';
import React from 'react';
import { posts, PostType } from '../data/postsData';
import Image from 'next/image';
import { useIntersection } from '../hooks/useIntersection';

export const Posts = () => {
  if (!posts) {
    return <p>No data!</p>;
  }

  return (
    <div className='space-y-10'>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

const Post = ({ post }: { post: PostType }) => {
  const postRef = useIntersection(post);

  return (
    <div ref={postRef} className="flex flex-col items-center">
      <div className='relative w-[450px] h-[500px]'>
        <Image
          src={post.imgSrc}
          fill
          alt="issue cover image"
        />
      </div>

      {post.isSoldOut ? (
        <p>If you are lucky, you may get the last pieces in selected stores.</p>
      ) : (
        <div className="text-center">
          <p>Issue #{post.issue}</p>
          <p className="uppercase text-white">
            <WhiteLink text="Buy here" />
          </p>
          <p>
            or in <WhiteLink text="selected stores." />
          </p>
        </div>
      )}
    </div>
  );
};

const WhiteLink = ({ text }: { text: string }) => {
  return (
    <a className="text-white hover:underline hover:cursor-pointer">{text}</a>
  );
};
