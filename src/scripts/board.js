const initialWhitePositions = [
  [46, 142],
  [46, 262],
  [46, 382],
  [70, 82],
  [70, 202],
  [70, 322],
  [70, 442]  
]

export default class Board {
  constructor() {
    this.whiteStones = {};
    this.blackStones = {};
    this.placeWhiteStones();
    this.placeBlackStones();
  }

  placeWhiteStones() {
    let i = 0;
    while (Object.keys(this.whiteStones.length) < 7) {
      this.whiteStones[i + 1] = new Stone('white', initialWhitePositions[i])
      i++;
    }
  }

  placeBlackStones() {
    let i = 0;
    while (Object.keys(this.blackStones.length) < 7) {
      let [x, y] = initialWhitePositions[i];
      this.blackStones[i + 1] = new Stone('black', [500 - x, 500 - y]);
      i++;
    }
  }
}