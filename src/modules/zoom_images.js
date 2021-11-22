/*jshint esversion: 6 */
`use strict`;

class ZoomImages {
  constructor({ pictureOverlaysClass, imagesClass, modalCloseBtnClass, imagesGalleryBlockId, globalOverlay }) {
    this.pictureOverlay = document.querySelectorAll(`.${pictureOverlaysClass}`);
    this.imagesToZoom = document.querySelectorAll(`.${imagesClass}`);
    this.galleryBlock = document.querySelector(`#${imagesGalleryBlockId}`);
    this.overlay = document.querySelector(`.${globalOverlay}`);
    this.modalCloseBtn = modalCloseBtnClass;

    this.eventListeners();
  }

  showZoomedImage(img) {
    const imageLink = img;
    console.log(imageLink);

    this.createZoomedImageElement(imageLink);

    this.galleryBlock.append(this.modalWindow);
    this.overlay.style.display = 'block';
  }

  createZoomedImageElement(imageLink) {
    this.modalWindow = document.createElement('div');
    this.modalWindow.classList.add('modal-zoom');

    this.modalWindow.innerHTML = `
    <button class=${this.modalCloseBtn}>X</button>
    <div>
      <img src="${imageLink}" alt="" style="width: 100%; height: 80vh"/>
    </div>
    `;
  }

  eventListeners() {
    this.imagesToZoom.forEach(img => {
      img.addEventListener('click', (e) => {
        e.preventDefault();

        this.showZoomedImage(e.target.parentNode.href);
      });
    });

    this.galleryBlock.addEventListener('click', (e) => {
      if (e.target.closest(`.${this.modalCloseBtn}`)) {
        this.overlay.style.display = 'none';
        this.modalWindow.style.display = 'none';
      }
    });
  }
}


export default ZoomImages;