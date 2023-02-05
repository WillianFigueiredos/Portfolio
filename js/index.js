/* MODAL */
document.getElementById("drop").addEventListener("click", function () {
  $("#myModal").modal("show");
});
document.getElementById("droptoggle").addEventListener("click", function () {
  $("#myModal").modal("show");
});
/* MODAL */

/* XP ED */
document.getElementById("education-btn").addEventListener("click", function () {
  document.getElementById("education").style.display = "block";
  document.getElementById("experience").style.display = "none";
});

document
  .getElementById("experience-btn")
  .addEventListener("click", function () {
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "block";
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("experience").style.display = "none";
});
/* XP ED */

/* NAVBAR HEADER  PROGRESS BAR*/
window.addEventListener("scroll", function () {
  var scroll = window.pageYOffset;
  var height = document.body.scrollHeight - window.innerHeight;
  var progress = (scroll / height) * 100;
  document.querySelector(".progress-bar").style.width = progress + "%";
});
/* NAVBAR HEADER  PROGRESS BAR*/

/* NAVBAR HEADER LINKS */
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
    navLinks.forEach((link) => link.classList.add("color"));
  } else {
    navbar.classList.remove("scrolled");
    navLinks.forEach((link) => link.classList.remove("color"));
  }
});
/* NAVBAR HEADER LINKS */

/* NAVBAR HEADER NAME*/
window.onscroll = function () {
  const header = document.querySelector(".namehearder");
  if (window.pageYOffset > 0) {
    header.style.color = "white";
  } else {
    header.style.color = "var(--eerie-black)";
  }
};
/* NAVBAR HEADER NAME*/

/* CONTATO FOOTER CARROUSEL */
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carouseltag", {
    type: "loop",
    drag: "free",
    perPage: 1,
    arrows: false,
    pagination: false,
    pauseOnHover: true,
    wheel: true,
    autoScroll: {
      speed: 1,
    },
  }).mount(window.splide.Extensions);
});
/* CONTATO FOOTER CARROUSEL */

ScrollReveal().reveal(".slide-right", {
  delay: 75,
  duration: 1500,
  opacity: 0,
  distance: "50%",
  origin: "top",
  reset: true,
});


var linkSobre = document.querySelector('.modal .navl-list a[href="#about"]');
var linkTech = document.querySelector('.modal .navl-list a[href="#tech"]');
var linkProjetos = document.querySelector(
  '.modal .navl-list a[href="#project"]'
);
var linkContato = document.querySelector(
  '.modal .navl-list a[href="#contact"]'
);
var linkresume = document.querySelector('.modal .navl-list a[href="#resume"]');

linkSobre.addEventListener("click", function (event) {
  event.preventDefault();
  var target = document.querySelector(this.getAttribute("href"));

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  $("#myModal").modal("hide");
});

linkTech.addEventListener("click", function (event) {
  event.preventDefault();
  var target = document.querySelector(this.getAttribute("href"));

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  $("#myModal").modal("hide");
});

linkProjetos.addEventListener("click", function (event) {
  event.preventDefault();
  var target = document.querySelector(this.getAttribute("href"));

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  $("#myModal").modal("hide");
});

linkContato.addEventListener("click", function (event) {
  event.preventDefault();
  var target = document.querySelector(this.getAttribute("href"));

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  $("#myModal").modal("hide");
});

linkresume.addEventListener("click", function (event) {
  event.preventDefault();
  var target = document.querySelector(this.getAttribute("href"));

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  $("#myModal").modal("hide");
});




