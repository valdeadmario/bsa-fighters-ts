import View from "./view";
import FighterView from "./fighterView";
import { fighterService } from "./services/fightersService";

const modal = document.querySelector(".modal") as HTMLDivElement;
const health = document.querySelector(".form-health") as HTMLInputElement;
const power = document.querySelector(".form-power") as HTMLInputElement;
const avatar = document.querySelector(".avatar") as HTMLImageElement;
const close = document.querySelector(".close") as HTMLSpanElement;
const modalForm = document.querySelector(".modal-form") as HTMLFormElement;

export type Fighter = {
  _id: string;
  name: string;
  source: string;
};

type FighterSkills = {
  health: number;
  attack: number;
  defense: number;
};

export type FighterDetails = Fighter & FighterSkills;

class FightersView extends View {
  fighterToFight: FighterDetails[];
  handleClick: (event: Event, fighter: Fighter) => Promise<void>;
  handleSelect: (event: Event, fighter: FighterDetails) => void;

  constructor(fighters: Fighter[]) {
    super();

    this.handleClick = this.handleFighterClick.bind(this);
    this.handleSelect = this.handleFighterSelect.bind(this);
    this.fighterToFight = [];
    this.createFighters(fighters);

    modalForm.addEventListener("submit", e => {
      e.preventDefault();
      if (!(e.target instanceof HTMLElement)) {
        return;
      }
      const idx: string | undefined = e.target.dataset.id;
      const oldFighter: FighterDetails = this.fightersDetailsMap.get(idx);

      const updatedFighter = {
        ...oldFighter,
        attack: +power.value,
        health: +health.value
      };

      this.fightersDetailsMap.set(idx, updatedFighter);
      const index = this.fighterToFight.findIndex(item => idx === item._id);
      this.fighterToFight.splice(index, 1, updatedFighter);

      this.handleModalClose();
    });
  }

  fightersDetailsMap = new Map();

  createFighters(fighters: Fighter[]): void {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(
        fighter,
        this.handleClick,
        this.handleSelect
      );
      return fighterView.element;
    });

    this.element = this.createElement({
      tagName: "div",
      className: "fighters"
    });
    this.element.append(...fighterElements);
  }

  handleModalClose(): void {
    if (modal) {
      modal.style.display = "none";
    }
  }

  openModal(fighterDetails: FighterDetails): void {
    modal.style.display = "block";
    modalForm.setAttribute("data-id", fighterDetails._id);
    avatar.src = fighterDetails.source;
    health.value = (fighterDetails.health as unknown) as string;
    power.value = (fighterDetails.attack as unknown) as string;
  }

  async handleFighterClick(event: Event, fighter: Fighter): Promise<void> {
    let fighterDetails: FighterDetails = this.fightersDetailsMap.get(
      fighter._id
    );

    if (!fighterDetails) {
      fighterDetails = await fighterService.getFighterDetails(fighter._id);
      this.fightersDetailsMap.set(fighter._id, fighterDetails);
    }
    this.openModal(fighterDetails);
    if (close) {
      close.addEventListener("click", () => {
        this.handleModalClose();
      });
    }
    this.handleFighterSelect(event, fighterDetails);
  }

  handleFighterSelect(event: Event, fighter: FighterDetails): void {
    const index = this.fighterToFight.findIndex(
      (item: { _id: string }) => item._id === fighter._id
    );

    if (index === -1) {
      this.fighterToFight.push(fighter);
    } else {
      this.fighterToFight.splice(index, 1);
    }
  }
}

export default FightersView;
