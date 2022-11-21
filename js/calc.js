export class Calc {
  constructor(ui) {
    this.ui = ui;
    this.numA = null;
    this.numB = null;
    this.operation = null;
  }

  init() {
    for (const btn of this.ui.buttons) {
      btn.addEventListener('click', e => {
        let result = '';

        try {
          result = this.calculate(e);
          this.ui.setErrorStyles(false);
        } catch (error) {
          result = error.message;
          this.ui.setErrorStyles(true);
        } finally {
          this.ui.showResult(result);
        }
      });
    }
  }

  getData(e) {
    this.numA = this.ui.getInputValue('num-a');
    this.numB = this.ui.getInputValue('num-b');
    this.operation = e.target.closest('div').getAttribute('data-operation');
  }

  add() {
    return this.numA + this.numB;
  }

  subtract() {
    return this.numA - this.numB;
  }

  multiply() {
    return this.numA * this.numB;
  }

  divide() {
    if (!this.numB) throw new Error('Dividing by 0 is not allowed!');
    return this.numA / this.numB;
  }

  power() {
    return this.numA ** this.numB;
  }

  isEmpty(field) {
    return field === '' || field === null || field === undefined;
  }

  isNan(number) {
    return Number.isNaN(Number(number));
  }

  isNotNumber(number) {
    return !typeof number === 'number';
  }

  isNumberInfinite(number) {
    return !Number(isFinite(number));
  }

  areNumbersValid() {
    if (this.isEmpty(this.numA) || this.isEmpty(this.numB))
      throw new Error("Fields can't be empty!");

    if (
      this.isNan(this.numA) ||
      this.isNan(this.numB) ||
      this.isNotNumber(this.numA) ||
      this.isNotNumber(this.numB)
    ) {
      throw new Error('Please enter valid numbers!');
    }
  }

  convertDataToNumbers() {
    this.numA = Number(this.numA);
    this.numB = Number(this.numB);
  }

  handleOperation() {
    switch (this.operation) {
      case 'add':
        return this.add();
      case 'subtract':
        return this.subtract();
      case 'multiply':
        return this.multiply();
      case 'divide':
        return this.divide();
      case 'power':
        return this.power();

      default:
        break;
    }
  }

  getValidatedResult() {
    const result = this.handleOperation();

    if (this.isNumberInfinite(result))
      throw new Error('Result value is too big!');
    return result;
  }

  calculate(e) {
    return (
      this.getData(e) ??
      this.areNumbersValid() ??
      this.convertDataToNumbers() ??
      this.getValidatedResult()
    );
  }
}
