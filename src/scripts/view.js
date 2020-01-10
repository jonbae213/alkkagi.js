import Input from "./game_inputs/input";

export default class View {
  constructor(game, ctx) {
    this.ctx = ctx; 
    this.lastTime = 0;
    this.game = game;
    this.input = new Input();
  }

  animate(timestamp) {
    const deltaTime = timestamp - this.lastTime;
    if (deltaTime > 0.17) {
      this.game.draw(this.ctx);
    }
    this.lastTime = timestamp;
    requestAnimationFrame(this.animate.bind(this));
  }

  setupInputs() {
    document.addEventListener('keydown', e => {
      if (Number.isInteger(this.input.selectedStone) && this.input.dir) {
        this.input.handleKeyHeld(e)
      }
    });
    document.addEventListener('keyup', e => {
      if (this.input.dir) {
        if (this.game.currentPlayer === 'white') {
          this.game.flickStone(this.input.dir, this.input.power).bind(game);
          this.currentPlayer = 'black';
        } else {
          this.game.flickStone(this.input.dir, this.input.power).bind(game);
          this.game.currentPlayer = 'white';
        }

        this.input.handleKeyUp(e);
      }
    });
    document.getElementById('board').addEventListener('click', e => {
      let currentPlayerStones = [];
      this.game.board.stones.forEach(stone => {
        if (stone.color === this.game.currentPlayer) {
          currentPlayerStones.push(stone);
        }
      })
      if (!Number.isInteger(this.input.selectedStone)) {
        this.input.handleFirstMouseClick(e, currentPlayerStones);
      } else {
        this.input.handleSecondMouseClick(e);
      }
    });
  }
}