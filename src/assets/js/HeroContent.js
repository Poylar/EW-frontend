document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  const heroItem = document.querySelectorAll(".hero-content__item");
  const offset = 100;
  heroItem.forEach((elem, index) => {
    const form = (heroContent.getBoundingClientRect().height + 78 - heroItem[0].getBoundingClientRect().width) / heroItem.length - 1;
    elem.style.transform = `translateY(-${(form * index) / 2}px)`;
  });
});
