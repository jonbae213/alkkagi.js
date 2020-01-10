export default class View {
  constructor(game, ctx) {
    this.ctx = ctx; 
    this.lastTime = 0;
    this.game = game;
  }

  animate(timestamp) {
    const deltaTime = timestamp - this.lastTime;
    if (deltaTime > 0.17) {
      this.game.draw(this.ctx);
    }
    this.lastTime = timestamp;
    requestAnimationFrame(this.animate.bind(this));
  }
}