import Keyboard from './game_inputs/keyboard';
import Mouse from './game_inputs/mouse';

export default class Game {
  constructor(board) {
    this.board = board;
    this.keyboard = new Keyboard();
    this.mouse = new Mouse();
    
    this.setupInputs();
  }

  setupInputs() {
    document.addEventListener('keydown', e => this.keyboard.handleKeyHeld(e));
    document.addEventListener('keyup', e => this.keyboard.handleKeyUp(e));
    document.getElementById('board').addEventListener('click', e => {
      this.mouse.handleMouseClick(e, this.board)
    });
  }
}
