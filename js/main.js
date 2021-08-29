const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('show-menu');
});

window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('show-menu');
};
