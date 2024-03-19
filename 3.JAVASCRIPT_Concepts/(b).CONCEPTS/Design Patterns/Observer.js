/* Observer pattern is a design pattern where you define one to many relationship from one Object
konwn as the Subject to many Objects known as Obersvers
Observer function which watches the subject and wait for some signal or triggers from subject
before they run
*/
function Subject(){
    this.observers= []
}
Subject.prototype={
    subscribe: function( fn) {
        this.observers.push(fn)
    },
    unSubscribe: function (fnToRemove) {
        this.observers.filter(
            el => {
                if (el !== fnToRemove) {
                    return el;
                }
            }
        )
    },
    fire: function(){
        this.observers.forEach( fn => fn.call());
    }
}
const subj = new Subject();

function Observer1(){
    console.log("Observer 1");
}
function Observer2(){
    console.log("Observer 2");
}
subj.subscribe(Observer1);
subj.subscribe(Observer2); //Whosoever object is subscribing
subj.fire(); // will fire if this action happens
/* Observer 1
Observer 2 */