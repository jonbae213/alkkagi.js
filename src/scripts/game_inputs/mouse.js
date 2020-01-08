import ButtonState from './button_state';

export default class Mouse {
  constructor() {
    document.addEventListener('mousemove', event => this.handleMouseMove(event));
    document.addEventListener('mousedown', event => this.handleMouseDown(event));
    document.addEventListener('mouseup', event => this.handleMouseUp(event));
  }

  handleMouseMove(event: MouseEvent) {
    
  }

  handleMouseDown(event: MouseEvent) {

  }

  handleMouseUp(event: MouseEvent) {

  }
}