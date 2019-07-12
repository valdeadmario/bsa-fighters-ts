import View from "./view";
export declare type Fighter = {
    _id: string;
    name: string;
    source: string;
};
export declare type FighterDetails = Fighter & {
    health: number;
    attack: number;
    defense: number;
};
export interface IFightersView {
    fighterToFight: FighterDetails[];
}
declare class FightersView extends View implements IFightersView {
    fighterToFight: FighterDetails[];
    handleClick: (event: Event, fighter: Fighter) => Promise<void>;
    handleSelect: (event: Event, fighter: FighterDetails) => void;
    constructor(fighters: Fighter[]);
    fightersDetailsMap: Map<any, any>;
    createFighters(fighters: Fighter[]): void;
    handleModalClose(): void;
    openModal(fighterDetails: FighterDetails): void;
    handleFighterClick(event: Event, fighter: Fighter): Promise<void>;
    handleFighterSelect(event: Event, fighter: FighterDetails): void;
}
export default FightersView;
