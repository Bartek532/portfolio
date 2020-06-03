AOS.init();

//menu

document.querySelector('.toggle').addEventListener("click", function () {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active-menu');
    document.body.classList.toggle("stop-scrolling");
})

const links = document.querySelectorAll('.menu .links a');

for (const link of links) {
    link.addEventListener("click", () => {
        document.querySelector('.toggle').classList.toggle('active');
        document.querySelector('.menu').classList.toggle('active-menu');
        document.body.classList.toggle("stop-scrolling");

    })
}

//skills

const skills = [{
        name: "HTML",
        description: "Podczas pisania kodu, zawsze staram się, by był on zgodny z najnowszymi standardami. Używam składni zgodnej z HTML-em w wersji 5."
    },
    {
        name: "CSS",
        description: "Tworzę responsywne strony internetowe, używam reguły @media, animacji, technik układania siatki - znam techniki flexbox oraz grid. Opanowałem również preprocesory takie jak SASS czy Less."
    },
    {
        name: "JS",
        description: "Umiem posługiwać się tym językiem, znam składnię ES6+. Niestraszny jest dla mnie asynchroniczny kod, używam array methods oraz destrukturyzacji. Moje strony są interaktywne i przyjemne w użytkowaniu."
    },
    {
        name: "MySQL",
        description: "Poznałem ten język, ponieważ obsługa oraz umiejętność zarządzania bazami danych są w dzisiejszych czasach na wagę złota. Doskonalę jeszcze sposób łączenia z bazą danych."
    },
    {
        name: "SCSS",
        description: "Preprocesory CSS są bardzo użyteczne i potrafią znacząco ułatwić pracę. Jednym z największych plusów SCSS-a jest pełna zgodność jego składni z czystym CSS-em, poza tym umożliwia on znacznie szybszy import plików oraz większą przejrzystość kodu."
    },
    {
        name: "Vue",
        description: "Obok Angulara i Reacta jeden z najbardziej użytecznych frameworków języka JavaScript. Osobiście uwielbiam łatwość jego użytku oraz niekończące się możliwości. Umożliwia on tworzenie zaawansowancyh projektów, a przy tym jego kod wcale nie staje się skomplikwany."
    },
    {
        name: "Github",
        description: "Git oraz Github to znakomite narzędzia do pracy w zepole, ale nie tylko - umożliwiają one między innymi możliwość pokazania własnych projektów w łatwy i czytelny sposób."
    },
    {
        name: "Node.js",
        description: "Środowisko umożliwiające korzystanie z języka JavaScript po stronie serwera - czyż nie brzmi to pięknie? Jak na razie jestem w trakcie poznawania tej technologii, ponieważ w przyszłości chciałbym tworzyć dynamiczne aplikacje internetowe."
    },
    {
        name: "NPM",
        description: "Jest to domyślny manager pakietów dla środowiska Node.js, choć może być także używany do zarządzania warstwą front-end aplikacji WWW. Umiejętność korzystania z niego jest często pomijana przez deweloperów, pomimo, tego że jest naprawdę ważna."
    }
]

function changeInfo(id) {
    const newInfo = skills.find(item => item.name == id);

    const hexagons = document.querySelectorAll('.hexagon');
    for (const hex of hexagons) {
        hex.classList.remove('active');
        if (hex.classList.contains(`${id}`)) {
            hex.classList.add('active');
        }
    }
    document.querySelector('.third .desc div').innerHTML = newInfo.description;
    document.querySelector('.third .desc h3').innerHTML = newInfo.name;

}


//observe menu

let observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true)
        underlineMenu(entries[0].target.classList);
}, {
    threshold: [0]
});

observer.observe(document.querySelector(".first"));
observer.observe(document.querySelector(".second"));
observer.observe(document.querySelector(".third"));
observer.observe(document.querySelector(".fourth"));
observer.observe(document.querySelector(".fifth"));

function underlineMenu(data) {
    let links = document.querySelectorAll('a');

    for (const link of links) {
        link.classList.remove("active");
        link.addEventListener("click", () => {
            link.classList.add("active");
        })
    }
    document.querySelector(`a[name="${data.toString()}"]`).classList.add("active");
}


//validate

const button = document.querySelector('.reset');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const message = document.querySelector('.message');


button.addEventListener("click", () => {
    name.value.length > 3 ? name.classList.remove('error') : name.classList.add('error');
    email.value.length > 5 && email.value.includes('@') && email.value.includes('.') ? email.classList.remove('error') : email.classList.add('error');
    message.value.length > 15 ? message.classList.remove('error') : message.classList.add('error');

    name.classList.contains('error') || email.classList.contains('error') || message.classList.contains('error') ? '' : document.forms[0].reset();

})