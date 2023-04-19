const modalClasses =
  "border border-blue-500 modal-container bg-white w-11/12 md:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-scroll max-h-[90vh]";
const modalContainerClasses =
  "main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster";
const createModal = (item) => {
  const modalContainer = document.createElement("div");
  modalContainer.id = "modal";
  modalContainer.classList.add(...modalContainerClasses.split(" "));
  const modal = document.createElement("div");
  modal.classList.add(...modalClasses.split(" "));
  const modalContent = document.createElement("div");
  modalContent.classList.add("py-4", "px-6", "text-left");
  modalContent.innerHTML = `<div class="flex justify-between items-center pb-3">
    <p class="text-2xl font-bold">${item.title}</p>
    <div id="close-modal" class="modal-close cursor-pointer z-50">
      <svg
        class="fill-current text-black"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path
          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
        ></path>
      </svg>
    </div>
  </div>
  <!--Body-->
  <div class="my-5">
    <div>
      <img
        src="${item.img}"
        class="h-48 md:h-60 lg:-h-96 w-full object-center mx-auto"
        alt="image"
      />
    </div>
    <div class="mt-4">
      <!-- comments list -->
      <h4 class="text-gray-900 text-xl font-semibold">Comments</h4>
      <ul class="mt-2">
        <li class="flex items-center">
          <div class="">
            <p class="text-gray-700 font-semibold">
              Abel
              <span
                id="comment-time"
                class="font-light text-sm text-gray-600"
              >
                10:00 AM 10/10/2021
              </span>
            </p>
            <p class="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </li>
      </ul>
      <form class="mt-4 shadow-sm">
        <h4 class="text-gray-900 text-xl font-semibold">Add Comment</h4>
        <div class="flex flex-col">
          <label
            for="name"
            class="text-gray-700 font-semibold mb-1"
          >

            Name
          </label>
          <input
            id="name"
            type="text"
            class="border border-gray-300 p-2 rounded"
          />

          <label
            for="comment"
            class="text-gray-700 mt-2 font-semibold mb-1"
          >
            Comment
          </label>
          <textarea
            id="comment"
            class="border border-gray-300 p-2 rounded resize-none"
            rows="2"
          ></textarea>
        </div>
        <div class="flex justify-end mt-2">
          <button
            id="comment-btn"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Comment
          </button>
        </div>
    </div>
  `;
  modalContainer.appendChild(modal);
  modal.appendChild(modalContent);
  return modalContainer;
};

export default createModal;
