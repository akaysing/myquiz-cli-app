var readLineSync = require('readline-sync');

var userName = readLineSync.question('May i have your Name');
console.log('Hi ' + userName + '!' + ' Welcome to How well do you know Adarsh');

var score = 0;
function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer === answer) {
    console.log('Correct!...Well done.');
    score += 1;
  }
  else {
    console.log('Oops...Wrong!');
    score += -1;
  }
  console.log('Score is ' + score);
  console.log('**********');
}

var quizQuestions = [{
  question: 'Whats my age?',
  answer: '24'
},
{
  question: 'Whats my favorite superhero?',
  answer: 'batman'
},
{
  question: 'Whats my favorite football team?',
  answer: 'manchester united'
},
{
  question: 'Whats my favorite sportsperson?',
  answer: 'michael jordan'
},
{
  question: 'Whats my favorite food?',
  answer: 'ramen'
}
];

for (var i = 0; i < quizQuestions.length; i++) {
  var currentQuizQuestion = quizQuestions[i];
  play(currentQuizQuestion.question, currentQuizQuestion.answer);
}
console.log('End Game!');

