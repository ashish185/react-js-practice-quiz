
import { questions } from './2.questionClasses.js';
function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description);
    question.printQuestion();
  })
}

printQuiz(questions)