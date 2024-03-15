const question = {
  0: {
    message: 'Hi',
    printMessage() {
      return this.message;
    }
  }
}


export const scopeQuestions = [
  {
    question: `
    {
      message: 'Hi',
      printMessage() {
        return this.message;
      }
    }
    `,
    id: 0,
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
    explanation:'This is dummy explanation'
  },
  // Add more questions here
];