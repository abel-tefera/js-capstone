import { getItems } from './api/getItems.js';
import { addLike } from './api/addLike.js';

import './style.css';
import './tailwind.css';
import { item } from './views/item';
// import logo from './assets/logo.jpg';

// const img = document.querySelector('brand');
// img.src = mainImage;

if (!window.customElements.get('item-card')) {
  window.customElements.define('item-card', item);
}

window.addEventListener('DOMContentLoaded', async () => {
  const items = await getItems();
  const itemsContainer = document.querySelector('.items-container');
  items.forEach(({ title, primaryImageSmall, objectID }) => {
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
    objectId="${objectID}"
    title="${title}"
    likes="0"
    >
    </item-card>`;
    itemsContainer.appendChild(itemDiv);
  });

  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const objectId = e.currentTarget.id.split('-')[2];
      addLike(objectId);
      const svg = e.currentTarget.querySelector('.svg-img');
      svg.classList.remove('text-gray-300');

      if (!svg.classList.contains('text-red-400')) {
        const likesCount = document.getElementById(`likes-count-${objectId}`);
        const num = parseInt(likesCount.innerHTML);
        likesCount.innerHTML = '';
        likesCount.innerHTML = `${num + 1}`;
      }
      svg.classList.add('text-red-400');
    });
  });
});
