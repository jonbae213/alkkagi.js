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

  moveStones(deltaTime) {
    this.board.stones.forEach(stone => {
      stone.move(deltaTime);
    });
  }
 
  flickStone(dir, speed, stoneInput, deltaTime) {
    let ind = this.findStoneInd(stoneInput);
    let currentStone = this.board.stones[ind];
    let finalPos = this.getFinalPos(currentStone, dir, speed);
    let nextStone = null;
    let diff = [(this.board.stones[0].pos[0] - currentStone.pos[0]), (this.board.stones[0].pos[1] - currentStone.pos[1])];
    this.board.stones.forEach(stone => {
      let [x1, y1] = currentStone.pos;
      let [x2, y2] = stone.pos;
      let newDiff = [x2 - x1, y2 - y1];
      if (stone.num !== currentStone.num) {
        if (this.hitStone(currentStone, finalPos, stone, dir)
          && Math.abs(newDiff[0]) < Math.abs(diff[0])
          && Math.abs(newDiff[1]) < Math.abs(diff[1])) {
          diff = newDiff;
          nextStone = stone;
        }
      }
    });

    if (nextStone !== null) {
      currentStone.finalPos = nextStone.pos;
      this.flickStone(dir, speed, nextStone.num, deltaTime);
    } else {
      currentStone.finalPos = finalPos;
      if (this.outOfBounds(currentStone)) {

        this.removeStone(currentStone);
        return;
      }
    }
    currentStone.vel = [((diff[0]) / deltaTime), ((diff[1]) / deltaTime)];
 
    if (this.gameOver()) {
      alert(`${this.winner} is the Winner! Muahahaha`);
    }

  }

  hitStone(stone, posTwo, stoneTwo, dir) {
    for(let i = stone.pos[0]; i < posTwo[0]; i++) {
      let step = [(i + 1), (stone.pos[1] + Math.tan(dir))]
  
      if (this.checkIfHit(step, stoneTwo.pos)) {
        return true;
      } else {
        return false;
      }
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

  checkIfHit(posOne, posTwo) {
    let [x1, y1] = posOne;
    let [x2, y2] = posTwo;

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
      if (rock.num !== stone.num) {
        pieces.push(rock);
      }
    });

    this.board.stones = pieces;
  }

  getFinalPos(stone, dir, speed) {
    speed = speed * 504;
    return [stone.pos[0] + (speed * Math.cos(dir)), stone.pos[1] + (speed * Math.sin(dir))]; 
  }
}
