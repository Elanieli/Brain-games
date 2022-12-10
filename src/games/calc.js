import commonLogic from '../index.js';

const calc = () => {
  const taskDecription = 'What is the result of the expression?';
  const calcTask = () => {
    const symbol = ['+', '-', '*'];
    const randomSybol = symbol[Math.floor(Math.random() * symbol.length)];
    const firstNum = Math.ceil(Math.random() * 15);
    const secondNum = Math.ceil(Math.random() * 10);
    const question = `${firstNum} ${randomSybol} ${secondNum}`;
    let result = 0;

    if (randomSybol === '+') {
      result = firstNum + secondNum;
    }
    if (randomSybol === '-') {
      result = firstNum - secondNum;
    }
    if (randomSybol === '*') {
      result = firstNum * secondNum;
    }
    return [question, String(result)];
  };
  commonLogic(taskDecription, calcTask);
};
export default calc;
