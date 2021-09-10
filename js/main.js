import { renderProjectsSection } from "./modules/projects";
import { renderContributionsInProjects } from "./modules/contributions";
import { renderSkillsSection } from "./modules/skills";
import { runTyper } from "./modules/typer";
import { initMenuObservation } from "./modules/menu/menu";
import { initHandleMobileMenu } from "./modules/menu/mobile_menu";
import { initTranslatingPage } from "./modules/translate";

AOS.init();

runTyper();
initTranslatingPage();
initMenuObservation();
initHandleMobileMenu();
renderSkillsSection();
//renderProjectsSection();
//renderContributionsInProjects();
