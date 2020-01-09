// import Player from './game_objects/player';
import Input from './game_inputs/input';
import Board from './game_objects/board';

export default class Game {
  constructor(ctx) {
    this.input = new Input();
    this.currentPlayer = 'white';
    this.board = new Board();
    this.setupInputs();
    this.winner = '';
    this.ctx = ctx;
  }
  
  setupInputs() {
    document.addEventListener('keydown', e => {
      if (Number.isInteger(this.input.selectedStone) && this.input.dir) {
        this.input.handleKeyHeld(e)
      }
    });
    document.addEventListener('keyup', e => {
      if (this.input.dir) {
        let i;
        if (this.currentPlayer === 'white') {
          this.flickStone(this.input.dir, this.input.power);
          this.currentPlayer = 'black';
        } else {
          this.flickStone(this.input.dir, this.input.power);
          this.currentPlayer = 'white';
        }
       
        this.input.handleKeyUp(e);
      }
    });
    document.getElementById('board').addEventListener('click', e => {
      let currentPlayerStones;
      if (this.currentPlayer === 'white') {
        currentPlayerStones = this.board.whiteStones;
      } else {
        currentPlayerStones = this.board.blackStones;
      }
      if (!Number.isInteger(this.input.selectedStone)) {
        this.input.handleFirstMouseClick(e, currentPlayerStones);
      } else {
        this.input.handleSecondMouseClick(e);
      } 
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, 504, 504);
    this.board.draw(this.ctx);
    this.board.whiteStones.concat(this.board.blackStones).forEach(stone => {
      stone.draw(this.ctx);
    });
    window.game = this;
  }

  flickStone(dir, speed) {
    let currentStone;
    let movementStopped = false;
    let vec = speed;

    if (this.currentPlayer === 'white') {
      currentStone = this.board.whiteStones[this.findStoneInd(this.input.selectedStone, this.board.whiteStones)];
    } else {
      currentStone = this.board.blackStones[this.findStoneInd(this.input.selectedStone, this.board.blackStones)];
    }
    
    while (!movementStopped) {
      console.log(currentStone.num)
      currentStone.move(dir, vec)
      this.draw();
      if (vec !== 14) {
        vec *= .80;
      } else if (vec <= .01) {
        movementStopped = true;
        break;
      } else {
        this.removeStone(currentStone)
      }
      this.board.blackStones.concat(this.board.whiteStones).forEach(stone => {
        if (!(currentStone.num === stone.num && stone.color === currentStone.color)) {
          if (this.hitOtherStone(stone, currentStone)) {
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
    if (this.board.whiteStones.length === 0) {
      this.winner = 'black';
      return true;
    } else if (this.board.blackStones.length === 0) {
      this.winner = 'white';
      return true;
    } else {
      return false;
    }
  }

  hitOtherStone(stoneOne, stoneTwo) {
    let [x1, y1] = stoneOne.pos;
    let [x2, y2] = stoneTwo.pos;
    if (Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) <= 20) {
      return true;
    } else {
      return false;
    }
  }

  findStoneInd(stoneNum, stones) {
    let i;
    stones.map((stone, j) => {
      if (stone.num === stoneNum) {
        i = j;
      }
    });
    return i;
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
    if (stone.color === 'white') {
      this.board.whiteStones.forEach((stoneTwo) => {
        if (stone.num !== stoneTwo.num) {
          pieces.push(stoneTwo);
        }
      })
      this.board.whiteStones = pieces;
    } else {
      this.board.blackStones.forEach((stoneTwo) => {
        if (stone.num !== stoneTwo.num) {
         pieces.push(stoneTwo);
        }
      })
      this.board.blackStones = pieces;
    }
  }
}
