export default class View {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  drawGrid() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, 504, 504);
    this.ctx.fillStyle = 'rgba(125, 85, 11, 0.5)';
    this.ctx.fill();

    for (x = 21; x <= 480; x += 24) {
      for (y = 21; y <= 480; y += 24) {
        this.ctx.moveTo(x, 21);
        this.ctx.lineTo(x, 480);
        this.ctx.stroke();
        this.ctx.moveTo(21, y);
        this.ctx.lineTo(480, y);
        this.ctx.stroke();
      } 
    }
  }
}