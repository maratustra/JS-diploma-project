/*jshint esversion: 6 */
`use strict`;

class Validation {
  constructor({ formsBlocksTag, userNameInputAttr, phoneNumberInputAttr }) {
    this.formsBlocks = document.querySelectorAll(`${formsBlocksTag}`);
    this.userNameInputs = document.querySelectorAll(`${userNameInputAttr}`);
    this.phoneNumberInputs = document.querySelectorAll(`${phoneNumberInputAttr}`);

    this.eventListeners();
  }

  userValidation(input) {
    if (/[^а-яa-z\s-]+$/gi.test(input.value)) {
      input.value = input.value.replace(/[^а-яА-Я\s-]+$/g, '');
    } else if (/([\s-])\1/gi.test(input.value)) {
      input.value = input.value.replace(/([\s-])\1/g, '');
    } else if (/-[а-яёa-z]/gi.test(input.value)) {
      input.value = input.value.replace(/-[а-яёa-z]/gi, $0 => $0.toUpperCase());
    } else if (input.value.length > 0) {
      input.value =
        input.value
          .split(' ')
          .map(item => item.length > 0 ? item[0].toUpperCase() + item.substring(1) : '')
          .join(' ');
    }
  }

  phoneValidation(input) {
    if (/[^\d+]/g.test(input.value)) {
      input.value = input.value.replace(/[^\d+]/g, "");
    } else if (input.value.length >= 11) {
      input.value = input.value.trim().replace(/\s+/g, " ");
    }
  }

  eventListeners() {

    this.formsBlocks.forEach(() => {

      this.userNameInputs.forEach((eachUserInput) => {
        eachUserInput.addEventListener('input', (e) => {
          this.userValidation(e.target);
        });
      });

      this.phoneNumberInputs.forEach((eachPhoneInput) => {
        eachPhoneInput.addEventListener('input', (e) => {
          this.phoneValidation(e.target);
        });
      });
    });
  }
}

export default Validation;