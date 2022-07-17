canvas = document.getElementById("first-block");
ctx = canvas.getContext("2d");
canvas.width = width = window.innerWidth - 300;
canvas.height = height = window.innerHeight;

class BlockMenu {
  constructor() {
    this.x = Math.random() * width + 500;
    this.y = Math.random() * 100 + 300;
    this.t = Math.random() * 5;
    this.pointBlock(-30, -20);
  }

  pointBlock(xC, xT) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(this.x + 10, this.y - 10, this.x + xC, this.y - 50, this.x + xT, this.y - 100);
    ctx.strokeStyle = "green";
    ctx.lineWidth = this.t;
    ctx.stroke();
    ctx.closePath();
  }
}

let arrayPoint = [];
let xC = -30;
let xT = -20;
let xCLimit = (xTLimit = 0);
let x, y;

for (let index = 0; index < 2000; index++) {
  arrayPoint.push(new BlockMenu());
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, width, height);
  if (xT < 30 && xTLimit < 70) {
    xTLimit++;
    xT++;
    if (xC < 30 && xCLimit < 60) {
      xCLimit++;
      xC++;
    }
  } else if (xTLimit < 140) {
    xTLimit++;
    xT--;
    if (xCLimit < 120) {
      xCLimit++;
      xC--;
    }
  } else {
    xTLimit = 0;
    xCLimit = 0;
  }
  arrayPoint.forEach(element => {
    element.pointBlock(xC, xT);
  });
}

animate()
