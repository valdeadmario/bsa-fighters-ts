import View from "./view";
import App from "./app";
import { IFighter } from "./fighter";
const rootElement = document.getElementById("root") as HTMLDivElement;

class FightView extends View {
  ring: HTMLElement;
  message: HTMLElement;
  firstView: HTMLElement;
  secondView: HTMLElement;
  button: HTMLElement;

  constructor(first: IFighter, second: IFighter) {
    super();

    this.ring = this.createElement({ tagName: "div", className: "ring" });
    this.message = this.createElement({ tagName: "div", className: "message" });

    this.firstView = this.createFighterToFight(first);
    this.secondView = this.createFighterToFight(second, true);
    this.button = this.createElement({ tagName: "button", className: "kick" });
    this.button.innerText = "Kick him";

    this.ring.append(this.firstView, this.message, this.secondView);

    rootElement.appendChild(this.ring);
    rootElement.appendChild(this.button);
  }

  createFighterToFight(person: IFighter, isTransform?: boolean): HTMLElement {
    const image = this.createElement({
      tagName: "img",
      className: "fighter-image",
      attributes: {
        src: person.source,
        style: `${isTransform ? "transform: scale(-1, 1)" : ""}`
      }
    });
    const fighter = this.createElement({
      tagName: `div`,
      className: `fighter-${person.name}`
    });
    const listFirst = this.createSkills(person.name, {
      attack: person.attack,
      health: person.health,
      defense: person.defense
    });
    fighter.append(image, listFirst);
    return fighter;
  }

  createSkills(name: string, skills: { [key: string]: number }): HTMLElement {
    const list = this.createElement({
      tagName: "ul",
      className: "skills",
      attributes: { id: `${name}` }
    });

    for (let key in skills) {
      let element = this.createElement({
        tagName: "li",
        className: `skills-item ${key}`
      });
      element.innerText = `${key}: ${skills[key]}`;

      console.log(list.append(element));
    }
    return list;
  }

  winner(name: string): void {
    const div = this.createElement({ tagName: "div", className: "winner" });
    const back = this.createElement({
      tagName: "button",
      className: "play-again"
    });
    back.innerText = `Play Again`;
    div.innerHTML = `${name} winner!`;

    rootElement.innerHTML = "";
    rootElement.append(div, back);
    back.addEventListener("click", () => {
      rootElement.innerHTML = "";
      new App();
    });
  }
}

export default FightView;
