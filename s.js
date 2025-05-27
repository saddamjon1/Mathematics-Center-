
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  burger.classList.toggle('open');
});

// Modal logic
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('infoModal');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

window.addEventListener('click', e => {
  if(e.target === modal) {
    modal.classList.remove('active');
  }
});
