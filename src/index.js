import './style.css';
import './tailwind.css';
import { item } from './views/item.js';
import { getItems } from './api/getItems.js';
import createModal from './views/modal.js';
import { postComment } from './api/comments.js';

const modalClose = () => {
  const modal = document.querySelector('#modal');
  modal.classList.remove('fadeIn');
  modal.classList.add('fadeOut');
  setTimeout(() => {
    modal.style.display = 'none';
    modal.parentElement.removeChild(modal);
  }, 500);
};

const handleSubmit = (e, id) => {
  e.preventDefault();
  const form = e.target;
  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;
  postComment(id, name, comment);
  const commentsList = document.querySelector('#comments-list');
  const commentObj = {
    username: name,
    comment,
    creation_date: new Date().toLocaleString(),
  };
  const li = document.createElement('li');
  li.classList.add('flex', 'flex-col', 'py-2', 'border-b', 'border-gray-300');
  li.innerHTML = `<div class='flex justify-between items-center'>
    <p class='font-bold'>${commentObj.username}</p>
    <p class='text-sm text-gray-500'>${commentObj.creation_date}</p>
  </div>
  <p class='text-sm'>${comment.commentObj}</p>`;

  commentsList.appendChild(li);
  const span = document.createElement('span');
  span.classList.add('font-light', 'text-sm', 'text-green-600');
  span.innerHTML = 'Comment added successfully';
  form.appendChild(span);
  setTimeout(() => {
    span.parentElement.removeChild(span);
    form.reset();
  }, 3000);
};

const openModal = (title, img) => {
  const id = `${title.length + img.length}`;
  const modal = createModal({ title, img, id });
  document.body.appendChild(modal);
  const closeButton = document.querySelector('#close-modal');
  const form = document.querySelector(`#form-${id}`);
  form.addEventListener('submit', (e) => handleSubmit(e, id));
  closeButton.addEventListener('click', modalClose);
  modal.classList.remove('fadeOut');
  modal.classList.add('fadeIn');
  modal.style.display = 'flex';
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
    const commentBtnClasses = 'comment-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded';
    commentBtn.classList.add(...commentBtnClasses.split(' '));
    commentBtn.innerHTML = 'Comment';
    commentBtn.addEventListener('click', () => {
      openModal(title, primaryImageSmall, objectId);
    });
    itemDiv.appendChild(commentBtn);
    itemsContainer.appendChild(itemDiv);
  });
});
