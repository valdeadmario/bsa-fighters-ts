import { FighterDetails } from './fightersView';
export interface IFighter {
    name: string;
    health: number;
    attack: number;
    defense: number;
    source: string;
    getHitPower: () => number;
    getBlockPower: () => number;
}
export declare type FighterParams = {
    _id: number;
    name: string;
    health: number;
    attack: number;
    defense: number;
    source: string;
};
declare class Fighter implements IFighter {
    private _id;
    name: string;
    health: number;
    attack: number;
    defense: number;
    source: string;
    constructor({ _id, name, health, attack, defense, source }: FighterDetails);
    getHitPower(): number;
    getBlockPower(): number;
}
export default Fighter;
