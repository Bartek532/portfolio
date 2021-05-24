const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    underlineMenuItemById(entries[0].target.id);
  }
}, options);

const underlineMenuItemById = id => {
  const links = document.querySelectorAll(".menu__links__link");

  links.forEach(link => {
    link.classList.remove("menu__links__link--active");
  });

  document
    .querySelector(`a[href="#${id}"]`)
    .classList.add("menu__links__link--active");
};

export const initMenuObservation = () => {
  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });
};
