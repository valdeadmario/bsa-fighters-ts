import Fighter from "./fighter";
import FightView from "./fightView";
import { IFighter } from "./fighter";
import { fighterService } from "./services/fightersService";

export interface IFight {
  kick: (attacker: any, blocker: any, message: HTMLElement) => void;
  fight: (first: any, second: any, message: HTMLElement) => void;
}

class Fight extends FightView implements IFight {
  constructor(firstFighter: any, secondFighter: any) {
    const first: IFighter = new Fighter(firstFighter);
    const second: IFighter = new Fighter(secondFighter);
    super(first, second);
    this.fight(first, second, this.message);
  }

  kick(attacker: any, blocker: any, message: HTMLElement): void {
    const damage = attacker.getHitPower() - blocker.getBlockPower();
    blocker.health -= damage > 0 ? damage : 0;
    if (damage > 0) {
      message.innerText = `${attacker.name} hit ${
        blocker.name
      } for ${damage.toFixed(2)}`;
    } else {
      message.innerText = `${attacker.name} missed`;
    }

    if (blocker.health <= 0) {
      this.winner(attacker.name);
      fighterService.putVictory(attacker._id);
    } else {
      document.querySelector(
        `#${blocker.name} .health`
      ).innerText = `health: ${Math.round(blocker.health)}`;
    }
  }

  fight(first, second, message: HTMLElement): void {
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
