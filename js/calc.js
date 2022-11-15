import { UserInterface } from './userInterface.js';

export class Calc extends UserInterface {
  constructor() {
    super();
    this.numA = null;
    this.numB = null;
    this.operation = null;
  }

  init() {
    for (const btn of this.buttons) {
      btn.addEventListener('click', e => {
        let result = '';

        try {
          result = this.calculate(e);
        } catch (error) {
          result = error.message;
        } finally {
          this.showResult(result);
        }
      });
    }
  }

  getData(e) {
    this.numA = Number(this.getInputValue('num-a'));
    this.numB = Number(this.getInputValue('num-b'));
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

  isNan(number) {
    return Number.isNaN(number);
  }

  isNotNumber(number) {
    return !typeof number === 'number';
  }

  areNumbersValid() {
    if (
      this.isNan(this.numA) ||
      this.isNan(this.numB) ||
      this.isNotNumber(this.numA) ||
      this.isNotNumber(this.numB)
    ) {
      throw new Error('Please enter valid numbers!');
    }
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

  getResult() {
    return this.handleOperation();
  }

  calculate(e) {
    return this.getData(e) ?? this.areNumbersValid() ?? this.getResult();
  }
}
