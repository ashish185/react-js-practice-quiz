const addFun = async (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 !== undefined && num2 !== undefined) {
            setTimeout(() => {
                resolve(num1 + num2);
            }, 1000);
        } else {
            reject('Any value is undefined')
        }
    })
}

addFun(1, 2).then(res=> console.log(res)); //3

(async ()=> {
    const res= await addFun(5, 6);
    console.log(res);
})();

