import './style.css';
import './tailwind.css';
import { item } from './views/item';
import { getItems } from './api/getItems';
import createModal from "./modules/modal";

const modalClose = () => {
  const modal = document.querySelector("#modal");
  modal.classList.remove("fadeIn");
  modal.classList.add("fadeOut");
  setTimeout(() => {
    modal.style.display = "none";
    modal.parentElement.removeChild(modal);
  }, 500);
};

const openModal = (title, img, id) => {
  const modal = createModal({ title, img, id});
  document.body.appendChild(modal);
  const closeButton = document.querySelector("#close-modal");
  closeButton.addEventListener("click", modalClose);
  modal.classList.remove("fadeOut");
  modal.classList.add("fadeIn");
  modal.style.display = "flex";
};

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
    const commentBtn = document.createElement('button');
    const commentBtnClasses = "comment-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
    commentBtn.classList.add(...commentBtnClasses.split(" "));
    commentBtn.innerHTML = "Comment";
    commentBtn.addEventListener("click", () => {
      openModal( title, primaryImageSmall, objectId);
    });
    itemDiv.appendChild(commentBtn);
    itemsContainer.appendChild(itemDiv);
  });
});
