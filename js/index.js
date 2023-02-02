
/* MODAL */
document.getElementById("drop").addEventListener("click", function(){
    $("#myModal").modal("show");
});
document.getElementById("droptoggle").addEventListener("click", function(){
    $("#myModal").modal("show");
});
/* MODAL */

/* XP ED */
document.getElementById("education-btn").addEventListener("click", function() {
    document.getElementById("education").style.display = "block";
    document.getElementById("experience").style.display = "none";
  });
  
  document.getElementById("experience-btn").addEventListener("click", function() {
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "block";
  });

  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("experience").style.display = "none";
  });
/* XP ED */

/* NAVBAR HEADER  PROGRESS BAR*/ 
  window.addEventListener('scroll', function() {
    var scroll = window.pageYOffset;
    var height = document.body.scrollHeight - window.innerHeight;
    var progress = (scroll / height) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
    });
/* NAVBAR HEADER  PROGRESS BAR*/ 

/* NAVBAR HEADER LINKS */
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
      navbar.classList.add("scrolled");
      navLinks.forEach(link => link.classList.add("color"));
    } else {
      navbar.classList.remove("scrolled");
      navLinks.forEach(link => link.classList.remove("color"));
    }
  });
/* NAVBAR HEADER LINKS */

/* NAVBAR HEADER NAME*/
  window.onscroll = function() {
    const header = document.querySelector('.namehearder');
    if (window.pageYOffset > 50) {
      header.style.color = 'white';
    } else {
      header.style.color = 'var(--eerie-black)';
    }
  };
/* NAVBAR HEADER NAME*/

/* CONTATO FOOTER CARROUSEL */
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#carouseltag', {
    type   : 'loop',
    drag   : 'free',
    perPage: 2,
    arrows: false,
    pagination: false,
    pauseOnHover: true,
    wheel: true,
    autoScroll: {
      speed: 1,
    },
  }).mount( window.splide.Extensions );
});
/* CONTATO FOOTER CARROUSEL */


ScrollReveal().reveal(".slide-right", {
  delay: 75,
  duration: 1500,
  opacity: 0,
  distance: "50%",
  origin: "top",
  reset: true
});



(function scrollReveal() {
  window.sr = ScrollReveal();
  
  sr.reveal('.card-box', {
  duration   : 600,
  distance   : '5px',
  easing     : 'ease-out',
  origin     : 'bottom',
  reset      : true,
  scale      : 1,
  viewFactor : 0,
  afterReveal  : revealChildren,
}, -150);
  
  var revealChildren = sr.reveal('.card-title, .card-text', {
  duration   : 500,
  scale      : 1,
  distance   : '5px',
  origin     : 'bottom',
  reset      : true,
  easing     : 'ease-out',
  viewFactor : 1,
}, -75);
})();



