import Board from './game_objects/board';

export default class Game {
  constructor(board) {
    this.board = board;
    document.addEventListener("keydown", (e) => {
      console.log(e.keyCode);
    })
    document.addEventListener("keyup", e => {
      console.log("it went up");
    })
  }
}
