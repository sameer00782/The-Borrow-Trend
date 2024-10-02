//hamburger menu //
const navbarEl = document.querySelector(".navbar");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
  navbarEl.classList.toggle("nav-open")
  hamburgerEl.classList.toggle("hamburger-open")
});

navbarEl.addEventListener("click", () => {
  navbarEl.classList.remove("nav-open")
  hamburgerEl.classList.remove("hamburger-open")
})

// navbar color change //
document.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled')
  }
})