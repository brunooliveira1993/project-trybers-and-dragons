import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints() { return this._lifePoints; }
  public get strength() { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const initialLifePoints = this._lifePoints;
    this._lifePoints -= attackPoints;
    if (attackPoints > initialLifePoints) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}