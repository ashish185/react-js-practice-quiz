/**
 * Open/Closed principles:  It states that software entities (classes, modules, functions, etc.) 
 * should be open for extension but closed for modification.
 */
// Problem: Print quiz is only responsible for printing the quiz, if we want to add switch case for range then this function should not modified.

function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description)
    switch (question.type) {
      case 'boolean': {
        console.log('1. True');
        console.log('2. False');
      }
        break
      case 'multipleChoice':
        question.options.forEach((option, index) => {
          console.log(`${index + 1}.${option}`)
        });
        break;
      case 'text':
        console.log('Answer:___________________');
        break;
    }
  });
}

const questions = [
  {
    type: 'boolean',
    description: 'This video is useful.'
  },
  {
    type: 'multipleChoice',
    description: 'What is your favorite language?',
    options: ['CSS', 'HTML', 'JS', 'Python']
  },
  {
    type: 'text',
    description: 'Describe your favorite JS feature',
  },
  {
    type: 'range',
    description: 'What is the speed limit in your city?'
  }
]

printQuiz(questions)