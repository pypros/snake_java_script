export default class BoardGameConsole {
  constructor(sizeRaw, sizeColumn) {
    this.sizeRaw = sizeRaw;
    this.sizeColumn = sizeColumn;
    this.boardGame = Array.from(Array(this.sizeRaw), () => {
      const line = new Array(this.sizeColumn).fill("0");
      return line;
    });
  }

  clear() {
    this.boardGame = Array.from(Array(this.sizeRaw), () => {
      const line = new Array(this.sizeColumn).fill("0");
      return line;
    });
  }

  printGame(points) {
    console.log(`Points: ${points}`);
    console.log(
      Array(this.sizeRaw + 2)
        .fill("-")
        .join("")
    );
    this.boardGame.forEach((element) => {
      console.log(`-${element.join("")}-`);
    });
    console.log(
      Array(this.sizeRaw + 2)
        .fill("-")
        .join("")
    );
    console.log(`Exit: ESC`);
  }

  drawPixel(pixel) {
    const [x, y, representation] = pixel;
    this.boardGame[x][y] = representation;
  }
}
