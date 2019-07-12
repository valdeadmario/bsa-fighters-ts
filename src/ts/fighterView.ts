import View from "./view";
import { Fighter, FighterDetails } from "./fightersView";

class FighterView extends View {
  constructor(
    fighter: Fighter,
    handleClick: (event: Event, fighter: Fighter) => Promise<void>,
    handleSelect: (event: Event, fighter: FighterDetails) => void
  ) {
    super();

    this.createFighter(fighter, handleClick, handleSelect);
  }

  createFighter(
    fighter: Fighter,
    handleClick: {
      (event: Event, fighter: Fighter): Promise<void>;
    },
    handleSelect: {
      (event: Event, fighter: FighterDetails): void;
    }
  ): void {
    const { name, source, _id } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);

    const checkBox = this.createElement({
      tagName: "input",
      className: "choise-fighter",
      attributes: { type: "checkbox", id: `fighter-${_id}`, name: "check[]" }
    });

    this.element = this.createElement({
      tagName: "label",
      className: "fighter",
      attributes: { for: `fighter-${_id}` }
    });
    this.element.append(checkBox, imageElement, nameElement);

    this.element.addEventListener(
      "change",
      event => {
        const fighterElementId = document.querySelector(
          `#fighter-${_id}`
        ) as HTMLInputElement;
        if (fighterElementId.checked) {
          handleClick(event, fighter);
          this.element.style.backgroundColor = "#ba7cdf";
          this.element.style.boxShadow = "4px 11px 0px 0px rgba(0,0,0,0.75)";
          this.element.style.border = "#fefefe 5px solid";
        } else {
          handleSelect(event, fighter as FighterDetails);
          this.element.style.backgroundColor = "";
          this.element.style.boxShadow = "";
          this.element.style.border = "";
        }
      },
      false
    );
  }

  createName(name: string): HTMLElement {
    const nameElement = this.createElement({
      tagName: "span",
      className: "name"
    });
    nameElement.innerText = name;

    return nameElement;
  }

  createImage(source: string): HTMLElement {
    const attributes = { src: source };
    const imgElement = this.createElement({
      tagName: "img",
      className: "fighter-image",
      attributes
    });

    return imgElement;
  }
}

export default FighterView;
