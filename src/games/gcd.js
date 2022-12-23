import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const taskDecription = 'Find the greatest common divisor of given numbers.';

const calc = (firstNum, secondNum) => {
  let result;
  let num1 = firstNum;
  let num2 = secondNum;

  while (num1 !== num2) {
    if (num1 === 0) {
      result = secondNum;
      break;
    }
    if (num2 === 0) {
      result = num1;
      break;
    }
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
    result = num1;
  }
  return result;
};

const generateRound = () => {
  const firstNum = getRandomInRange(1, 40);
  const secondNum = getRandomInRange(1, 35);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(calc(firstNum, secondNum));
  return [question, answer];
};

export default () => runEngine(taskDecription, generateRound);
