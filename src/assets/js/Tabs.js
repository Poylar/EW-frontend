import gsap from "gsap";

const tabTrigger = document.querySelectorAll("[data-tab]");
const tab = document.querySelectorAll("[data-tab-item]");
const currentItem = document.querySelector(".case-category__item--current");
gsap.set([...tab].slice(1), {
  display: "none",
});

gsap.registerEffect({
  name: "setWidth",
  effect: (targets, config) => {
    return gsap.to(targets, {
      width: currentItem?.offsetWidth,
    });
  },
});

gsap.effects.setWidth(".case-category__line");
tabTrigger.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (elem.classList.contains("case-category__item--current")) return;
    tabTrigger.forEach((trigger) => {
      trigger.classList.remove("case-category__item--current");
    });
    elem.classList.add("case-category__item--current");
    const currentItem = document.querySelector(".case-category__item--current");
    const dataCategory = elem.dataset.tab;
    const targetItem = document.querySelector(`[data-tab-item="${dataCategory}"]`);
    gsap.to(".case-category__line", {
      x: currentItem.getBoundingClientRect().left - 40,
      width: currentItem ? currentItem.offsetWidth : null,
    });

    tab.forEach((el) => {
      const item = el.querySelectorAll(".portfolio-grid__item");
      item.forEach((i) => {
        const tl = gsap.timeline();
        tl.to(i, {
          scale: 0,
          duration: 0.5,
          onComplete: () => {
            el.style.display = "none";
            targetItem.style.display = "block";
          },
        }).to(targetItem, {
          onStart: () => {
            const currentTabItem = targetItem.querySelectorAll(".portfolio-grid__item");
            currentTabItem.forEach((current) => {
              gsap.to(current, {
                duration: 0.5,
                scale: 1,
              });
            });
          },
        });
      });
    });
  });
});
