import { createHTMLElement, fetchDataFromCMS } from "../utils";
import icons from "../../images/icons/*.svg";

export const renderSkillsSection = async () => {
  const skillsWrapper = document.querySelector(".skills");

  try {
    const query =
      "{ allSkills(orderBy: [priority_ASC]) { name, label, description } }";
    const { allSkills } = await fetchDataFromCMS(query);

    Object.values(allSkills).forEach(skill => {
      skillsWrapper.appendChild(renderSkillsListItem(skill));
    });
  } catch (e) {
    alert(e);
  }
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

  const techIcon = createHTMLElement("img", "icon", {
    src: icons[skill.label],
    alt: skill.name,
  });

  techBtn.appendChild(techIcon);

  listElement.appendChild(techBtn);

  return listElement;
};

/*
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
*/
