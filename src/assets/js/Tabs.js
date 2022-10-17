import gsap from "gsap";

const tabTrigger = document.querySelectorAll("[data-tab]");
const tab = document.querySelectorAll("[data-tab-item]");

tabTrigger.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const dataCategory = elem.dataset.tab;
    const targetItem = document.querySelector(`[data-tab-item="${dataCategory}"]`);
    tab.forEach((el) => {
      const item = el.querySelectorAll(".portfolio-grid__item");
      item.forEach((i) => {
        gsap.to(i, {
          scale: 0,
        });
      });
    });
    targetItem.querySelector();
  });
});

const section = gsap.utils.toArray(".section");

section.forEach((elem) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top bottom",
      markers: true,
    
    },
  });
  tl.fromTo(
    elem,
    { y: 180 },
    {
      duration: 1,
      y: 0,
    }
  );
});
