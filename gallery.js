import galleryItems from './gallery-items.js'

const galleryListRef = document.querySelector('.js-gallery')
const modalRef = document.querySelector('.js-lightbox')
const galleryModalIMGRef = document.querySelector('.lightbox__image')
const modalCloseBtnRef = document.querySelector('.lightbox__button')
const modalOverlayRef = document.querySelector('.lightbox__overlay')

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
modalCloseBtnRef.addEventListener('click', onModalClose)
modalOverlayRef.addEventListener('click', onModalClose)
window.addEventListener('keydown', onModalCloseByKeyPress)

function onModalOpen(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
       return
    }
    modalRef.classList.add('is-open')
  galleryModalIMGRef.src = event.target.dataset.source
  galleryModalIMGRef.alt = event.target.alt
  console.log();
}

function onModalClose(event) {
  if (event.target === event.currentTarget) {
    modalRef.classList.remove('is-open')
  galleryModalIMGRef.src = ''
  galleryModalIMGRef.alt = ''
  }
}

function onModalCloseByKeyPress(event) {
  
  if (event.code === "Escape") {
     modalRef.classList.remove('is-open')
  }
  
}

