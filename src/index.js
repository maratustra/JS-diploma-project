/*jshint esversion: 6 */
`use strict`;

import SliderService from './modules/slider_service';
import Timer from './modules/timer';
import Scroll from './modules/scroll';
import validation from './modules/validation_forms';
import sendForm from './modules/send_form';
import zoomModal from './modules/zoom_modal';
import calc from './modules/calculator';
import reviews from './modules/reviews';
import modal from './modules/modal';

modal();
validation();
zoomModal();
sendForm();
calc();
reviews();

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