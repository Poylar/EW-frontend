import { gsap } from "gsap";

export const breakpoints = {
  isMobile: `(max-width:768px)`,
  isDesktop: `(min-width:769px)`,
};

export const mm = gsap.matchMedia();
