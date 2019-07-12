import View from "./view";
import { IFighter } from "./fighter";
export interface IFightView {
    ring: HTMLElement;
    message: HTMLElement;
    firstView: HTMLElement;
    secondView: HTMLElement;
    button: HTMLElement;
    createFighterToFight: (person: IFighter, isTransform?: boolean) => HTMLElement;
    createSkills: (name: string, skills: {
        [key: string]: number;
    }) => HTMLElement;
    winner: (name: string) => void;
}
declare class FightView extends View implements IFightView {
    ring: HTMLElement;
    message: HTMLElement;
    firstView: HTMLElement;
    secondView: HTMLElement;
    button: HTMLElement;
    constructor(first: IFighter, second: IFighter);
    createFighterToFight(person: IFighter, isTransform?: boolean): HTMLElement;
    createSkills(name: string, skills: {
        [key: string]: number;
    }): HTMLElement;
    winner(name: string): void;
}
export default FightView;
