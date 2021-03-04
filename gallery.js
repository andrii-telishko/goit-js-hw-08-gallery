import galleryItems from './gallery-items.js'

// console.log(galleryItems[0].description);

const galleryListRef = document.querySelector('.js-gallery')
const modalRef = document.querySelector('.js-lightbox')
const galleryLinkRef = document.querySelector('.gallery__link')
const galleryModalIMGRef = document.querySelector('.lightbox__image')

console.log(galleryLinkRef);
function createListMarkup(array) {
    const arrayMarkup =  array.map(({original, preview, description}) => 
        `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href=""
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `
        
    )
    return arrayMarkup;
}

galleryListRef.innerHTML = createListMarkup(galleryItems).join('');

galleryListRef.addEventListener('click', onModalOpen)
// galleryModalIMGRef.src = galleryItems[0].original
// console.log(galleryModalIMGRef.src);

const src = galleryItems.map(element => element.original)

console.log(src);

src.forEach(element => galleryItems.src = element)
// getOriginalWayToImage(galleryItems)
function onModalOpen(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
       return
    }
    modalRef.classList.add('is-open')
    galleryModalIMGRef.src = galleryItems.original;
    galleryItems.src = src[0]

}

