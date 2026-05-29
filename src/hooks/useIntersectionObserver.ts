import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  triggerOnce = true,
  rootMargin = "0px 0px -40px 0px",
}: UseIntersectionObserverOptions = {}): [
  React.RefObject<T | null>,
  boolean,
] => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, isVisible];
};

export default useIntersectionObserver;