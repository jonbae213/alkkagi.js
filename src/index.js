import './styles/index.scss';
import View from './scripts/view';
import Game from './scripts/game';
import Board from './scripts/board';

document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  board.height = 504;
  board.width = 504;
  const ctx = board.getContext("2d");
  // const game = new Game();
  // new Alkkagi(game, ctx).start();
  const gameview = new View(new Game(new Board()), ctx);
  gameview.renderBoard();
  gameview.renderStones();
 
});
