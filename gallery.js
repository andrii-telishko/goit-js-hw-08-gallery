import galleryItems from './gallery-items.js'

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  modalImg: document.querySelector('.lightbox__image'),
  modalCloseBtn: document.querySelector('.lightbox__button'),
  modalOverlay: document.querySelector('.lightbox__overlay')
}



function createListMarkup(array) {
    return array.map(({original, preview, description}) => 
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
        ).join('')
    
}

refs.galleryList.innerHTML = createListMarkup(galleryItems);

refs.galleryList.addEventListener('click', onModalOpen)
refs.modalCloseBtn.addEventListener('click', onModalClose)
refs.modalOverlay.addEventListener('click', onModalClose)
window.addEventListener('keydown', onModalCloseByKeyDown)
window.addEventListener('keydown', onModalChangeImgByKeyDown)


function onModalOpen(event) {
    event.preventDefault()
    refs.modal.classList.add('is-open')
  refs.modalImg.src = event.target.dataset.source
  refs.modalImg.alt = event.target.alt
  
}

function onModalClose(event) {
  if (event.target === event.currentTarget) {
    refs.modal.classList.remove('is-open')
  refs.modalImg.src = ''
  refs.modalImg.alt = ''
  }
}

function onModalCloseByKeyDown(event) {
  
  if (event.code === "Escape") {
    refs.modal.classList.remove('is-open')
    refs.modalImg.src = ''
    refs.modalImg.alt = ''
  }
}

const arrayWithImgRefs = galleryItems.map(item => item.original)
const arrayWithAltRefs = galleryItems.map(item => item.description)
  

function onModalChangeImgByKeyDown(event) {
    
    let indexOfImg = arrayWithImgRefs.indexOf(refs.modalImg.src);
    let indexOfIAlt = arrayWithAltRefs.indexOf(refs.modalImg.alt);
    const indexOfLastElement = arrayWithImgRefs.length-1
  if (event.code === 'ArrowRight') {
    if (indexOfImg < indexOfLastElement) {
      indexOfImg += 1;
      indexOfIAlt += 1;
      refs.modalImg.src = arrayWithImgRefs[indexOfImg];
      refs.modalImg.alt = arrayWithAltRefs[indexOfImg]
    }
    else if (indexOfImg = arrayWithImgRefs[indexOfLastElement]) {
      refs.modalImg.src = arrayWithImgRefs[0];
      refs.modalImg.alt = arrayWithAltRefs[0]
    }
  }
  else if (event.code === 'ArrowLeft') {
    if (indexOfImg > 0) {
      indexOfImg -= 1;
      indexOfIAlt -= 1;
      refs.modalImg.src = arrayWithImgRefs[indexOfImg]
      refs.modalImg.alt = arrayWithAltRefs[indexOfImg]
    }
    else {
      refs.modalImg.src = arrayWithImgRefs[indexOfLastElement]
      refs.modalImg.alt = arrayWithAltRefs[indexOfLastElement]
    }
    }
  }

  

  
  

