/*jshint esversion: 6 */
`use strict`;

class Modal {

  constructor({ orderCallBtnClass, orderCallMeasurerBtnsClass, modalWindowClass, modalMeasurerClass, closeModalWindowClass, closeModalMeasurerClass, overlayClass }) {
    this.orderCallBtn = document.querySelector(`.${orderCallBtnClass}`);
    this.orderCallMeasurerBtns = document.querySelectorAll(`.${orderCallMeasurerBtnsClass}`);
    this.modalWindow = document.querySelector(`.${modalWindowClass}`);
    this.modalMeasurer = document.querySelector(`.${modalMeasurerClass}`);
    this.closeModalWindow = document.querySelector(`.${closeModalWindowClass}`);
    this.closeModalMeasurer = document.querySelector(`.${closeModalMeasurerClass}`);
    this.overlay = document.querySelector(`.${overlayClass}`);

    this.eventListeners();
  }

  eventListeners() {
    this.orderCallBtn.addEventListener('click', () => {
      this.overlay.style.display = 'block';
      this.modalWindow.style.display = 'block';
    });

    this.orderCallMeasurerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.overlay.style.display = 'block';
        this.modalMeasurer.style.display = 'block';
      });
    });

    this.closeModalWindow.addEventListener('click', () => {
      this.modalWindow.style.display = 'none';
      this.overlay.style.display = 'none';
    });

    this.closeModalMeasurer.addEventListener('click', () => {
      this.modalMeasurer.style.display = 'none';
      this.overlay.style.display = 'none';
    });
  }
}


export default Modal;