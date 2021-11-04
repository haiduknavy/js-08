// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const makeGalleryEl = galleryItems.map(item => {
    return `
    
  <a class="gallery__item" href='${item.original}'>
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
    `
}).join('');
gallery.insertAdjacentHTML('afterbegin', makeGalleryEl);

function onGalleryRefOpen(event){
  event.preventDefault();
  let gallery = new SimpleLightbox('.gallery a',{captions:true,captionSelector:'img',captionsData:"alt",captionDelay:250,animationSpeed:350});
    gallery.open();
};

gallery.addEventListener('click', onGalleryRefOpen);

