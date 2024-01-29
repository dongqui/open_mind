import { useEffect, useState, useRef } from 'react';


export default function useInfiniteScroll(callback) {
  const bottomElementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (bottomElementRef.current) {
      const element = bottomElementRef.current;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      });

      observer.observe(element);

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, [callback]);

  return [isIntersecting, setIsIntersecting];
}
