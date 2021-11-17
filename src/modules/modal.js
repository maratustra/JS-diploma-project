/*jshint esversion: 6 */
`use strict`;

const modal = () => {
  const orderCallBtn = document.querySelector('.btn-block.fancyboxModal');
  const modal = document.querySelector('.header-modal--opened');
  const modalCloseBtn = document.querySelector('.header-modal__close');
  const overlay = document.querySelector('.overlay');


  orderCallBtn.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    modal.style.display = 'block';
  });

  modalCloseBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    modal.style.display = 'none';
  });
};

export default modal;