import Fighter from "./fighter";
import FightView from "./fightView";
import { IFighter } from "./fighter";
import { FighterDetails } from "./fightersView";

export interface IFight {
  kick: (attacker: IFighter, blocker: IFighter, message: HTMLElement) => void;
  fight: (first: IFighter, second: IFighter, message: HTMLElement) => void;
}

class Fight extends FightView implements IFight {
  constructor(firstFighter: FighterDetails, secondFighter: FighterDetails) {
    const first: IFighter = new Fighter(firstFighter);
    const second: IFighter = new Fighter(secondFighter);
    super(first, second);
    this.fight(first, second, this.message);
  }

  kick(attacker: IFighter, blocker: IFighter, message: HTMLElement): void {
    const damage = attacker.getHitPower() - blocker.getBlockPower();
    blocker.health -= damage > 0 ? damage : 0;
    if (damage > 0) {
      message.innerText = `${attacker.name} hit ${
        blocker.name
      } for ${damage.toFixed(2)}`;
    } else {
      message.innerText = `${attacker.name} missed`;
    }
    document.querySelector(
      `#${blocker.name} .health`
    )!.innerHTML = `health: ${Math.round(blocker.health)}`; // !!!!

    if (blocker.health <= 0) {
      this.winner(attacker.name);
    }
  }

  fight(first: IFighter, second: IFighter, message: HTMLElement): void {
    const button = document.querySelector(".kick") as HTMLButtonElement;
    button.addEventListener("click", e => {
      this.kick(first, second, message);
      button.disabled = true;
      if (first.health > 0 && second.health > 0) {
        setTimeout(() => {
          this.kick(second, first, message);
          button.disabled = false;
        }, 2000);
      }
    });
  }
}

export default Fight;
