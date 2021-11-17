/*jshint esversion: 6 */
`use strict`;

import modal from './modules/modal';
import sliderBenefitBlock from './modules/slider_benefit';
import sliderService from './modules/slider_service';
import timer from './modules/timer';
import validation from './modules/validation_forms';
import sendForm from './modules/send_form';
import zoomModal from './modules/zoom_modal';
import calc from './modules/calculator';
import reviews from './modules/reviews';

modal();
sliderBenefitBlock();
sliderService();
timer();
validation();
zoomModal();
sendForm();
calc();
reviews();