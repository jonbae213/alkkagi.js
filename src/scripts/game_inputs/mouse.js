export default class Mouse {
  constructor() {
    this.selectedStone = false;
  }

  handleMouseMove(e) {
    if (!this.selectedStone) {
      return;
    }

  }

  handleMouseClick(e, board) {
    const hor = e.pageX - e.currentTarget.offsetLeft - 7;
    const vert = e.pageY - e.currentTarget.offsetTop - 170;
    if (Number.isInteger(this.selectedStone)) {
      this.selectedStone = false;
    } 
    board.whiteStones.concat(board.blackStones).forEach(stone => {
      if (Math.sqrt(Math.pow((hor - stone.pos[0]), 2) + Math.pow((vert - stone.pos[1]), 2)) < 10) {
        this.selectedStone = stone.num;
        console.log(`clicked ${this.selectedStone}`)
      } 
    })
  }

}