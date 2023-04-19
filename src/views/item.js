export class item extends HTMLElement {
  connectedCallback() {
    const {
      imgSrc, title, likes, objectId,
    } = this.attributes;
    this.innerHTML = `<img
    src="${imgSrc.value}"
    class="rounded aspect-square"
  />
  <span class="flex flex-row justify-between my-2">
    <p class="text-start text-lg break-all">${title.value}</p>
    <span class="text-end flex flex-row justify-end">
      <p class="text-base px-2 text-center"><span class="text-red-400">${likes.value}</span> Likes</p>
      <button class="like-btn" id="like-btn-${objectId.value}">
        <svg
          class="text-gray-300 w-6 h-auto fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
          />
        </svg>
      </button>
    </span>
  </span>
  <button
    class="comment-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  >
    Comments
  </button>`;
  }
}