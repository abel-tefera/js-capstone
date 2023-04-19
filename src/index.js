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
