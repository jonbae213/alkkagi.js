export default class View {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx; 
  }

  // animate(timestamp) {
  //   const deltaTime = timestamp - this.lastTime;
  //   this.game.draw(this.ctx);
  //   this.lastTime = timestamp;

  //   requestAnimationFrame(this.animate.bind(this));
  // }
}