import View from "./view";
import { Fighter, FighterDetails } from "./fightersView";
export interface IFighterView {
}
declare class FighterView extends View {
    constructor(fighter: Fighter, handleClick: (event: Event, fighter: Fighter) => Promise<void>, handleSelect: (event: Event, fighter: FighterDetails) => void);
    createFighter(fighter: Fighter, handleClick: {
        (event: Event, fighter: Fighter): Promise<void>;
    }, handleSelect: {
        (event: Event, fighter: FighterDetails): void;
    }): void;
    createName(name: string): HTMLElement;
    createImage(source: string): HTMLElement;
}
export default FighterView;
