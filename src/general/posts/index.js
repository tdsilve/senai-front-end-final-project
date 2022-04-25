import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { data } from '../../Data/postsData';
import StyledPosts from './StyledPosts.styled';

export default function Post() {
  // Get content's data
  const posts = data;

  const PostRef = useRef([]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (el) => {
    const current = PostRef.current
      .map((post, index) => {
        const postPositions = post.getBoundingClientRect();
        return { post, postPositions };
      })
      .find((post) => post.postPositions.bottom >= window.innerHeight * 0.5);
    document.body.style.backgroundColor = `${current.post.dataset.background}`;
  };

  const PostDetails = (isSoldOut, number) => {
    if (isSoldOut) {
      return (
        <p>
          If you are lucky, you may get the last pieces in{' '}
          <a>selected stores</a>.
        </p>
      );
    } else {
      return (
        <>
          <h3>Issue #{number}</h3>
          <a>BUY HERE</a>
          <p>
            or in <a>selected stores</a>.
          </p>
        </>
      );
    }
  };

  if (posts.length === 0) {
    return <p>No data!</p>;
  }

  return (
    <>
      {posts.map((post, index) => {
        return (
          <StyledPosts
            key={post.id}
            data-background={post.theme.background}
            ref={(el) => (PostRef.current[index] = el)}
          >
            <Image
              src={`/images/img${post.id}.png`}
              alt="cover"
              width={420}
              height={532}
            />
            {PostDetails(post.isSoldOut, post.issue)}
          </StyledPosts>
        );
      })}
    </>
  );
}
