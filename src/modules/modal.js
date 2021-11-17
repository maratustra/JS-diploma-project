/*jshint esversion: 6 */
`use strict`;

const modal = () => {
  const orderCallBtn = document.querySelector('.btn-block.fancyboxModal');
  const orderCallMeasurerBtns = document.querySelectorAll('.btn-sm.fancyboxModal');
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.header-modal--opened');
  const modalMeasurer = document.querySelector('.services-modal--opened');
  const closeModalBtn = document.querySelectorAll('[title="Close"]');


  orderCallBtn.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    modal.style.display = 'block';
  });

  orderCallMeasurerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.style.display = 'block';
      modalMeasurer.style.display = 'block';
    });
  });

  closeModalBtn.forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      if (e.target.closest('.header-modal--opened')) {
        modal.style.display = 'none';
      } else if (e.target.closest('.services-modal--opened')) {
        modalMeasurer.style.display = 'none';
      }
      overlay.style.display = 'none';
    });
  });
};

export default modal;