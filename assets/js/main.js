const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
  });
}
