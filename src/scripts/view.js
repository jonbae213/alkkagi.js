export default class View {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  
  }

  renderBoard() {
    this.game.board.draw(this.ctx);
  }

  renderStones() {
    Object.values(this.game.board.whiteStones)
      .concat(Object.values(this.game.board.blackStones)).forEach(stone => {
        stone.draw(this.ctx);  
    });
  }
}