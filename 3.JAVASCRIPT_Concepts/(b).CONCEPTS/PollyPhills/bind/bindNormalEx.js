
let employee2= {
    fName: 'Mukul',
    getFullName: function(fromArgs) {
        console.log(this.fName+ fromArgs);
    }
}
let obj2= {
    fName: 'Vipin',
}

let f2=employee2.getFullName.bind(obj2,"Bansal1");  
f2();//VipinBansal1
f2=employee2.getFullName.bind(obj2,["Bansal2"]); //VipinBansal2
f2();
f3=employee2.getFullName.bind(obj2); //VipinBansal3
f3("Bansal3");
f3=employee2.getFullName.bind(obj2,["Bansal4"]); //VipinBansal4
f3("Bansal5");



