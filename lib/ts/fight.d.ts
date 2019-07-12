import FightView from "./fightView";
import { IFighter } from "./fighter";
import { FighterDetails } from './fightersView';
export interface IFight {
    kick: (attacker: IFighter, blocker: IFighter, message: HTMLElement) => void;
    fight: (first: IFighter, second: IFighter, message: HTMLElement) => void;
}
declare class Fight extends FightView implements IFight {
    constructor(firstFighter: FighterDetails, secondFighter: FighterDetails);
    kick(attacker: IFighter, blocker: IFighter, message: HTMLElement): void;
    fight(first: IFighter, second: IFighter, message: HTMLElement): void;
}
export default Fight;
