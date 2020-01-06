import './styles/index.scss';
import './scripts/view';

document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  board.height = 504;
  board.width = 504;
  const ctx = board.getContext("2d");
  // const game = new Game();
  // new Alkkagi(game, ctx).start();
 
  const drawG = (ctx) => {
    for (let x = 21; x <= 480; x += 24) {
      for (let y = 21; y <= 480; y += 24) {
        ctx.lineWidth = 0.1;
        ctx.moveTo(x, 24);
        ctx.lineTo(x, 480);
        ctx.stroke();
        ctx.moveTo(24, y);
        ctx.lineTo(480, y);
        ctx.fillStyle = "light-gray"
        ctx.stroke();
      }
    }
  }
   ctx.beginPath();
   ctx.rect(0, 0, 504, 504);
   ctx.fillStyle = 'rgba(125, 85, 11, 0.5)';
   ctx.fill();
  drawG(ctx);
     ctx.beginPath();
     ctx.arc(500 - 46, 500 - 142, 10, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.fillStyle = 'black';
     ctx.fill();    

     ctx.beginPath();
     ctx.arc(500 - 46,500 -  262, 10, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.fillStyle = 'black';
     ctx.fill();     
     ctx.beginPath();
     ctx.arc(500 - 46,500 -  382, 10, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.fillStyle = 'black';
     ctx.fill();     
     ctx.beginPath();
     ctx.arc(500 - 70,500 - 82, 10, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.fillStyle = 'black';
     ctx.fill();     
     ctx.beginPath();
     ctx.arc(500 - 70,500 - 202, 10, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.fillStyle = 'black';
     ctx.fill();     
     ctx.beginPath();
     ctx.arc(500 - 70,500 - 322, 10, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.fillStyle = 'black';
     ctx.fill();     
     ctx.beginPath();
     ctx.arc(500 - 70,500 - 442, 10, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.fillStyle = 'black';
     ctx.fill();     

      ctx.beginPath();
      ctx.arc(500 - 46, 500 - 142, 10, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "black";
      ctx.fill();
ctx.beginPath();
ctx.arc(46, 142, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();
      ctx.beginPath();
      ctx.arc(46, 262, 10, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(46, 382, 10, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(70, 82, 10, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(70, 202, 10, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(70, 322, 10, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(70, 442, 10, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.fill();    

});

function circles() {
  let pos = [];

}