/*Hamburguer Menu*/ 
function toggleNav() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');

  var body = document.querySelector('body');
  body.classList.toggle('no-scroll');
}


function closeNav() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.remove('open');

  var body = document.querySelector('body');
  body.classList.remove('no-scroll');
}
/*Smooth Scroll*/
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

