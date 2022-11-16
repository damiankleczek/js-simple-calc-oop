export class UserInterface {
  constructor() {
    this.buttons = [...this.getButtons('.btn')];
    this.resultDiv = this.getSelector('.result-value');
    this.resultBorder = this.getSelector('.result');
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

  setErrorStyles(isEnabled) {
    if (!isEnabled) {
      this.resultBorder.classList.remove('border-red');
      return;
    }

    this.resultBorder.classList.add('border-red');
  }
}
