export default class View {
  constructor(ctx) {
    this.ctx = ctx; 
    this.lastTime = 0;
  }

  animate(timestamp) {
    const deltaTime = timestamp - this.lastTime;
    if (deltaTime > 0.00000000000000000000001) {
      this.game.draw(this.ctx);
    }
    this.lastTime = timestamp;
    requestAnimationFrame(this.animate.bind(this));
  }
}