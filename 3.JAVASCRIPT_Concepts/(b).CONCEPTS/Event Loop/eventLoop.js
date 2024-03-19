/* A great animation for event loop3dif
https://towardsdev.com/event-loop-in-javascript-672c07618dc9
*/

function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
//task('Download a file.');
console.log('Done!');
/* Output */
/* 
Start script...
Download a file.
Done!
exited with code=0 in 12.268 seconds
 */
//The script just hangs for a few seconds (depending on how fast the computer is) and issues the following output:

console.log("/* ********************************************Callbacks to the rescue*******************************/");

// To prevent it we put the time consuming function in CallBack
console.log('Check Start script ...');

setTimeout(() => {
    console.log('Shanti rakhiye');
    task('Check Download a file.1');
}, 1000); //Thodi der m aayegar resoinse

console.log('Check Done!');
/* 
Check Start script ...
Check Done!
Shanti rakhiye
Check Download a file.1
 */

// The setTimeout(), AJAX calls, and DOM events are parts of Web APIs of the web browser.
//dir(window) krke dekho wnha dikh jayega
/* THEORY HOW THE THINGS WORKS  */
//https://www.javascripttutorial.net/javascript-event-loop/
/*
Event loop: Event loop is not the part of Javascript Engine. It's present Hosted environment (Browser in case of JS)
The event loop is a constantly running process that monitors both the callback queue and the call stack.
the event loop waits until it is empty and places the next function from the callback queue to the call stack.
*/
/*
General sequence Agar koi Async function aata h For Ex setTimout(()=> task(),5000), 5s k liye wait (part of Web Api)
1) Web API creates a timer that will expire in 5 second.
2) After 5s it puts the task into CallBack queue
3) Event Loop keeps checking to put the Function into call stack until it;s empty
4) When stack is finish it puts the Function into call stack.
*/

console.log('Hi!');

setTimeout(() => {
    console.log('Execute immediately.');
}, 0);

console.log('Bye!');
/* Hi!
Bye!
Execute immediately */

/* 
Steps wise:
1. Since js compiled through top to bottom,

Push operation
->callBackStack: [console.log(hi]
  ->Print HI
Pop Operation
->callBackStack: []

2.Push operation
->callBackStack: [setTimeout]
  ->Web Api handle the setTimeOutCallBackFunction, runs the timer in web API
      ->... Timer running, Will continue at 2(a)

Pop operation
setTimeout return some id
->callBackStack: []

        -> Once the timer is completed, it pushed the callback function in event loop
->eventLoop:
    microTaskQueue:
    


  





*/

















function handleButtonClicked () {
    navigator.geolocation.getCurrentPosition(
        posData => {
          setTimeout(() => {
            console.log(posData);
          }, 2000);
        },
        error => {
          console.log(error);
        }
      );
      setTimeout(() => {
        console.log('Timer done!');
      }, 0); //*** It is not the guranteed time, 
      //it is the minimus time that's why ouput Getting position first than Timer done
      console.log('Getting position...');
}
console.log("CALLING NAVIGATOR API............");
handleButtonClicked(); //Navigator is window object will geti output in browser