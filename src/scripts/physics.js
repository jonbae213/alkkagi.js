const drag = -1

export default {
  flickStone: (stone, vec, speed) => {
    let newPos = stone.pos
    while (speed + drag >= 0) {
      newPos = newPos + vec * speed;
    } 
    return newPos;
  }
}