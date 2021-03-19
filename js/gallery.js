import galleryItems from './gallery-items.js'
import refs from './refs.js'
import listMarkup from './list-markup.js'



refs.galleryList.innerHTML = listMarkup(galleryItems);

refs.galleryList.addEventListener('click', onModalOpen)
refs.modalCloseBtn.addEventListener('click', onModalClose)
refs.modalOverlay.addEventListener('click', onModalClose)
window.addEventListener('keydown', onModalClose)
window.addEventListener('keydown', onModalChangeImgByKeyDown)

function getImgAttributes(src, alt) {
  refs.modalImg.src = src
  refs.modalImg.alt = alt
}


function onModalOpen(event) {
    event.preventDefault()
    refs.modal.classList.add('is-open')
  
  getImgAttributes(event.target.dataset.source, event.target.alt)
}

function onModalClose(event) {
  if (event.target === event.currentTarget || event.code === "Escape") {
    refs.modal.classList.remove('is-open')
  
    getImgAttributes('','');
  }
}



const arrayWithImgRefs = galleryItems.map(item => item.original)


const arrayWithAltRefs = galleryItems.map(item => item.description)
  

function onModalChangeImgByKeyDown(event) {
    
  let indexOfImg = arrayWithImgRefs.indexOf(refs.modalImg.src);
  
    let indexOfIAlt = indexOfImg
    const indexOfLastElement = arrayWithImgRefs.length-1
  if (event.code === 'ArrowRight') {
    if (indexOfImg < indexOfLastElement) {
      indexOfImg += 1;
      indexOfIAlt += 1;
      
      getImgAttributes(arrayWithImgRefs[indexOfImg], arrayWithAltRefs[indexOfImg]);
    }
    else if (indexOfImg = indexOfLastElement) {
      
      getImgAttributes(arrayWithImgRefs[0], arrayWithAltRefs[0]);
    }
  }
  else if (event.code === 'ArrowLeft') {
    if (indexOfImg > 0) {
      indexOfImg -= 1;
      indexOfIAlt -= 1;
      
      getImgAttributes(arrayWithImgRefs[indexOfImg], arrayWithAltRefs[indexOfImg]);
    }
    else {
      
      getImgAttributes(arrayWithImgRefs[indexOfLastElement], arrayWithAltRefs[indexOfLastElement]);
    }
    }
}
  



  

  
  

