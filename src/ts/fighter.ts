export interface IFighter {

    name: string;
    health: number;
    attack: number;
    defense: number;
    source: string;
    getHitPower: () => number;
    getBlockPower: () => number;
}


class Fighter implements IFighter {

    private _id: number;
    name: string;
    health: number;
    attack: number;
    defense: number;
    source: string;

    constructor({ _id, name, health, attack, defense, source }:any) {
      this.name = name;
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.source = source;
      this._id = _id;
    }
    getHitPower():number {
      const criticalHitChance = Math.random() + 1;
      const power = this.attack * criticalHitChance;
      return power;
    }
  
    getBlockPower():number {
      const dodgeChance = Math.random() + 1;
      const power = this.defense * dodgeChance;
      return power;
    }
  }
  
  export default Fighter;