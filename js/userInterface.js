export class UserInterface {
  constructor() {
    this.buttons = [...this.getButtons('.btn')];
    this.resultDiv = this.getSelector('.result-value');
  }

  getSelector(selector) {
    return document.querySelector(selector);
  }

  getInputValue(inputName) {
    return this.getSelector(`[name="${inputName}"]`).value;
  }

  getButtons(selector) {
    return document.querySelectorAll(selector);
  }

  showResult(value) {
    this.resultDiv.textContent = `${value}`;
  }
}
