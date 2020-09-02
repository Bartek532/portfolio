AOS.init();
let observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true)
        underlineMenu(entries[0].target.classList);
}, {
    threshold: [0]
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
})

function underlineMenu(data) {
    let links = document.querySelectorAll('.menu__links__link');

    for (const link of links) {
        link.classList.remove("menu__links__link--active");
        link.addEventListener("click", () => {
            link.classList.add("menu__links__link--active");
        })
    }
    document.querySelector(`a[name="${data.toString()}"]`).classList.add("menu__links__link--active");
}