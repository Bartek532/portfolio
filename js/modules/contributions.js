import { createHTMLElement, fetchDataFromCMS, getUserLanguage } from "../utils";

export const renderContributionsInProjects = async () => {
  const contributionsWrapper = document.querySelector(".contributions");
  contributionsWrapper.innerHTML = "";

  const query =
    "{ allContributions { name, description, demoUrl, codeUrl, image {url} } }";
  const { allContributions } = await fetchDataFromCMS(query);

  Object.values(allContributions).forEach(contribution => {
    contributionsWrapper.appendChild(renderContributionListItem(contribution));
  });
};

const renderContributionListItem = contribution => {
  const language = getUserLanguage();
  const contributionTile = createHTMLElement("article", "contribution");
  contributionTile.dataset.aos = "zoom-in";

  const contributionImage = createHTMLElement("img", "contribution__image", {
    src: contribution.image.url,
    alt: contribution.name,
  });

  const contributionDescriptionWrapper = createHTMLElement(
    "div",
    "contribution__description"
  );

  const contributionTitle = createHTMLElement(
    "h3",
    "contribution__description__title"
  );
  contributionTitle.innerText = contribution.name;

  const contributionDescription = createHTMLElement(
    "p",
    "contribution__description__text"
  );

  contributionDescription.innerText =
    contribution.description[language || "en"];

  const contributionBtns = createHTMLElement(
    "div",
    "contribution__description__buttons"
  );

  const contributionDemoLink = createHTMLElement("a", "link", {
    href: contribution.demoUrl,
    target: "_blank",
    rel: "noopener",
  });

  contributionDemoLink.innerHTML = "<button>live</button>";

  const contributionCodeLink = createHTMLElement("a", "link", {
    href: contribution.codeUrl,
    target: "_blank",
    rel: "noopener",
  });

  contributionCodeLink.innerHTML =
    language === "pl" ? "<button>kod</button>" : "<button>code</button>";

  contributionBtns.appendChild(contributionDemoLink);
  contributionBtns.appendChild(contributionCodeLink);

  contributionDescriptionWrapper.appendChild(contributionTitle);
  contributionDescriptionWrapper.appendChild(contributionDescription);
  contributionDescriptionWrapper.appendChild(contributionBtns);

  contributionTile.appendChild(contributionImage);
  contributionTile.appendChild(contributionDescriptionWrapper);

  return contributionTile;
};
