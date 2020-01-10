export default class Input {
  constructor() {
    this.power = 0;
    this.selectedStone = false;
    this.dir = null;
    this.stonePos = [];
    this.player = 'white'
    this.notify('your move');
  }

  handleKeyHeld(e) {
    if (e.keyCode !== 32) {
      return;
    } else if (this.power >= .95) {
      return;
    }
    this.power += 0.1;
    const power_bar = (this.power * 504);
    document.getElementsByClassName('power-bar')[0].style.width = `${power_bar}px`;
  }

  handleKeyUp(e) {
    this.power = 0;
    this.dir = false;
    this.stonePos = [];
    this.selectedStone = false;
    document.getElementsByClassName('power-bar')[0].style.width = "0";
    this.notify('')
    this.player = this.player === 'white' ? 'black' : 'white'
    this.notify('your move');
  }
  
  handleFirstMouseClick(e, stones) {
    const hor = e.pageX - e.target.offsetLeft - 7;
    const vert = e.pageY - e.target.offsetTop - 170;
    stones.forEach(stone => {
      if (Math.sqrt(Math.pow((hor - stone.pos[0]), 2) + Math.pow((vert - stone.pos[1]), 2)) < 10) {
        this.selectedStone = stone.num;
        this.stonePos = stone.pos;
        this.notify('flicking...');
      }
    });
  }

  handleSecondMouseClick(e) {
    this.notify('calculating power...');
    const hor = e.pageX - e.target.offsetLeft - 7;
    const vert = e.pageY - e.target.offsetTop - 170;
    let [x, y] = this.stonePos;

    this.dir = Math.atan2(y - vert, x - hor);
  }

  notify(str) {
    document.getElementById(this.player).innerText = str;
  }
}