document.querySelector('.nav__hamburger').addEventListener("click", function () {
    this.classList.toggle('nav__hamburger--active');
    document.querySelector('.menu').classList.toggle('menu--active');
    document.body.classList.toggle("--stop-scrolling");
})

const links = document.querySelectorAll('.menu__links__link');

for (const link of links) {
    link.addEventListener("click", () => {
        document.querySelector('.nav__hamburger').classList.toggle('nav__hamburger--active');
        document.querySelector('.menu').classList.toggle('menu--active');
        if (window.innerWidth < 1000) {
            document.body.classList.toggle("--stop-scrolling");
        }
    })
}