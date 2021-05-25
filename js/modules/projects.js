import { createHTMLElement, fetchDataFromCMS } from "../utils";

export const renderProjectsSection = async () => {
  const projectsWrapper = document.querySelector(".projects");

  const query =
    "{ allProjects (orderBy: [level_DESC]) { name, stack, demoUrl, codeUrl, image {url} } }";
  const { allProjects } = await fetchDataFromCMS(query);

  Object.values(allProjects).forEach(project => {
    projectsWrapper.appendChild(renderProjectsListItem(project));
  });
};

const renderProjectsListItem = project => {
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

  projectTechnologies.innerText = "Użyte technologie";

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

  projectDemoLink.innerHTML = "<button>demo</button>";

  const projectCodeLink = createHTMLElement("a", "link", {
    href: project.codeUrl,
    target: "_blank",
    rel: "noopener",
  });

  projectCodeLink.innerHTML = "<button>kod</button>";

  projectBtns.appendChild(projectDemoLink);
  projectBtns.appendChild(projectCodeLink);

  projectDescriptionWrapper.appendChild(projectTitle);
  projectDescriptionWrapper.appendChild(projectTechnologies);
  projectDescriptionWrapper.appendChild(projectBtns);

  projectTile.appendChild(projectImage);
  projectTile.appendChild(projectDescriptionWrapper);

  return projectTile;
};
