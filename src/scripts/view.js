import Input from "./game_inputs/input";

export default class View {
  constructor(game, ctx) {
    this.ctx = ctx; 
    this.lastTime = 0;
    this.game = game;
    this.deltaTime = 0;
    this.input = new Input();
    this.setupInputs();
    this.game.flickStone = this.game.flickStone.bind(this.game);
  }

  animate(timestamp) {
    this.deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.game.draw(this.ctx)
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
        if (this.input.player === 'white') {
          this.game.flickStone(this.input.dir, 
            this.input.power, 
            this.input.selectedStone,
            );
        } else {
          this.game.flickStone(this.input.dir, 
            this.input.power, 
            this.input.selectedStone,
            );
        }

        this.input.handleKeyUp(e);
      }
    });
    document.getElementById('board').addEventListener('click', e => {
      let currentPlayerStones = [];
      this.game.board.stones.forEach(stone => {
        if (stone.color === this.input.player) {
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