const menuDiv = document.querySelector(".mobile-nav-links");
const menuBtn = document.querySelector(".menu-bar");
const mobileNav = document.querySelector(".mobile-nav-links");

const mobileNavClick = function (e) {
  const btn = e.target.closest(".mobile-nav-btn");
  if (!btn) return;
  menuDiv.classList.toggle("open");
  menuBtn.classList.toggle("open");
};

menuBtn.addEventListener("click", () => {
  menuDiv.classList.toggle("open");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
});

mobileNav.addEventListener("click", mobileNavClick);
