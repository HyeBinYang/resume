// 인트로 동작하는 함수
async function writeIntro() {
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

writeIntro();
