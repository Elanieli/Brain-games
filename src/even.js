import readlineSync from 'readline-sync';

const getRandomNum = (max) => Math.floor(Math.random() * max);

const playGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(100);
    console.log('Question: ', num);
    const userAnswer = readlineSync.question('Your answer: ');
    const var1 = (num % 2 === 0 && userAnswer === 'yes');
    const var2 = (num % 2 !== 0 && userAnswer === 'no');
    const oppositeAnswer = (userAnswer === 'yes' ? 'no' : 'yes');

    if (var1 === true || var2 === true) {
      console.log('Correct!');
    } else {
      const wrongAnswer = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'. \n Let's try again, ${name}!`);
      return wrongAnswer;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default playGame;
