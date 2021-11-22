/*jshint esversion: 6 */
`use strict`;

import { Validation } from './validation_forms';

class SendForm {
  constructor({ url, formsBlocksTag, calcTotalSum = [] }) {
    this.url = url;
    this.formsBlocks = document.querySelectorAll(formsBlocksTag);
    this.calcTotalSum = calcTotalSum;
    this.statusBlock = document.createElement('div');
    this.errorText = 'Ошибка!';
    this.successText = 'Спасибо, мы обязательно с вами свяжемся';

    this.statusBlock.style.cssText = 'color: orange; font-size: 15px;';

    this.eventListeners();
  }

  sendData(data) {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }

  submitForm(form) {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    this.calcTotalSum.forEach(elem => {
      const calcTotalSumElem = document.querySelector(`#${elem.id}`);

      switch (elem.type) {
        case 'block':
          formBody[elem.id] = calcTotalSumElem.textContent;
          break;

        case 'input':
          formBody[elem.id] = calcTotalSumElem.value;
          break;
      }
    });

    this.sendData(formBody)
      .then(data => {
        console.log(data);
        this.statusBlock.textContent = this.successText;
        form.append(this.statusBlock);
      })
      .catch(error => {
        this.statusBlock.textContent = errorText;
        this.statusBlock.style.color = 'red';
        form.append(this.statusBlock);
      });
  }

  eventListeners() {
    try {
      this.formsBlocks.forEach((form) => {
        form.addEventListener('submit', (e) => {
          e.preventDefault();

          if (e.target.checkValidity()) {
            this.submitForm(e.target);
            setTimeout(() => form.reset(), 1500);
          }
          else {
            statusBlock.textContent = "Введите данные в правильном формате";
            form.append(statusBlock);
          }
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default SendForm;