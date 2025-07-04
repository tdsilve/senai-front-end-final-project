"use client";

import React from "react";
type IntrsectionCallback = (_entries: IntersectionObserverEntry[]) => void;
interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  onIntersect: IntrsectionCallback;
}

export const useIntersection = <T extends HTMLElement>({
  onIntersect,
  ...options
}: UseIntersectionObserverOptions) => {
  const ref = React.useRef<T>(null);
  React.useEffect(() => {
    const target = ref.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [onIntersect, options]);

  return ref;
};
