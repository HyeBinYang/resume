function clearActive() {
  menus.forEach((menu) => menu.classList.remove("active"));
}

const menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    clearActive();
    menu.classList.add("active");
  });
});
