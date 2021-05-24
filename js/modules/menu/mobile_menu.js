export const initHandleMobileMenu = () => {
  const hamburger = document.querySelector(".nav__hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("nav__hamburger--active");
    menu.classList.toggle("menu--active");
    document.body.classList.toggle("--stop-scrolling");
  });

  const linksList = document.querySelector(".menu__links");

  linksList.addEventListener("click", e => {
    if (e.target.classList.contains("menu__links__link")) {
      hamburger.classList.toggle("nav__hamburger--active");
      menu.classList.toggle("menu--active");
      document.body.classList.remove("--stop-scrolling");
    }
  });
};
