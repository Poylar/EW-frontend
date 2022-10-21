import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
const titles = document.querySelectorAll(".hero__title");
window.addEventListener("load", () => {
  titles.forEach((title) => {
    const split = new SplitText(title, { type: "lines", linesClass: "line" });
    const split2 = new SplitText(title, { type: "lines", linesClass: "line" });

    gsap.fromTo(
      split.lines,
      {
        y: 200,
      },
      {
        duration: 0.8,
        y: 0,

        stagger: 0.01,
      }
    );
  });
});
