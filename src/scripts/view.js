export default class View {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  
  }

  renderBoard() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, 504, 504);
    this.ctx.fillStyle = 'rgba(125, 85, 11, 0.5)';
    this.ctx.fill();

    for (let x = 21; x <= 480; x += 24) {
      for (let y = 21; y <= 480; y += 24) {
        this.ctx.moveTo(x, 21);
        this.ctx.lineTo(x, 480);
        this.fillStyle = "gray";
        this.ctx.stroke();
        this.ctx.moveTo(21, y);
        this.ctx.lineTo(480, y);
        this.fillStyle = "gray";
        this.ctx.stroke();
      } 
    }
  }

  renderStones() {
    Object.values(this.game.board.whiteStones)
      .concat(Object.values(this.game.board.blackStones)).forEach(stone => {
      let [x,y] = stone.pos;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
      this.ctx.stroke();
      this.ctx.fillStyle = stone.color;
      this.ctx.fill();    
    });
  }
}