import gsap from "gsap";

const caseItem = document.querySelectorAll(".portfolio-grid__item:not(.portfolio-grid__item--coming-soon)");

const caseAnim = (target) =>
  gsap
    .timeline()
    .fromTo(
      target,
      {
        opacity: 0,
      },
      {
        duration: 0.5,
        overwrite: true,
        opacity: 1,
      }
    )
    .fromTo(
      target.querySelector(".portfolio-overlay__btn"),
      {
        scale: 0,
      },

      { scale: 1 },
      "<"
    );

caseItem.forEach((elem) => {
  const caseOverlay = elem.querySelector(".portfolio-overlay");
  const CaseButton = elem.querySelector(".portfolio-overlay__btn");
  elem.addEventListener("mouseenter", (e) => {
    caseAnim(caseOverlay).play();
  });
  elem.addEventListener("mouseleave", (e) => {
    caseAnim(caseOverlay).reverse();
  });
  elem.addEventListener("mousemove", (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(CaseButton, {
      left: x,
      top: y,
      delay: 0.01,
    });
  });
});
