import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const taskDecription = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length)];
};

const calc = (firstNum, secondNum, randomOperator) => {
  let result = 0;
  switch (randomOperator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
  }
  return result;
};

const generateRound = () => {
  const firstNum = getRandomInRange(0, 15);
  const secondNum = getRandomInRange(0, 10);
  const randomOperator = getOperator();
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  const answer = String(calc(firstNum, secondNum, randomOperator));
  return [question, answer];
};

export default () => runEngine(taskDecription, generateRound);
