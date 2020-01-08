import Keyboard from './game_inputs/keyboard';

export default class Game {
  constructor(board) {
    this.board = board;
    this.keyboard = new Keyboard();
    document.addEventListener('keydown', e => this.keyboard.handleKeyHeld(e));
    document.addEventListener('keyup', e => this.keyboard.handleKeyUp(e));
  }
}
