/**
 * The answer is written last of the file.
 */
const obj = {
  message: 'Hi',
  printMessage() {
    return this.message;
  }
};

//+ve use Case
const ans1 = obj.printMessage();

console.log('question1', ans1); //Hi

//Question 2
const { printMessage } = obj;
const obj2 = { message: 'Bye', printMessage };
const ans2 = obj2.printMessage();
console.log('question2', ans2); //Bye

//Question 3: In setTimeOut
const obj3 = {
  message3: 'Hi Obj3',
  printMessage3() {
    console.log(this.message3);
    return this.message3;
  }
};
const { printMessage3 } = obj3;

/* 
Use Case1:
Calling obj3 Function printMessage as Arrow function. 
*/
setTimeout(() => obj3.printMessage3(), 0); //Hi Obj3

/* 
Use Case2:
Calling obj3 Function printMessage as Regular function. 
*/
setTimeout(obj3.printMessage3, 0); //undefined

/* 
Use Case3:
Calling obj3 Function printMessage as Regular function. 
*/
setTimeout(printMessage3, 0); //undefined



