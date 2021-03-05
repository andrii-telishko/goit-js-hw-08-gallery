import galleryItems from './gallery-items.js'

const galleryListRef = document.querySelector('.js-gallery')
const modalRef = document.querySelector('.js-lightbox')
const galleryModalIMGRef = document.querySelector('.lightbox__image')
const modalCloseBtnRef = document.querySelector('.lightbox__button')

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

function onModalClose () {
  modalRef.classList.remove('is-open')
  galleryModalIMGRef.src = ''
  galleryModalIMGRef.alt = ''
}

