// Navbar
const menuItems = document.querySelectorAll(".navbar__menu__item");
const [homeButton, aboutButton, skillsButton, projectsButton, careerButton, navContactButton] = menuItems;
const menuToggleButton = document.getElementById("menuToggleButton");
const menuBox = document.getElementById("menuBox");

function clearActive() {
  menuItems.forEach((menu) => {
    menu.classList.remove("active");
  });
}

window.addEventListener("scroll", () => {
  scrollY > 0 ? (document.getElementById("navbar").style.background = "var(--color-blue)") : (document.getElementById("navbar").style.background = "");
});

homeButton.addEventListener("click", () => {
  clearActive();
  homeButton.classList.add("active");
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

aboutButton.addEventListener("click", () => {
  clearActive();
  aboutButton.classList.add("active");
  window.scrollTo({
    top: document.getElementById("about").offsetTop,
    left: 0,
    behavior: "smooth",
  });
});

skillsButton.addEventListener("click", () => {
  clearActive();
  skillsButton.classList.add("active");
  window.scrollTo({
    top: document.getElementById("skills").offsetTop,
    left: 0,
    behavior: "smooth",
  });
});

projectsButton.addEventListener("click", () => {
  clearActive();
  projectsButton.classList.add("active");
  window.scrollTo({
    top: document.getElementById("projects").offsetTop,
    left: 0,
    behavior: "smooth",
  });
});

careerButton.addEventListener("click", () => {
  clearActive();
  careerButton.classList.add("active");
  window.scrollTo({
    top: document.getElementById("career").offsetTop,
    left: 0,
    behavior: "smooth",
  });
});

navContactButton.addEventListener("click", () => {
  clearActive();
  navContactButton.classList.add("active");
  window.scrollTo({ top: document.body.offsetHeight, left: 0, behavior: "smooth" });
});

// 메뉴 hamburger 버튼 클릭 이벤트
menuToggleButton.addEventListener("click", () => {
  menuBox.classList.contains("active") ? menuBox.classList.remove("active") : menuBox.classList.add("active");
});

// Home
const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", () => {
  window.scrollTo({ top: document.body.offsetHeight, left: 0, behavior: "smooth" });
});
