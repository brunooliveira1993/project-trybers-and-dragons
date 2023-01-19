import Battle, { PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('tomy');
const player2 = new Character('jhon');
const player3 = new Character('grim');
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player1, player3);

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
};