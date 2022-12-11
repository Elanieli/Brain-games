import commonLogic from '../index.js';

const gcd = () => {
  const taskDecription = 'Find the greatest common divisor of given numbers.';
  const taskGcd = () => {
    let firstNum = Math.ceil(Math.random() * 40);
    let secondNum = Math.ceil(Math.random() * 35);
    const question = `${firstNum} ${secondNum}`;
    let result;

    while (firstNum !== secondNum) {
      if (firstNum === 0) {
        result = secondNum;
        break;
      }
      if (secondNum === 0) {
        result = firstNum;
        break;
      }
      if (firstNum > secondNum) {
        firstNum -= secondNum;
      } else {
        secondNum -= firstNum;
      }
      result = firstNum;
    }
    return [question, String(result)];
  };
  commonLogic(taskDecription, taskGcd);
};

export default gcd;
