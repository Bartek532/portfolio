let i = 0;
const text = "bartosz zagrodzki";
const typingSpeed = 130;

const pageTitle = document.querySelector(".home__text__name");

const typer = () => {
  if (i < text.length) {
    pageTitle.innerHTML += text.charAt(i);
    i++;
    setTimeout(typer, typingSpeed);
  }
};

typer();
