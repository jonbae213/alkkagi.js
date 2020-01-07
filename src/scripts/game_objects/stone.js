export default class Stone {
  constructor(color, pos) {
    this.pos = pos;
    this.color = color;
  }

  draw(ctx) {
    let [x, y] = this.pos;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();    
  } 
}