import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(SplitText);
// const titles = document.querySelectorAll(".title");
// window.addEventListener("load", () => {
//   titles.forEach((title) => {
//     const split = new SplitText(title, { type: "chars" });
//     let tl = gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: title,
//           start: "top center", // when the top of the trigger hits the top of the viewport
//           markers: true,
//           snap: {
//             snapTo: "labels", // snap to the closest label in the timeline
//             duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//             delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//             ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
//           },
//         },
//       })
//       .fromTo(
//         split.chars,
//         {
//           y: title.offsetHeight,
//           opacity: 0,
//         },
//         {
//           duration: 0.8,
//           y: 0,
//           opacity: 1,
//           stagger: 0.01,
//         }
//       );
//   });
// });
