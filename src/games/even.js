import commonLogic from '../index.js';

const playGame = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    const question = Math.floor(Math.random() * 100);
    let result = '';

    if (question % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [question, result];
  };
  commonLogic(taskDescription, taskEven);
};
export default playGame;
