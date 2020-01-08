// import Player from './game_objects/player';
import Input from './game_inputs/input';

export default class Game {
  constructor(board) {
    this.board = board;
    this.input = new Input();
    this.currentPlayer = 'white';
    this.setupInputs();
  }

  setupInputs() {
    document.addEventListener('keydown', e => {
      if (Number.isInteger(this.input.selectedStone) && this.input.dir) {
        this.input.handleKeyHeld(e)
      }
    });
    document.addEventListener('keyup', e => {
      if (this.input.dir) {
        if (this.currentPlayer === 'white') {
          this.board.whiteStones[this.input.selectedStone]
            .move(this.input.dir, this.input.power);
          this.currentPlayer = 'black';
        } else {
          this.board.blackStones[this.input.selectedStone]
            .move(this.input.dir, this.input.power);
          this.currentPlayer = 'white';
        }

        this.input.handleKeyUp(e);
      }
    });
    document.getElementById('board').addEventListener('click', e => {
      let currentPlayerStones;
      if (this.currentPlayer === 'white') {
        currentPlayerStones = this.board.whiteStones;
      } else {
        currentPlayerStones = this.board.blackStones;
      }
      if (!Number.isInteger(this.input.selectedStone)) {
        this.input.handleFirstMouseClick(e, currentPlayerStones);
      } else {
        this.input.handleSecondMouseClick(e);
      } 
    });
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 504, 504);
    this.board.draw(ctx);
    this.board.whiteStones.concat(this.board.blackStones).forEach(stone => {
      stone.draw(ctx);
    });
  }

  // start(timestamp) {
  //   let deltaTime = timestamp - lastTime;
  //   lastTime = timestamp;
    
  //   this.board.draw(deltaTime);

  //   requestAnimationFrame(start)
  // }
}
