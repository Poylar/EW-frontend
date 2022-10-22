import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
const titles = document.querySelectorAll(".hero__title:not(.hero__title--counter)");
const sectionTitle = document.querySelectorAll(".section-title");
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
  sectionTitle.forEach((title) => {
    const split = new SplitText(title, { type: "lines", linesClass: "line" });
    const split2 = new SplitText(title, { type: "lines", linesClass: "line" });
    const tl1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
        },
      })
      .fromTo(
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
