import commonLogic from '../index.js';

const prime = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskPrime = () => {
    const question = Math.ceil(Math.random() * (100 - 2)) + 2;
    let result = '';

    if (question === 2) {
      result = 'yes';
      return result;
    }
    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        result = 'no';
        break;
      }
      result = 'yes';
    }
    return [question, result];
  };
  commonLogic(taskDescription, taskPrime);
};
export default prime;
