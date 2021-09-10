import { createHTMLElement, fetchDataFromCMS } from "../utils";
import { initSkillsSwiper } from "../swiper";
import { getUserLanguage } from "../utils";

export const renderSkillsSection = async () => {
  const skillsWrapper = document.querySelector(".grid__technologies ");
  const query =
    "{ allSkills(orderBy: [priority_ASC]) { name, label, description, color, icon { url } } }";
  const { allSkills } = await fetchDataFromCMS(query);

  Object.values(allSkills).forEach(skill => {
    skillsWrapper.appendChild(renderSkillsListItem(skill));
  });

  initSkillsSwiper();
  handleChangeTechnology(skillsWrapper, allSkills);
};

const renderSkillsListItem = skill => {
  const listElement = createHTMLElement("li", [
    "grid__technologies__technology",
    "swiper-slide",
  ]);

  const techBtn = createHTMLElement(
    "button",
    "grid__technologies__technology__btn",
    { title: skill.label }
  );

  techBtn.style.backgroundColor = skill.color;

  const techIcon = createHTMLElement("img", "icon", {
    src: skill.icon.url,
    alt: skill.name,
  });

  techBtn.appendChild(techIcon);
  listElement.appendChild(techBtn);

  return listElement;
};

const handleChangeTechnology = (wrapper, skills) => {
  wrapper.addEventListener("click", e => {
    if (e.target.classList.contains("grid__technologies__technology__btn")) {
      return changeActiveTechnology(e.target.title, skills);
    }
  });
};

const changeActiveTechnology = (tech, techs) => {
  const technologyBoxTitle = document.querySelector(
    ".skills .info__description__title"
  );
  const technologyBoxDescription = document.querySelector(
    ".skills .info__description__text"
  );

  const activeTech = techs.find(({ label }) => label === tech);

  technologyBoxTitle.innerText = activeTech.name;

  technologyBoxDescription.innerText =
    activeTech.description[getUserLanguage()] || activeTech.description["en"];
};
