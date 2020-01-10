import Board from './game_objects/board';

export default class Game {
  constructor() {
    this.board = new Board();
    this.winner = '';
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 504, 504);
    this.board.draw(ctx);
    this.board.stones.forEach(stone => {
      stone.draw(ctx);
    });
  }

  flickStone(dir, speed, stoneInput) {
    let ind = this.findStoneInd(stoneInput)
    let currentStone = this.board.stones[ind]
    let movementStopped = false;
    let vec = speed;

    while (!movementStopped) {
      let prevPos = currentStone.pos
      currentStone.move(dir, vec)
      vec *= .90;
      if (vec <= .01) {
        movementStopped = true;
        break;
      } 
      this.board.stones.forEach(stone => {
        if (currentStone.num !== stone.num) {
          if (this.hitOtherStone(stone, currentStone, prevPos)) {
            currentStone = stone;
          }
        }
      }); 
      if (this.outOfBounds(currentStone)) {
        this.removeStone(currentStone);
        movementStopped = true;
      }
    }
    if (this.gameOver()) {
      alert(`${this.winner} is the Winner! Muahahaha`);
    }

  }

  gameOver() {
    let whiteCount = 0;
    let blackCount = 0;
    this.board.stones.forEach(stone => {
      if (stone.color === 'white') {
        whiteCount += 1;
      } else {
        blackCount += 1;
      }
    });

    if (whiteCount === 0 || blackCount === 0) {
      return true;
    } 

    return false;
  }

  hitOtherStone(stoneOne, stoneTwo, stoneTwoPrev) {
    let [x1, y1] = stoneOne.pos;
    let [x2, y2] = stoneTwo.pos;
    let [x3, y3] = stoneTwoPrev;
    if (Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) <= 20) {
      return true;
    } else {
      return false;
    }
  }

  findStoneInd(stoneNum) {
    let ind;
    this.board.stones.forEach((stone, i) => {
      if (stone.num === stoneNum) {
        ind = i;
      }
    });

    return ind
  }

  outOfBounds(stone) {
    let [x, y] = stone.pos;
    if ((x < 0 || x > 504) || (y < 0 || y > 504)) {
      return true;
    } else {
      return false;
    }
  }

  removeStone(stone) {
    let pieces = [];
    this.board.stones.forEach(rock => {
      if (!(rock.color === stone.color && rock.num === stone.num)) {
        pieces.push(rock);
      }
    });

    this.board.stones = pieces;
  }
}
