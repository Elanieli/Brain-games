import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => String(question % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const question = getRandomInRange(1, 100);
  const result = isEven(question);
  return [question, result];
};

export default () => runEngine(taskDescription, generateRound);
