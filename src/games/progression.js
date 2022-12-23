import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const taskDescription = 'What number is missing in the progression?';

const calc = (a, b, randomStep) => {
  const question = [];
  for (let i = Math.min(a, b); i < Math.max(a, b) * 10 && question.length < 11; i += randomStep) {
    question.push(String(i));
  }
  return question;
};

const generateRound = () => {
  const randomStep = getRandomInRange(1, 5);
  const firstNum = getRandomInRange(1, 15);
  const secondNum = getRandomInRange(1, 10);
  const question = calc(firstNum, secondNum, randomStep);
  const randomQuestionIndex = getRandomInRange(0, question.length);
  const answer = String(question[randomQuestionIndex]);
  question[randomQuestionIndex] = '..';
  return [question.join(' '), answer];
};

export default () => runEngine(taskDescription, generateRound);
