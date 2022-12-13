import commonLogic from '../index.js';

const playGame = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    let result = '';
    const question = Math.floor(Math.random() * 100);
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
