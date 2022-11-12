export class Calc {
  constructor(numA, numB, sign) {
    this.numA = numA;
    this.numB = numB;
    this.sign = sign;
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
    switch (this.sign) {
      case '+':
        return this.add();
      case '-':
        return this.subtract();
      case '*':
        return this.multiply();
      case '/':
        return this.divide();
      case '^':
        return this.power();

      default:
        throw new Error('Invalid operation!');
    }
  }

  getResult() {
    return this.handleOperation();
  }

  calculate() {
    return this.areNumbersValid() ?? this.getResult();
  }
}
