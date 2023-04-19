import "./style.css";
import "./tailwind.css";

import createModal from "./modules/modal";

// modal

const openButton = document.querySelector("#open-modal");

const modalClose = () => {
  const modal = document.querySelector("#modal");
  modal.classList.remove("fadeIn");
  modal.classList.add("fadeOut");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.removeChild(modal);
  }, 500);
};

const openModal = () => {
  const modal = createModal({
    title: "Modal title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero nisl, aliquam ut nisl vel, aliquam aliquet nisl. Donec euismod, nisl vel aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl vel nisl. Donec euismod, nisl vel aliquam aliquet, nisl nisl aliquam nisl, nec aliquam nisl nisl vel nisl.",
  });
  document.body.appendChild(modal);
  const closeButton = document.querySelector("#close-modal");
  closeButton.addEventListener("click", modalClose);
  modal.classList.remove("fadeOut");
  modal.classList.add("fadeIn");
  modal.style.display = "flex";
};

openButton.addEventListener("click", openModal);
import { getItems } from './api/getItems';
import './style.css';
import './tailwind.css';
import { item } from './views/item';
// import logo from './assets/logo.jpg';

// const img = document.querySelector('brand');
// img.src = mainImage;

customElements.define('item-card', item);

window.addEventListener('DOMContentLoaded', async () => {
  const items = await getItems();
  const itemsContainer = document.querySelector('.items-container');
  items.forEach(({ title, primaryImageSmall, objectId }) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add(
      'flex',
      'flex-col',
      'w-full',
      'md:w-1/3',
      'md:px-4',
      'py-4',
    );
    itemDiv.innerHTML = `<item-card
    imgSrc="${primaryImageSmall}"
    objectId="${objectId}"
    title="${title}"
    likes="0"
    >
    </item-card>`;
    itemsContainer.appendChild(itemDiv);
  });
});
