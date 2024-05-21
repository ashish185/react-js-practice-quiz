/* Theory:
Promise.all: It takes promise array once they are resolved(not rejected), 
it will return the output in an array

1.//Agar sare promise resolve ho gye tbhi success result aayega
2.If one rejects then all rejects
*/

//Ref: Roadside coder: https://www.youtube.com/watch?v=abbdJ4Yfm54&t=2580s

//https://shivamethical.medium.com/polyfill-of-promise-all-7610a05c8d9a

Promise.all([Promise.resolve('1'), Promise.resolve('2')]).then(res => console.log(res));// [1,2]

Promise.all([Promise.resolve('1'), Promise.reject('2ndReject')])
.then(res=> console.log(res))
.catch(err=> console.log("in catch", err)); //In Catch 2nd reject


function myPromiseAll(promisesArr) {
	let response = [];
	return new Promise((resolve, reject) => {
		promisesArr.forEach((prms, index) => prms
			.then(res => {
				response.push(res)
				//*** Agar sare promise resolve ho gye tbhi success result aayega
				if (index === promisesArr.length - 1) {
					resolve(response);
				}
			})
			.catch((err) => reject(err)));
	})
}

myPromiseAll([Promise.resolve('1'), Promise.resolve('2')]).then(res => console.log(res));// [1,2]
myPromiseAll([Promise.resolve('1'), Promise.reject('2ndReject')])
.then(res=> console.log(res))
.catch(err=> console.log("in catch", err)); //In Catch 2nd reject
