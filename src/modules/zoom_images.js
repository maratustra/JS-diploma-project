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

    this.createZoomedImageElement(imageLink);

    this.galleryBlock.append(this.modalWindow);
    this.overlay.style.display = 'block';
  }

  createZoomedImageElement(imageLink) {
    this.modalWindow = document.createElement('div');

    this.modalWindow.innerHTML = `
    <button class=${this.modalCloseBtn}>X</button>
    <div>
      <img src="${imageLink}" alt="" style="width: 100%; height: 80vh"/>
    </div>
    `;

    this.modalWindow.style.cssText = `
        display: flex;
        position: fixed;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, 0%);
        top: 10%;
        z-index: 20;
        height: 80vh;
        background: #fff;
        opacity: 1;
        transition: opacity .2s ease-in-out 0s;
    `;
  }

  eventListeners() {
    this.imagesToZoom.forEach(img => {
      img.addEventListener('mouseover', (e) => {
        e.target.style.opacity = '1';
      });

      img.addEventListener('mouseout', (e) => {
        e.target.style.opacity = '0';
      });

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