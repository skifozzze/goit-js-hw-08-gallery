const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const refs = {
  galleryEl: document.querySelector(".js-gallery"),
  lightBoxEl: document.querySelector(".js-lightbox"),
  lightBoxImgEl: document.querySelector(".lightbox__image"),
  lightBoxOverlayEl: document.querySelector(".lightbox__overlay"),
  closeBtnEl: document.querySelector("[data-action='close-lightbox']"),
};

refs.galleryEl.addEventListener("click", onImageClick);
refs.closeBtnEl.addEventListener("click", onCloseBtnClick);
refs.lightBoxOverlayEl.addEventListener("click", onLightBoxOverlayClick);
// refs.lightBoxEl.addEventListener("keydown", onArrowKeyPress);
window.addEventListener("keydown", onEscBtnPress);

function createGalleryMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a
            class="gallery__link"
            href="${original}"
          >
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
       </li>
     `;
    })
    .join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);

refs.galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const bigImageUrl = evt.target.dataset.source;

  refs.lightBoxEl.classList.add("is-open");

  refs.lightBoxImgEl.src = bigImageUrl;
  refs.lightBoxImgEl.alt = evt.target.alt;
}

function onCloseBtnClick() {
  refs.lightBoxEl.classList.remove("is-open");
  refs.lightBoxImgEl.src = "";
}

function onEscBtnPress(evt) {
  if (evt.code !== "Escape") {
    return;
  }
  onCloseBtnClick();
}

function onLightBoxOverlayClick(evt) {
  onCloseBtnClick();
}

// function onArrowKeyPress(evt) {
//   if (refs.lightBoxEl.classList.contains("is-open")) {
//     console.log(evt.code);
//   }
// }
