const promisesMcq = [
  {
    question: `
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });
    
    Promise.all([promise1, promise2, promise3]).then((values) => {
      console.log(values);
    });
    `,
    id: 1,
    correctAnswer: '[3, 42, "foo"]',
    explanation: ''
  },
  {
    question: `
    const p1 = Promise.resolve(3);
    const p2 = 1337;
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve("foo");
      }, 100);
    });
    Promise.all([p1, p2, p3]).then((values) => {
      console.log(values); // [3, 1337, "foo"]
    });
    `,
    id: 2,
    correctAnswer: '[3, 1337, "foo"]',
    explanation: ''
  },
  {
    question: `
    // All values are non-promises, so the returned promise gets fulfilled
    const p = Promise.all([1, 2, 3]);
    // The only input promise is already fulfilled,
    // so the returned promise gets fulfilled
    const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
    // One (and the only) input promise is rejected,
    // so the returned promise gets rejected
    const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);
    
    // Using setTimeout, we can execute code after the queue is empty
    setTimeout(() => {
      console.log(p);
      console.log(p2);
      console.log(p3);
    });
    
    
    `,
    id: 2,
    correctAnswer:`// Logs:
    // Promise { <state>: "fulfilled", <value>: Array[3] }
    // Promise { <state>: "fulfilled", <value>: Array[4] }
    // Promise { <state>: "rejected", <reason>: 555 }
    `,
    explanation: 'any one reject then promise reject '
  },
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
