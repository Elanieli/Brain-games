import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  let result = '';
  const num = Number(question);
  if (num === 2) {
    result = 'yes';
    return result;
  }
  for (let i = 2; i < question; i += 1) {
    if (num % i === 0) {
      result = 'no';
      break;
    }
    result = 'yes';
  }
  return result;
};

const generateRound = () => {
  const question = String(getRandomInRange(2, 100));
  const answer = isPrime(question);
  return [question, answer];
};

export default () => runEngine(taskDescription, generateRound);
