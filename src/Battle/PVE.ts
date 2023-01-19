import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter,
    protected monsters: SimpleFighter[],
  ) {
    super(player);
  }

  figthing(): void {
    while (this.player.lifePoints !== -1
      && this.monsters.some((enemy) => enemy.lifePoints !== -1)) {
      this.monsters.forEach((enemy) => {
        this.player.attack(enemy);
        enemy.attack(this.player);
      });
    }
  }

  fight(): number {
    this.figthing();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}