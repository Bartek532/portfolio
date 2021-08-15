import en from "../../langs/en.json";
import pl from "../../langs/pl.json";
import { getUserLanguage } from "../utils";

const languages = {
  en,
  pl,
};

export const initTranslatingPage = () => {
  const language = getUserLanguage();
  console.log(language);
  if (language.includes("pl")) {
    return translatePage("pl");
  }

  return translatePage("en");
};

export const translatePage = async language => {
  document.querySelector("a[href='#home']").innerText =
    languages[language].navbar.start;

  document.querySelector("a[href='#about']").innerText =
    languages[language].navbar.about;

  document.querySelector("a[href='#skills']").innerText =
    languages[language].navbar.skills;

  document.querySelector("a[href='#projects']").innerText =
    languages[language].navbar.projects;

  document.querySelector("a[href='#contact']").innerText =
    languages[language].navbar.contact;

  document.querySelector("#about .header__title").innerText =
    languages[language].sections.about.title;

  document.querySelector("#about .info__description__title").innerText =
    languages[language].sections.about.description.title;

  document.querySelector("#about .info__description__text").innerHTML =
    languages[language].sections.about.description.text;

  document.querySelector("#skills .header__title").innerText =
    languages[language].sections.skills.title;

  document.querySelector("#skills .info__description__title").innerText =
    languages[language].sections.skills.description.title;

  document.querySelector("#skills .info__description__text").innerHTML =
    languages[language].sections.skills.description.text;

  document.querySelector("#projects .header__title").innerText =
    languages[language].sections.projects.title;

  document.querySelector("#projects .tip").innerText =
    languages[language].sections.projects.tip;

  document.querySelector("#contact .header__title").innerText =
    languages[language].sections.contact.title;

  document.querySelector("#contact [name='name']").placeholder =
    languages[language].sections.contact.form.name;

  document.querySelector("#contact [name='email']").placeholder =
    languages[language].sections.contact.form.email;

  document.querySelector("#contact [name='message']").placeholder =
    languages[language].sections.contact.form.message;

  document.querySelector("#contact .info__form__submit").innerText =
    languages[language].sections.contact.form.submitBtn;
};

window.addEventListener("onlanguagechange", initTranslatingPage);

const languageChangeSelect = document.querySelector("#language-select");

languageChangeSelect.addEventListener("change", e => {
  localStorage.setItem("lang", e.target.value);
  initTranslatingPage();
});
