import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(options) {
  const bottomElementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (bottomElementRef.current) {
      const element = bottomElementRef.current;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      }, options);

      observer.observe(element);

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, [options]);

  return [bottomElementRef, isIntersecting, setIsIntersecting];
}
