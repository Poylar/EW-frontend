import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const header = document.querySelector(".header");

const showHeader = gsap.fromTo(
  header,
  {
    position: "absolute",
    y: -100,
  },
  {
    position: "fixed",
    y: 0,
  }
);
gsap.to(header, { duration: 0.1, y: 0 });
let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
  onUpdate: (self) => {
    let smoothDirection = self.getVelocity() < 0 ? -1 : 1;
    smoothDirection === -1 ? showHeader.play() : showHeader.reverse();
  },
});

export default smoother;
