export default class View {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    
  }

  draw() {
    this.ctx.clearRect(0, 0, 504, 504);
    this.game.board.draw(this.ctx);
    this.game.board.whiteStones.concat(this.game.board.blackStones).forEach(stone => {
      stone.draw(this.ctx);
    });
  }
}