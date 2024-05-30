//pollyphil 
//args can take variable number of arguments

let employee2= {
    fName: 'Mukul',
    getFullName: function(fromArgs) {
        console.log(this.fName+ fromArgs);
    }
}
let obj2= {
    fName: 'Vipin',
}

Function.prototype.myBind = function (...args){
    //args m 2 object aayenge, [obj2, 'Bansal1'],
    //pehla argument obj hoga
    const secondArg = args.slice(1); // Bansal1
    const thisObj = this; //******Caution: agr inner function k andar this de dega na to closure nhi bnega. Hence this becomes undefined
    return function (funcArgs) {
        const arr = [...secondArg, funcArgs]; //**********funct args last m rehna chiye */
        //this.apply(args[0],arr); ye tum try kroge na error dega because this lost ho gya hoga
        thisObj.apply(args[0], arr);
    }
}
/* 
const f2=employee2.getFullName.myBind(obj2,['Bansal']); //VipinBansal
f2();
*/
/* //or
let f2=employee2.getFullName.myBind(obj2); //VipinBansal
f2('Bansal'); */

let f2=employee2.getFullName.myBind(obj2,"Bansal1");  
f2();//VipinBansal1
f2=employee2.getFullName.myBind(obj2,["Bansal2"]); //VipinBansal2
f2();
f3=employee2.getFullName.myBind(obj2); //VipinBansal3
f3("Bansal3");
f3=employee2.getFullName.myBind(obj2,["Bansal4"]); //VipinBansal4
f3("Bansal5");