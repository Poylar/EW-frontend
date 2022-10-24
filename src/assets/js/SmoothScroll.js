import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { breakpoints, mm } from "./MatchMedia";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const header = document.querySelector(".header");

const showHeader = gsap.fromTo(
  header,
  {
    position: "fixed",
    opacity: 0,
  },
  {
    position: "fixed",
    opacity: 1,
  }
);

gsap.to(header, { duration: 0.1, y: 0 });
let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",

  effects: true,
  onUpdate: (self) => {
    let smoothDirection = self.getVelocity() < 0 ? -1 : 1;
    if (self.scrollTop() > 200) {
      smoothDirection === -1 ? showHeader.play() : showHeader.reverse();
    }
  },
});

const video = document.querySelector(".js-start-video");
mm.add(breakpoints.isDesktop, () => {
  const tl1 = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero-video",
        start: "top top",
        end: "bottom",
        scrub: true,

        pin: true,
        pinType: "transform",
      },
    })
    .to(video, {
      delay: 0.2,
      padding: 0,
      duration: 2,
      transformOrigin: "center center",
    })
    .to({}, { duration: 2 });
});

export default smoother;
