/*jshint esversion: 6 */
`use strict`;

class Calculator {
  constructor({ selectorsBlockClass, calcTypeId, calcTypeMaterialId, calcSquareId, calcTotalId }) {
    this.selectorsBlock = document.querySelector(`.${selectorsBlockClass}`);
    this.calcTypeOfBalcony = document.querySelector(`#${calcTypeId}`);
    this.calcTypeOfMaterial = document.querySelector(`#${calcTypeMaterialId}`);
    this.calcSquareOfBalcony = document.querySelector(`#${calcSquareId}`);
    this.calcTotalPrice = document.querySelector(`#${calcTotalId}`);

    this.calcTypeOfMateriaValue = 1;
    this.calcTotalPriceValue = 0;

    this.eventListeners();
  }

  calculate() {
    if (this.calcTypeOfBalconyValue && this.calcSquareOfBalconyValue) {
      this.calcTotalPriceValue = this.calcSquareOfBalconyValue * 100 * this.calcTypeOfBalconyValue * this.calcTypeOfMateriaValue;

      this.showResult(this.calcTotalPriceValue);
    }
  }

  showResult(totalPrice) {
    this.calcTotalPrice.value = totalPrice;
  }

  showError(field) {
    const warningNote = document.createElement('div');
    warningNote.classList.add('error');
    warningNote.style.color = 'red';
    warningNote.textContent = 'Это поле является обязательным для заполнения';
    field.parentNode.append(warningNote);
  }

  maybeHideError(field) {
    if (field.parentNode.lastElementChild.classList.contains('error'))
      field.parentNode.lastElementChild.remove();
  }

  eventListeners() {
    this.selectorsBlock.addEventListener('change', (e) => {
      switch (e.target) {
        case this.calcTypeOfBalcony:
          this.maybeHideError(this.calcTypeOfBalcony);
          if (e.target.value > 0) this.calcTypeOfBalconyValue = +e.target.value;
          else this.showError(this.calcTypeOfBalcony);

          break;

        case this.calcTypeOfMaterial:
          if (e.target.value > 0) this.calcTypeOfMateriaValue = +e.target.value;
          break;
      }

      this.calculate();
    });

    this.calcSquareOfBalcony.addEventListener('input', (e) => {
      this.calcSquareOfBalconyValue = +e.target.value;

      this.calculate();
    });
  }
}

export default Calculator;