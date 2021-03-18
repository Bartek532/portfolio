const skills = [
  {
    id: "html",
    name: "HTML",
    description:
      "Podczas pisania kodu, zawsze staram się, by był on zgodny z najnowszymi standardami. Używam semantycznej składni zgodnej z HTML-em w wersji 5.",
  },
  {
    id: "css",
    name: "CSS",
    description:
      "Tworzę responsywne strony internetowe, używam reguły @media, animacji, technik układania siatki - znam techniki flexbox oraz grid. Opanowałem również preprocesory takie jak np. SCSS",
  },
  {
    id: "js",
    name: "JavaScript",
    description:
      "Umiem posługiwać się tym językiem, znam składnię ES6+. Niestraszny jest dla mnie asynchroniczny kod, używam array methods oraz destrukturyzacji. Moje strony są interaktywne i przyjemne w użytkowaniu.",
  },
  {
    id: "ts",
    name: "TypeScript",
    description:
      "W swoich projektach najczęściej używam nadzbioru języka JavaScript: TypeScript-u. Dzięki typowaniu pozwala on pisać kod, który jest łatwiejszy do zrozumienia, a ponadto daje możliwość wychwytywania błędów już w fazie transpilacji, co znacząco wpływa na czas debugowania.",
  },
  {
    id: "vue",
    name: "Vue",
    description:
      "Obok Angulara i Reacta jeden z najbardziej użytecznych frameworków języka JavaScript. Osobiście uwielbiam łatwość jego użytku oraz niekończące się możliwości. Uefektywnia on proces tworzenia zaawansowancyh projektów, a przy tym jego kod wcale nie staje się skomplikowany.",
  },
  {
    id: "react",
    name: "React",
    description:
      "Obecnie najpopularniejszy framework języka JavaScript. Poznałem go ze względu na ogrom możliwości, jak i mocno rozbudowane community. W połączeniu z TypeScript-em tworzy on znakomitą bazę do budowy skomplikowanych aplikacji internetowych. Ogranicza nas tylko wyobraźnia! ",
  },
  {
    id: "sass",
    name: "SCSS",
    description:
      "Preprocesory CSS są bardzo użyteczne i potrafią znacząco ułatwić pracę. Jednym z największych plusów SCSS-a jest pełna zgodność jego składni z czystym CSS-em, poza tym umożliwia on znacznie szybszy import plików oraz większą przejrzystość kodu.",
  },
  {
    id: "next",
    name: "Next.js",
    description:
      "Obecnie moja ulubiona technologia front-endowa. Rozwiązuje problemy React-a, a przy tym wprowadza swoje, znakomite rozwiązania. Przy czym kod aplikacji wcale nie staje się bardziej skomplikowany, a wręcz przeciwnie! Czego chcieć więcej?",
  },
  {
    id: "node",
    name: "Node.js",
    description:
      "Środowisko umożliwiające korzystanie z języka JavaScript po stronie serwera - czyż nie brzmi to pięknie? Swobodnie czuję się we frameworku Express.js, ale ciągle poznaję kolejne użyteczne narzędzia i biblioteki, by moje aplikacje były jak najlepsze.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description:
      "Poznałem ten język, ponieważ umiejętność zarządzania bazami danych jest w dzisiejszych czasach na wagę złota. W tym momencie jego składnia nie ma dla mnie zbyt wielu tajemnic. Sprawnie radzę sobie również z ORM-ami - moim ulubionym jest Prisma, m.in. ze względu na wspaniałą obsługę TypeScript-u.",
  },
  {
    id: "mongo",
    name: "mongoDB",
    description:
      "Uznałem, że warto umieć posługiwać się zarówno relacyjnymi, jak i tymi nierelacyjnymi bazami danych. Mój wybór padł na MongoDB - bazę opartą na dokumentach. Choć ma swoje wady, w parze z Node.js działa naprawdę świetnie i znajduje zastosowanie w wielu różnych projektach.",
  },

  {
    id: "git",
    name: "Git",
    description:
      "Git oraz Github to znakomite narzędzia do pracy w zepole, ale nie tylko - umożliwiają one między innymi możliwość przedstawienia własnych projektów w łatwy i czytelny sposób.",
  },
];

const technologiesList = document.querySelector(".grid__technologies");

technologiesList.addEventListener("click", e => {
  if (e.target.classList.contains("grid__technologies__technology__btn")) {
    return changeActiveTechnology(e.target.dataset.tech);
  }
});

const changeActiveTechnology = tech => {
  const technologyBoxTitle = document.querySelector(
    ".skills .info__description__title"
  );
  const technologyBoxDescription = document.querySelector(
    ".skills .info__description__text"
  );

  const activeTech = skills.find(({ id }) => id === tech);

  technologyBoxTitle.innerText = activeTech.name;
  technologyBoxDescription.innerText = activeTech.description;
};

//Swiper
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
