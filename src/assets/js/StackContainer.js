import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const panels = gsap.utils.toArray(".js-stack-container");
panels.forEach((panel, i) => {
  console.log(getComputedStyle(panel).getPropertyValue("--margin-bottom"));
  var tl = gsap
    .timeline({
      scale: 0.8,
      scrollTrigger: {
        trigger: panel,
        scrub: 0.3,
        start: "top -40",
        end: "+=" + panel.offsetHeight * (panels.length - (i + 1)),
        pin: i === panels.length ? false : true,
        pinSpacing: false,
      },
    })
    .to(panel, { scale: i === panels.length - 1 ? 1 : 0.7, transformOrigin: "bottom center" });
});
