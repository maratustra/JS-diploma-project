/*jshint esversion: 6 */
`use strict`;

import Modal from './modules/modal';
import SliderService from './modules/slider_service';
import Timer from './modules/timer';
import Scroll from './modules/scroll';
import Calculator from './modules/calculator';
import Validation from './modules/validation_forms';
import SendForm from './modules/send_form';
import ZoomImages from './modules/zoom_images';
import Reviews from './modules/reviews';


const modalOpts = {
  orderCallBtnClass: 'btn-block.fancyboxModal',
  orderCallMeasurerBtnsClass: 'btn-sm.fancyboxModal',
  modalWindowClass: 'header-modal--opened',
  modalMeasurerClass: 'services-modal--opened',
  closeModalWindowClass: 'header-modal__close',
  closeModalMeasurerClass: 'services-modal__close',
  overlayClass: 'overlay'
};

const modal = new Modal(modalOpts);


const sliderForServicesOpts = {
  sliderItemsClass: 'service-slide',
  leftArrowClass: 'services__arrow--left',
  rightArrowClass: 'services__arrow--right',
  highResolutionSlides: 2,
  lowResolutionSlides: 1
};

const sliderForServices = new SliderService(sliderForServicesOpts);


const sliderForBenefitsOpts = {
  sliderItemsClass: 'benefits__item',
  leftArrowClass: 'benefits__arrow--left',
  rightArrowClass: 'benefits__arrow--right',
  highResolutionSlides: 3,
  lowResolutionSlides: 1
};

const sliderForBenefits = new SliderService(sliderForBenefitsOpts);


const timerOpts = {
  deadline: '31 december 2021',
  timerDaysQuerySelector: 'div.count_1 span',
  timerHoursQuerySelector: 'div.count_2 span',
  timerMinutesQuerySelector: 'div.count_3 span',
  timerSecondsQuerySelector: 'div.count_4 span'
};

const timer = new Timer(timerOpts);

const scrollOpts = {
  scrollBtnClass: 'smooth-scroll',
  blockID: 'header'
};

const scroller = new Scroll(scrollOpts);


if (document.body.classList.contains('balkony')) {
  const calcOpts = {
    selectorsBlockClass: 'calc-row',
    calcTypeId: 'calc-type',
    calcTypeMaterialId: 'calc-type-material',
    calcSquareId: 'calc-input',
    calcTotalId: 'calc-total'
  };

  const calc = new Calculator(calcOpts);
}

const validOpts = {
  formsBlocksTag: 'form',
  userNameInputAttr: '[name="fio"]',
  phoneNumberInputAttr: '[name="phone"]'
};

const validation = new Validation(validOpts);


const sendFormOpts = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  formsBlocksTag: 'form',
  calcTotalSum: [
    {
      type: 'input',
      id: 'calc-total',
    }
  ],
};

const sending = new SendForm(sendFormOpts);


const zoomOpts = {
  pictureOverlaysClass: 'document-overlay',
  imagesClass: 'sertificate-document',
  modalCloseBtnClass: 'lightbox-close_btn',
  imagesGalleryBlockId: 'documents',
  globalOverlay: 'overlay'
};

const zoomCertificates = new ZoomImages(zoomOpts);


const reviewsOpts = {
  url: 'comments.json',
};

const reviews = new Reviews(reviewsOpts);
