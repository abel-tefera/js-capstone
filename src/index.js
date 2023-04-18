import './style.css';
import './tailwind.css';


// modal 

const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#close-modal');
const openButton = document.querySelector('#open-modal');

const modalClose = () => {
  modal.classList.remove('fadeIn');
  modal.classList.add('fadeOut');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500);
}

const openModal = () => {
  modal.classList.remove('fadeOut');
  modal.classList.add('fadeIn');
  modal.style.display = 'flex';
}

closeButton.addEventListener('click', modalClose);
openButton.addEventListener('click', openModal);