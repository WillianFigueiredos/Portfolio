




document.getElementById("drop").addEventListener("click", function(){
    $("#myModal").modal("show");
});
document.getElementById("droptoggle").addEventListener("click", function(){
    $("#myModal").modal("show");
});






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




  
  window.addEventListener('scroll', function() {
    var scroll = window.pageYOffset;
    var height = document.body.scrollHeight - window.innerHeight;
    var progress = (scroll / height) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
    });





    
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
  
  
  window.onscroll = function() {
    const header = document.querySelector('.namehearder');
    if (window.pageYOffset > 50) {
      header.style.color = 'white';
    } else {
      header.style.color = 'var(--eerie-black)';
    }
  };
  









