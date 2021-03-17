const swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 4,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    560: {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 5,
    },
    650: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 4,
    },
    800: {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 5,
    },
    1000: {
      slidesPerView: 6,
      spaceBetween: 25,
      slidesPerGroup: 6,
    },
  },
});
/*const arrowLeft = document.querySelector(".grid__controls__btn--left");
const arrowRight = document.querySelector(".grid__controls__btn--right");

const technologiesList = document.querySelector(".grid__technologies");
let scrollValue = 0;
const marginBetweenElements = 20;

arrowRight.addEventListener("click", () => {
  const {
    width: elementWidth,
  } = technologiesList.children[0].getBoundingClientRect();
  const { width: listWidth } = technologiesList.getBoundingClientRect();

  const maxScroll = -(
    technologiesList.children.length * (elementWidth + marginBetweenElements) -
    listWidth / 2 -
    elementWidth / 2
  );

  scrollValue =
    scrollValue - elementWidth - marginBetweenElements < maxScroll
      ? maxScroll
      : scrollValue - elementWidth - marginBetweenElements;

  technologiesList.style.transform = `translateX(${scrollValue}px)`;
});

arrowLeft.addEventListener("click", () => {
  const {
    width: elementWidth,
  } = technologiesList.children[0].getBoundingClientRect();
  const { width: listWidth } = technologiesList.getBoundingClientRect();

  const maxScroll = listWidth / 2 - elementWidth / 2 - marginBetweenElements;

  scrollValue =
    scrollValue + elementWidth + marginBetweenElements + 10 > maxScroll
      ? maxScroll
      : scrollValue + elementWidth + marginBetweenElements;
  technologiesList.style.transform = `translateX(${scrollValue}px)`;
});
*?

/*
const skills = [
  {
    name: "HTML",
    description:
      "Podczas pisania kodu, zawsze staram się, by był on zgodny z najnowszymi standardami. Używam składni zgodnej z HTML-em w wersji 5."
  },
  {
    name: "CSS",
    description:
      "Tworzę responsywne strony internetowe, używam reguły @media, animacji, technik układania siatki - znam techniki flexbox oraz grid. Opanowałem również preprocesory takie jak SASS czy Less."
  },
  {
    name: "JS",
    description:
      "Umiem posługiwać się tym językiem, znam składnię ES6+. Niestraszny jest dla mnie asynchroniczny kod, używam array methods oraz destrukturyzacji. Moje strony są interaktywne i przyjemne w użytkowaniu."
  },
  {
    name: "PostgreSQL",
    description:
      "Poznałem ten język, ponieważ obsługa oraz umiejętność zarządzania bazami danych są w dzisiejszych czasach na wagę złota. W tym momencie jego składnia nie ma dla mnie zbyt wielu wyzwań. Sprawnie radzę sobie również z ORM-em jak np. Prisma."
  },
  {
    name: "SCSS",
    description:
      "Preprocesory CSS są bardzo użyteczne i potrafią znacząco ułatwić pracę. Jednym z największych plusów SCSS-a jest pełna zgodność jego składni z czystym CSS-em, poza tym umożliwia on znacznie szybszy import plików oraz większą przejrzystość kodu."
  },
  {
    name: "Vue",
    description:
      "Obok Angulara i Reacta jeden z najbardziej użytecznych frameworków języka JavaScript. Osobiście uwielbiam łatwość jego użytku oraz niekończące się możliwości. Umożliwia on tworzenie zaawansowancyh projektów, a przy tym jego kod wcale nie staje się skomplikwany."
  },
  {
    name: "Github",
    description:
      "Git oraz Github to znakomite narzędzia do pracy w zepole, ale nie tylko - umożliwiają one między innymi możliwość pokazania własnych projektów w łatwy i czytelny sposób."
  },
  {
    name: "Node.js",
    description:
      "Środowisko umożliwiające korzystanie z języka JavaScript po stronie serwera - czyż nie brzmi to pięknie? Jak na razie jestem w trakcie poznawania tej technologii, ponieważ w przyszłości chciałbym tworzyć dynamiczne aplikacje internetowe."
  },
  {
    name: "NPM",
    description:
      "Jest to domyślny manager pakietów dla środowiska Node.js, choć może być także używany do zarządzania warstwą front-end aplikacji WWW. Umiejętność korzystania z niego jest często pomijana przez deweloperów, pomimo, tego że jest naprawdę ważna."
  }
];

function changeInfo(id) {
  const newInfo = skills.find(item => item.name == id);

  const hexagons = document.querySelectorAll(".info__grid__field__hex");
  for (const hex of hexagons) {
    hex.classList.remove("info__grid__field__hex--active");
    if (hex.classList.contains(`${id}`)) {
      hex.classList.add("info__grid__field__hex--active");
    }
  }
  document.querySelector(".info__desc__text").innerHTML = newInfo.description;
  document.querySelector(".info__desc__title").innerHTML = newInfo.name;
}
*/
