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
    let xVec = (speed/ 14) * Math.cos(dir) + this.pos[0];
    let yVec = (speed /14)* Math.sin(dir) + this.pos[1];
    this.pos = [xVec, yVec];
    console.log(this.pos)
  }
}