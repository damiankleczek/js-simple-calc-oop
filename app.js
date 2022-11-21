import { UserInterface } from './js/userInterface.js';
import { Calc } from './js/calc.js';

const ui = new UserInterface();
const calc = new Calc(ui);

calc.init();
