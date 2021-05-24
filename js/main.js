import { renderProjectsSection } from "./modules/projects";
import { renderSkillsSection } from "./modules/skills";
import { runTyper } from "./modules/typer";
import { initMenuObservation } from "./modules/menu/menu";
import { initHandleMobileMenu } from "./modules/menu/mobile_menu";
import { initSwiper } from "./swiper";

AOS.init();

runTyper();
initMenuObservation();
initHandleMobileMenu();
initSwiper();
renderSkillsSection();
renderProjectsSection();
