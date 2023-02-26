import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const galleryElements = galleryItems.map((item) => 
    `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
  `
    )
    .join("");

gallery.insertAdjacentHTML('beforeend', galleryElements);

const biggerImg = new SimpleLightbox ( '.gallery a', {  
    captions: true,
    // captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 300,


    });
    // gallery.addEventListener('click', biggerImg);