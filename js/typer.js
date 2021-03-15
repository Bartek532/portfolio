let i = 0;
let text = "bartosz zagrodzki";
let speed = 130;

function typer() {
    if (i < text.length) {
        document.querySelector('.home__text__name').innerHTML += text.charAt(i);
        i++;
        setTimeout(typer, speed);
    }
}
typer();