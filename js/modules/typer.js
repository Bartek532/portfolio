let i = 0;
const text = "bartosz zagrodzki";
const typingSpeed = 130;

const pageTitle = document.querySelector(".home__text__name");

export const runTyper = () => {
  if (i < text.length) {
    pageTitle.innerHTML += text.charAt(i);
    i++;
    setTimeout(runTyper, typingSpeed);
  }
};
