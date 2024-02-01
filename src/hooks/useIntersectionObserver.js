import { useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(options) {
  const observableRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (observableRef.current) {
      const element = observableRef.current;
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

  return [observableRef, isIntersecting, setIsIntersecting];
}
