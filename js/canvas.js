// 별 객체
class Star {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = Math.floor(Math.random() * 360 + 1);
    this.angle = Math.random() * Math.PI * 2;
    this.power = 0.1;
    this.vx = this.power * Math.cos(this.angle);
    this.vy = this.power * Math.sin(this.angle);
    this.opacity = Math.random() * 0.8;
    this.checkOpacity = true;
    this.dopacity = 0.1 * (Math.random() * 1.2);
  }

  // 별 그리는 메소드
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = `hsla(${this.color}, 30%, 80%, ${this.opacity})`;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
  }

  // 별의 상태를 업데이트 시키는 메소드
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.toggle ? (this.opacity -= this.dopacity) : (this.opacity += this.dopacity);

    if (this.opacity <= 0.1) {
      this.toggle = false;
    } else if (this.opacity >= 0.8) {
      this.toggle = true;
    }

    if (this.y + this.vy + this.radius > canvas.height || this.y + this.vy - this.radius < 0) {
      this.vy = -this.vy;
    }
    if (this.x + this.vx + this.radius > canvas.width || this.x + this.vx - this.radius < 0) {
      this.vx = -this.vx;
    }
  }
}

// 별을 생성하는 함수
function createStar() {
  for (let i = 0; i < starCount; i++) {
    stars[i] = new Star(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * (1.5 - 0.5) + 0.5);
  }
}

// 각 별들의 모션을 반복적으로 실행하는 함수
function render() {
  ctx.fillStyle = "rgba(255,255,255,0.1)";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < starCount; i++) {
    stars[i].update();
    stars[i].draw();
  }

  window.addEventListener("resize", function () {
    // 화면 크기가 변하면 캔버스 크기도 변경해줌
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 별의 개수 재설정
    stars = [];
    starCount = (window.innerWidth + window.innerHeight) * 0.45;
    for (let i = 0; i < starCount; i++) {
      stars[i] = new Star(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * (1.5 - 0.5) + 0.5);
    }
  });

  requestAnimationFrame(render);
}

// canvas 요소 접근
const canvas = document.getElementById("myCanvas");

// 캔버스 너비를 브라우저 창 크기로 설정
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas 안에 그릴 수 있으려면 드로잉 컨텍스트에 접근해야한다.
const ctx = canvas.getContext("2d");

// 별을 담을 배열
let stars = [];

// 별 갯수
let starCount = (window.innerWidth + window.innerHeight) * 0.45;

createStar();
render();
