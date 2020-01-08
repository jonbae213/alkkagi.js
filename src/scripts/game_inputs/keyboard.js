export default class Keyboard {
  constructor() {
    this.power = 0;
  }

  handleKeyHeld(e) {
    if (e.keyCode !== 32) {
      return;
    } else if (this.power === 14) {
      return;
    }
    this.power++;
    const power_bar = (this.power * 36);
    document.getElementsByClassName('power-bar')[0].style.width = `${power_bar}px`;
  }

  handleKeyUp(e) {
    this.power = 0;
    document.getElementsByClassName('power-bar')[0].style.width = "0";
  }
}