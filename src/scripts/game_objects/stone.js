export default class Stone {
  constructor(color, pos, num, game) {
    this.pos = pos;
    this.color = color;
    this.num = num;
  }

  draw(ctx) {
    let [x, y] = this.pos;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();  
  }

  move(dir, speed) {
    if (speed === 0) {
      return;
    }
    console.log(speed)
    let xVec = ((speed) * Math.cos(dir) * 60) + this.pos[0];
    let yVec = ((speed) * Math.sin(dir) * 60) + this.pos[1];
    this.pos = [xVec, yVec];
  }
}