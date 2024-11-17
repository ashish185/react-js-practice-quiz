const obj1 = {
    name: 'Ash',
    printNameRegular: function () {
        console.log('Name', this.name); 
        const innerRegular = function () {
            console.log('InnerRegular', this === window);
        }
        const innerArrow = () => {
            console.log('innerArrow', this.name, this === window);
        }
        innerRegular();
        innerArrow();
    },
};

obj1.printNameRegular();