import { createHTMLElement, fetchDataFromCMS, getUserLanguage } from "../utils";

export const renderProjectsSection = async () => {
  const projectsWrapper = document.querySelector(".projects");
  projectsWrapper.innerHTML = "";

  const query =
    "{ allProjects (orderBy: [level_DESC]) { name, stack, demoUrl, codeUrl, image {url} } }";
  const { allProjects } = await fetchDataFromCMS(query);

  Object.values(allProjects).forEach(project => {
    projectsWrapper.appendChild(renderProjectsListItem(project));
  });
};

const renderProjectsListItem = project => {
  const language = getUserLanguage();
  const projectTile = createHTMLElement("article", "project");
  projectTile.dataset.aos = "zoom-in";

  const projectImage = createHTMLElement("img", "project__image", {
    src: project.image.url,
    alt: project.name,
  });

  const projectDescriptionWrapper = createHTMLElement(
    "div",
    "project__description"
  );

  const projectTitle = createHTMLElement("h3", "project__description__title");
  projectTitle.innerText = project.name;

  const projectTechnologies = createHTMLElement(
    "div",
    "project__description__technologies"
  );

  projectTechnologies.innerText =
    getUserLanguage() === "pl" ? "Użyte technologie: " : "Used technologies: ";

  const projectTechnologiesList = document.createElement("ul");
  projectTechnologiesList.innerHTML = project.stack
    .split(", ")
    .map(tech => `<li>${tech}</li>`)
    .join("");

  projectTechnologies.appendChild(projectTechnologiesList);

  const projectBtns = createHTMLElement("div", "project__description__buttons");

  const projectDemoLink = createHTMLElement("a", "link", {
    href: project.demoUrl,
    target: "_blank",
    rel: "noopener",
  });

  projectDemoLink.innerHTML = "<button>live</button>";

  const projectCodeLink = createHTMLElement("a", "link", {
    href: project.codeUrl,
    target: "_blank",
    rel: "noopener",
  });

  projectCodeLink.innerHTML =
    language === "pl" ? "<button>kod</button>" : "<button>code</button>";

  projectBtns.appendChild(projectDemoLink);
  projectBtns.appendChild(projectCodeLink);

  projectDescriptionWrapper.appendChild(projectTitle);
  projectDescriptionWrapper.appendChild(projectTechnologies);
  projectDescriptionWrapper.appendChild(projectBtns);

  projectTile.appendChild(projectImage);
  projectTile.appendChild(projectDescriptionWrapper);

  return projectTile;
};
