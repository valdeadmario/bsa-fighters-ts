import View from "./view";
import FightersView from "./fightersView";
import { fighterService } from "./services/fightersService";
import Fight from "./fight";

import { Fighter } from "./fightersView";

class App {
  constructor() {
    this.startApp();
  }

  static rootElement = document.getElementById("root") as HTMLDivElement;
  static loadingElement = document.getElementById(
    "loading-overlay"
  ) as HTMLDivElement;

  async startApp(): Promise<void> {
    try {
      App.loadingElement.style.visibility = "visible";

      const fighters: Fighter[] = await fighterService.getFighters();
      const fightersView = new FightersView(fighters);
      const fightersElement = fightersView.element;

      const view = new View();

      const button = view.createElement({
        tagName: "button",
        className: "start-game"
      });
      button.innerText = "Start Game";

      App.rootElement.appendChild(fightersElement);
      App.rootElement.appendChild(button);

      button.addEventListener("click", e => {
        e.preventDefault();
        if (fightersView.fighterToFight.length === 2) {
          App.rootElement.innerHTML = "";
          const [first, second] = fightersView.fighterToFight;
          new Fight(first, second);
        } else {
          alert("Can choice only 2 fighters!");
        }
      });
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = "Failed to load data";
    } finally {
      App.loadingElement.style.visibility = "hidden";
    }
  }
}

export default App;
