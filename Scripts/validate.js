const button = document.querySelector('.info__form__reset');
const name = document.querySelector('.info__form__inputs__name');
const email = document.querySelector('.info__form__inputs__email');
const message = document.querySelector('.info__form__inputs__message');


button.addEventListener("click", () => {
    name.value.length > 3 ? name.classList.remove('--error') : name.classList.add('--error');
    email.value.length > 5 && email.value.includes('@') && email.value.includes('.') ? email.classList.remove('--error') : email.classList.add('--error');
    message.value.length > 15 ? message.classList.remove('--error') : message.classList.add('--error');

    name.classList.contains('--error') || email.classList.contains('--error') || message.classList.contains('info__form__inputs__label--error') ? '' : document.forms[0].reset();

})