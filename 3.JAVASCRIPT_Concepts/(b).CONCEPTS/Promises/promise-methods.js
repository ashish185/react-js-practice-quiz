const getPosition = () => new Promise((resolve, reject) => {
  resolve("Rohtak");
});

const addDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delay completed");
    }, 2000);
  });
};

/* 
Method1: Promise.all();
The Promise.all() static method takes an array of promises as input and returns a single Promise.
Ye single promise return krega if all promise succeed if any of one them rejects, it rejects with first reject
*/
const callingMethodAll = () => {
  //If any of the promise is rejected other promise will not execute
  Promise.all([addDelay(), getPosition()]).then(data => console.log(data));
};
callingMethodAll(); //[ 'Delay completed', 'Rohtak' ]

/* 
Method2: The Promise.race() static method takes an iterable of promises as input and returns 
a single Promise. This returned promise settles with the eventual state of the first promise that settles.
*/
const callingPromiseDotRace = () => {
  //whichever the promise is settled fast get executed
  Promise.race([addDelay(), getPosition()]).then(data => console.log(data));
  //Suppose addDealy faster hota but reject hota, to kya getPosition chlta ?
  //Ans: Yes, This is imp in case of HTTP request,but ouput m fast ki error aati agle ki
  //output nhi aati
}
//callingPromiseDotRace();

//I want something output of all the promise & should be executed even
// if any of them fail.
const callingPromiseDotAllSettle = () => {
  Promise.allSettled([addDelay(), getPosition()]).then(data => console.log(data));
  //it gives the detailed summary of all the promises
}
callingPromiseDotAllSettle(); //It is new may not work with this node version

/*
Summary:
Promise.all : 1. Sare resolve then response aayega.
              2. Ek bhi reject than reject ho jayega.
Promise.race: agr pehla reject ho to dusra chlta h but output  nhi dikhti
Promise.allSettled: dono chlte h or output ek obj hota h jisme output hoti h
*/
