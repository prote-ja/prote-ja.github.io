import { useEffect } from "react";
import { useLocation } from "react-router";

interface ScrollToTopProps {
  behavior?: "auto" | "smooth"; // Optional: control scroll animation behavior
}

export function ScrollToTop({ behavior = "smooth" }: ScrollToTopProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo({
      top: 0,
      behavior: behavior, // 'smooth' for animation, 'auto' for instant scroll
    });
  }, [pathname, behavior]); // Re-run effect whenever pathname or behavior changes

  return null; // This component doesn't render anything itself
}
