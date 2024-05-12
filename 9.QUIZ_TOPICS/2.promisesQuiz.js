var p = new Promise(function (resolve) {
  // resolve("OK");
  return "OK";
});
console.log('p', p);

var p2 = p.then(function(data) {
  return data;
});
console.log('p2', p2);

var p3 = p2.then(function(data) {
  console.log('Data in p3', data);
  return data + " Bye";
});
console.log('p3', p3);

const promisesMcq = [
  {
    question: `
    var p = new Promise(function (resolve) {
      // resolve("OK");
      return "OK";
    });
    console.log('p', p);
    
    var p2 = p.then(function(data) {
      return data;
    });
    console.log('p2', p2);
    
    var p3 = p2.then(function(data) {
      console.log('Data in p3', data);
      return data + " Bye";
    });
    console.log('p3', p3);
    `,
    id: 1,
    correctAnswer: 'Promise in pending always',
    explanation: 'Since promise is not resolved it always in pending stage'
  },
  {
    question: `
    var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve("OK");
      }, 2000);
    });
  
    p.then().then(function(data) {
      console.log(data);
    });
    `,
    id: 2,
    correctAnswer: "OK",
    explanation: 'then chaining'
  },
  {
    question: `
    var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve("OK");
      }, 2000);
    }).
    then();
10    var p2 = p.then(function(data) {
      return data + " Good";
    })
    `,
    id: 3,
    correctAnswer: "OK",
    explanation: 'then chaining'
  },
  {
    question: `
    var p = new Promise(function(resolve, reject) {
      throw "Sorry";
     }).
    then((data) => console.log(data), (data) => data);
    `,
    id: 4,
    correctAnswer: "State: fulfilled, value: Sorry",
    explanation: 'then chaining'
  },
  {
    question: `
    var p = new Promise(function(resolve, reject) {
      resolve("OK");
    });
  
    var p2 = p.then(function(data) {
      return data;
    });
  
    var p3 = p.then(function(data) {
      return data;
    });
    console.log(p2,p2);
    console.log(p3,p3);
    console.log(p2 === p3);
    `,
    id: 5,
    correctAnswer: 'false',
    explanation: 'p2 p3 are promises not values'
  },
  {
    question: `
    var p = new Promise(function(resolve, reject) {
      resolve("OK");
    });
  
    var p2 = p.then(function(data) {
      return new Promise(function(resolve, reject) {
          resolve('data is', data);
      });
     });
  
    p2.then(function(data) {
      console.log(data);
    });    
    `,
    id: 4,
    correctAnswer: "",
    explanation: ''
  },
  {
    question: `
    var p = new Promise(function(resolve, reject) {
      resolve("OK");
    });
  
  var p2 = p.then(function(data) {
      return new Promise(function(resolve, reject) {
          resolve(data);
      });
  });
  
  p2.then(function(data) {
      console.log(data);
  });
    `,
    id: 5,
    correctAnswer: "",
    explanation: ''
  },
];
export { promisesMcq };
