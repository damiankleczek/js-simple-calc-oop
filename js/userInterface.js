export class UserInterface {
  constructor() {
    this.btnsContainer = this.getSelector('.btns-container');
    this.resultDiv = this.getSelector('.result-value');
    this.resultBorder = this.getSelector('.result');
  }

  getSelector(selector) {
    return document.querySelector(selector);
  }

  getInputValue(inputName) {
    return this.getSelector(`[name="${inputName}"]`).value;
  }

  getClickedButtonAttribute(e, attribute) {
    return e.target.closest('div').getAttribute(attribute);
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
