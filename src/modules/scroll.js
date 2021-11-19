/*jshint esversion: 6 */
`use strict`;

class Scroll {
  constructor({ scrollBtnClass, blockID }) {
    this.scrollBtnClass = document.querySelector(`.${scrollBtnClass}`);
    this.blockID = document.querySelector(`#${blockID}`);

    this.scrollBtnClass.style.display = 'none';

    this.eventListeners();
  }

  eventListeners() {
    this.scrollBtnClass.addEventListener('click', () => this.smoothScrollMenu());
    window.addEventListener('scroll', () => this.showScrollBtn());
  }

  smoothScrollMenu() {
    this.blockID.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  showScrollBtn() {
    if (pageYOffset < document.documentElement.clientHeight) {
      this.scrollBtnClass.style.display = 'none';
    } else {
      this.scrollBtnClass.style.display = 'block';
    }
  }
}

export default Scroll;