export default class Stone {
  constructor(color, pos, num) {
    this.pos = pos;
    this.finalPos = null;
    this.color = color;
    this.num = num;
    this.vel = [];
  }

  draw(ctx) {
    let [x, y] = this.pos;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();  
  }

  move() {
    if (this.vel.length === 0) {
      return;
    }
    
    let [x, y] = this.pos;
    let [x2, y2] = this.vel;
    if ((this.pos[0] === this.finalPos[0]) && (this.pos[1] === this.finalPos[1])) {
      this.vel = [];
      this.finalPos = null;
    } else {
      this.pos = [x + x2, y + y2];
    }
  }
}