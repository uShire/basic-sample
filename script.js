const burger = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  headerNav.classList.toggle("open");
});
