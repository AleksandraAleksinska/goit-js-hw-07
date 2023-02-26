import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


const galleryElements = galleryItems.map((item) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
    )
    .join("");

gallery.insertAdjacentHTML('beforeend', galleryElements);

const biggerImg = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
      }
        const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">`)

        instance.show()       

    };
    gallery.addEventListener('click', biggerImg);