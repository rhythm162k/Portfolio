const menuDiv = document.querySelector(".mobile-nav");
const menuBtn = document.querySelector(".menu-bar");
const mobileNav = document.querySelector(".mobile-nav");
const home = document.querySelector("#home");

const toggleMenu = function () {
  menuDiv.classList.toggle("open");
  menuBtn.classList.toggle("open");
};

const mobileNavClick = function (e) {
  const btn = e.target.closest(".mobile-nav-btn");
  if (!btn) return;
  toggleMenu();
};

menuBtn.addEventListener("click", toggleMenu);

mobileNav.addEventListener("click", mobileNavClick);

// const observer = new IntersectionObserver(
//   (entries) => {
//     if (entries[0].isIntersecting) {
//       home.classList.add("visible");
//       observer.disconnect();
//     }
//   },
//   {
//     threshold: 0.3,
//   },
// );

// observer.observe(home);
