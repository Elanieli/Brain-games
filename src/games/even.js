import commonLogic from '../index.js';

const playGame = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    const question = Math.floor(Math.random() * (100 - 1)) + 1;
    let result = '';
    if (question % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [String(question), result];
  };
  commonLogic(taskDescription, taskEven);
};
export default playGame;
