  import Character from  './domain.js';

  

  export default class Game {  
    start() {
        const character = new Character();
        character.start();
    }
  }

  export class GameSavingData {
  }
  
  export function readGameSaving() {
  }
  
  export function writeGameSaving() {
  }
