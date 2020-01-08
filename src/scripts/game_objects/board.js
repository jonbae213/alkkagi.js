import Stone from './stone';

const initialWhitePositions = [
  [46, 142],
  [46, 262],
  [46, 382],
  [70, 82],
  [70, 202],
  [70, 322],
  [70, 442]  
];

export default class Board {
  constructor() {
    this.whiteStones = [];
    this.blackStones = [];
    this.placeWhiteStones();
    this.placeBlackStones();
  }

  placeWhiteStones() {
    let i = 0;
    while (this.whiteStones.length < 7) {
      this.whiteStones.push(new Stone('white', initialWhitePositions[i], i));
      i++;
    }
  }

  placeBlackStones() {
    let i = 7;
    let j = 0
    while (this.blackStones.length < 7) {
      let [x, y] = initialWhitePositions[j];
      this.blackStones.push(new Stone("black", [500 - x, 500 - y], i));
      i++;
      j++;
    }
  }

  moveWhiteStone(num, dir, speed) {
    this.whiteStones[num].move(dir, speed);
  }

  moveBlackStone(num) {
  
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(0, 0, 504, 504);
    ctx.fillStyle = 'rgba(125, 85, 11, 0.5)';
    ctx.fill();

    for (let x = 21; x <= 480; x += 24) {
      for (let y = 21; y <= 480; y += 24) {
        ctx.moveTo(x, 21);
        ctx.lineTo(x, 480);
        ctx.strokeStyle = "rgba(38, 12, 12, 0.26)";
        ctx.stroke();
        ctx.moveTo(21, y);
        ctx.lineTo(480, y);
        ctx.strokeStyle = "rgba(38, 12, 12, 0.26)";
        ctx.stroke();
      }
    }
  }
}