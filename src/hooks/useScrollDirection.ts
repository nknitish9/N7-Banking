import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down";

interface UseScrollDirectionOptions {
  /** Minimum pixels of movement before a direction change is registered. */
  threshold?: number;
  /** Distance from the top of the page after which `isAtTop` becomes false. */
  topOffset?: number;
}

interface UseScrollDirectionResult {
  direction: ScrollDirection;
  isAtTop: boolean;
  scrollY: number;
}

/**
 * Tracks vertical scroll direction and whether the page is near the top.
 * Uses requestAnimationFrame for smooth, throttled updates.
 */
const useScrollDirection = ({
  threshold = 6,
  topOffset = 24,
}: UseScrollDirectionOptions = {}): UseScrollDirectionResult => {
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (Math.abs(delta) >= threshold) {
        setDirection(delta > 0 ? "down" : "up");
        lastY = currentY;
      }

      setIsAtTop(currentY <= topOffset);
      setScrollY(currentY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Initialize state on mount
    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, topOffset]);

  return { direction, isAtTop, scrollY };
};

export default useScrollDirection;
