import React from 'react';
import { PostType } from '../data/postsData';
export const useIntersection = (post: PostType) => {
  const postRef = React.useRef(null);

  React.useEffect(() => {
    const targetElement = postRef.current;

    if (targetElement) {
        const options = {
            threshold: .8,
          };
      const callback = (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            document.body.style.backgroundColor = post.theme.background;
          }
        });
      };

      const observer = new IntersectionObserver(callback, options);

      observer.observe(targetElement);
      return () => {
        observer.unobserve(targetElement);
      };
    }
  }, []);

  return postRef;
};
