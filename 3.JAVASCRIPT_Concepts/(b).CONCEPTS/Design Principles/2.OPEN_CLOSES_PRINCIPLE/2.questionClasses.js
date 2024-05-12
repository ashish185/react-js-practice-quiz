class BooleanQuestions {
  constructor(type, description) {
    this.type = type;
    this.description = description
  }

  printQuestion(){
    console.log('1.True 2.False');
  }
}

class MultipleChoiceQuestions {
  constructor(type, description, options) {
    this.type = type;
    this.description = description;
    this.options = options;
  }

  printQuestion() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}.${option}`)
    })
  }
}

class TextQuestions {
  constructor(type, description) {
    this.type = type;
    this.description = description
  }

  printQuestion(){
    console.log('Answer:___________________');
  }
}

class RangeQuestions {
  constructor(type, description, max) {
    this.type = type;
    this.description = description;
    this.max = max;
  }

  printQuestion() {
    console.log(`Max is ${this.max}`);
  }
}

export const questions = [
  new BooleanQuestions('boolean', 'This video is useful.'),
  new MultipleChoiceQuestions('multipleChoice', 'What is your favorite language?', ['CSS', 'HTML', 'JS', 'Python']),
  new TextQuestions('text', 'Describe your favorite JS feature'),
  new RangeQuestions('range', 'What is the speed limit in your city?',120),
]