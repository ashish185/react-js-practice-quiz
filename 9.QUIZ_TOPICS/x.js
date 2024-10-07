const obj1 = {
    name: 'Ash',
    arrowFunction: () => {
        console.log('arrowFunction', this === window);
    },
    regularFunction: function () {
        console.log('regularFunction', this === window);
    },
    printName: function () {
        console.log('Name', this.name);
        const innerRegular = function () {
            console.log('InnerRegular', this.name, this === window);
        }
        const innerArrow = () => {
            console.log('innerArrow', this.name, this === window);
        }
        innerRegular();
        innerArrow();
    }
};
obj1.arrowFunction();
obj1.regularFunction();
obj1.printName();


//hoisting
var a=20;
console.log('pos3', a);
function getVariable(){
    console.log('pos1', a);
    var a = 30;
    a++;
    console.log('pos2', a);
}

