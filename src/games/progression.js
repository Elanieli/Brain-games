import runEngine from '../index.js';

const progression = () => {
  const taskDescription = 'What number is missing in the progression?';

  const taskProgression = () => {
    const randomStep = Math.ceil(Math.random() * 5);
    const a = Math.ceil(Math.random() * 15);
    const b = Math.ceil(Math.random() * 20);

    const question = [];

    for (let i = Math.min(a, b); i < Math.max(a, b) * 10 && question.length < 11; i += randomStep) {
      question.push(String(i));
    }
    const randomQuestionIndex = Math.floor(Math.random() * question.length);
    const result = question[randomQuestionIndex];
    question[randomQuestionIndex] = '..';
    return [question.join(' '), String(result)];
  };
  runEngine(taskDescription, taskProgression);
};

export default progression;
