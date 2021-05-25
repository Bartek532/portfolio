import { createHTMLElement, fetchDataFromCMS } from "../utils";
import icons from "../../images/icons/*.svg";
import { initSkillsSwiper } from "../swiper";

export const renderSkillsSection = async () => {
  const skillsWrapper = document.querySelector(".grid__technologies ");

  try {
    const query =
      "{ allSkills(orderBy: [priority_ASC]) { name, label, description, color } }";
    const { allSkills } = await fetchDataFromCMS(query);

    Object.values(allSkills).forEach(skill => {
      skillsWrapper.appendChild(renderSkillsListItem(skill));
    });

    initSkillsSwiper();
    handleChangeTechnology(skillsWrapper, allSkills);
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

  techBtn.style.backgroundColor = skill.color;

  const techIcon = createHTMLElement("img", "icon", {
    src: icons[skill.label],
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
  technologyBoxDescription.innerText = activeTech.description;
};
