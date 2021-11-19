/*jshint esversion: 6 */
`use strict`;

class Modal {

  constructor({ orderCallBtnClass, orderCallMeasurerBtnsClass, modalWindowClass, modalMeasurerClass, closeModalBtnsAttr, overlayCLass }) {
    this.orderCallBtn = document.querySelector(`.${orderCallBtnClass}`);
    this.orderCallMeasurerBtns = document.querySelectorAll(`.${orderCallMeasurerBtnsClass}`);
    this.modalWindow = document.querySelector(`.${modalWindowClass}`);
    this.modalMeasurer = document.querySelector(`.${modalMeasurerClass}`);
    this.closeModalBtns = document.querySelectorAll(`${closeModalBtnsAttr}`);
    this.overlay = document.querySelector(`.${overlayCLass}`);

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

    this.closeModalBtns.forEach(closeBtn => {
      closeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains(this.modalWindow)) this.modalWindow.style.display = 'none';
        else this.modalMeasurer.style.display = 'none';

        this.overlay.style.display = 'none';
      });
    });
  }
}


export default Modal;