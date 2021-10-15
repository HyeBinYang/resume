class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    // this.color = colors[Math.floor(Math.random() * 6)];
    this.color = "#ffffff";
    this.angle = Math.random() * Math.PI * 2;
    this.power = 0.1;
    this.vx = this.power * Math.cos(this.angle);
    this.vy = this.power * Math.sin(this.angle);
    this.opacity = Math.random();
    this.checkOpacity = true;
    this.dopacity = Math.random() * (0.006 - 0.002) + 0.002;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
  }

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

  updatePosition() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
  }
}

function init() {
  for (let i = 0; i < 1000; i++) {
    balls[i] = new Ball(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * (2 - 1) + 1);
  }
}

function animate() {
  ctx.fillStyle = "rgba(255,255,255,0.1)";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 1000; i++) {
    balls[i].update();
    balls[i].draw();
  }

  window.addEventListener("resize", function () {
    // 화면 크기가 변하면 캔버스 크기도 변경해줌
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 각 객체가 움직일 수 있는 범위 재설정
    for (let i = 0; i < 1000; i++) {
      balls[i].updatePosition();
    }
  });

  requestAnimationFrame(animate);
}

async function test() {
  const intro = document.getElementById("intro");
  let text = "안녕하세요.";
  const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

  for (let i = 0; i < text.length; i++) {
    intro.innerHTML += text[i];
    await wait(100);
  }

  await wait(1000);

  for (let i = text.length - 1; i > -1; i--) {
    intro.innerHTML = intro.innerHTML.slice(0, i);
    await wait(100);
  }

  await wait(1000);

  const text2 = "프론트엔드 개발자";
  for (let i = 0; i < text2.length; i++) {
    intro.innerHTML += text2[i];
    await wait(100);
  }

  intro.innerHTML += "<br / >";
  const text3 = "양혜빈 입니다.";
  for (let i = 0; i < text3.length; i++) {
    intro.innerHTML += text3[i];
    await wait(100);
  }
}

// canvas 요소 접근
const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas 안에 그릴 수 있으려면 드로잉 컨텍스트에 접근해야한다.
const ctx = canvas.getContext("2d");
const balls = [];
const colors = ["#304FFE", "#FFFFFF", "#FFFF00", "#FF8F00", "#FF3D00", "#40C4FF"];
console.log(Math.floor(Math.random() * 5));

init();
animate();
test();
