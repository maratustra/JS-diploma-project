/*jshint esversion: 6 */
`use strict`;

class SliderService {

  constructor({ sliderItemsClass, leftArrowClass, rightArrowClass, highResolutionSlides, lowResolutionSlides }) {


    this.activeSlideClass = 'active-slide';
    this.highResolutionMode = 'high resolution mode';
    this.lowResolutionMode = 'low resolution mode';

    this.slidesList = document.querySelectorAll(`.${sliderItemsClass}`);
    this.leftArrow = document.querySelector(`.${leftArrowClass}`);
    this.rightArrow = document.querySelector(`.${rightArrowClass}`);

    this.highResolutionSlides = highResolutionSlides;
    this.lowResolutionSlides = lowResolutionSlides;


    this.currentResolutionMode = null;
    this.maxSlidesToShow = null;

    this.currentActiveSlide = 0;

    this.checkCurrentResolution();
    this.listenToEvents();
  }

  checkCurrentResolution() {
    if (document.documentElement.clientWidth > 576) {
      if (this.currentResolutionMode != this.highResolutionMode) {
        this.currentResolutionMode = this.highResolutionMode;
        this.maxSlidesToShow = this.highResolutionSlides;
        this.showSlides();
      }
    } else {
      if (this.currentResolutionMode != this.lowResolutionMode) {
        this.currentResolutionMode = this.lowResolutionMode;
        this.maxSlidesToShow = this.lowResolutionSlides;
        this.showSlides();
      }
    }
  }

  listenToEvents() {
    if (this.leftArrow && this.rightArrow) {
      this.leftArrow.addEventListener('click', () => this.showPrevSlide());
      this.rightArrow.addEventListener('click', () => this.showNextSlide());
    }
    window.addEventListener('resize', () => this.checkCurrentResolution());
  }

  showSlides() {
    for (const slide of this.slidesList) slide.classList.remove(this.activeSlideClass);

    const maxRightIndex = Math.min(this.currentActiveSlide + this.maxSlidesToShow, this.slidesList.length);
    for (let i = this.currentActiveSlide; i < maxRightIndex; i++) {
      this.slidesList[i].classList.add(this.activeSlideClass);
    }
    this.showHideArrows();
  }

  showNextSlide(slideIndefinitely = false) {
    if (this.lastActiveSlide() < this.slidesList.length - 1) {
      this.slidesList[this.currentActiveSlide].classList.remove(this.activeSlideClass);
      this.currentActiveSlide++;
      this.slidesList[this.lastActiveSlide()].classList.add(this.activeSlideClass);
      this.showHideArrows();
    } else if (slideIndefinitely) {
      this.currentActiveSlide = 0;
      this.showSlides();
    }

  }

  showPrevSlide() {
    if (this.currentActiveSlide > 0) {
      this.slidesList[this.lastActiveSlide()].classList.remove(this.activeSlideClass);
      this.currentActiveSlide--;
      this.slidesList[this.currentActiveSlide].classList.add(this.activeSlideClass);
      this.showHideArrows();
    }
  }

  showHideArrows() {
    if (this.leftArrow && this.rightArrow) {
      switch (this.currentActiveSlide) {
        case 0:
          this.leftArrow.style.opacity = 0;
          this.rightArrow.style.opacity = 1;
          break;

        case this.slidesList.length - this.maxSlidesToShow:
          this.rightArrow.style.opacity = 0;
          this.leftArrow.style.opacity = 1;
          break;

        default:
          this.leftArrow.style.opacity = 1;
          this.rightArrow.style.opacity = 1;
      }
    }
  }

  lastActiveSlide() {
    return this.currentActiveSlide + this.maxSlidesToShow - 1;
  }
}

export default SliderService;