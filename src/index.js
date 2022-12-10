import readlineSync from 'readline-sync';

const commonLogic = (taskDecription, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskDecription);

  for (let i = 0; i < 3; i += 1) {
    const taskAndResult = task();
    console.log('Question: ', taskAndResult[0]);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === taskAndResult[1]) {
      console.log('Correct!');
    } else {
      const wrongAnswer = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${taskAndResult[1]}'. \n Let's try again, ${userName}!`);
      return wrongAnswer;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default commonLogic;
