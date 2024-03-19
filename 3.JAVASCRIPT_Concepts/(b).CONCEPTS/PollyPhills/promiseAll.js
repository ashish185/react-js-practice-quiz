/* Theory:
Promise.all
1.Jab sare resolve ho jayenge tbhi hi response aayega
2.Agar ek bhi reject hua then it is rejected
*/

//https://shivamethical.medium.com/polyfill-of-promise-all-7610a05c8d9a

const prms1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Ist promise resolved');
	},
		5000
	)
});

const prms2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('2nd promise resolved');
	},
		500
	)
});

//TODO: response aage piche ho rha h
function myPromiseAll(params) {
	let result = [];
	let processCom = 0;
	return new Promise((resolve, reject) => {
		params.forEach((pms, indx) => {
			pms.then(res => {
				processCom++;
				result.push(res);
				if (processCom === params.length) {
					resolve(result);
				}
			}).catch((error) => {
				reject(error);
			})
		})
	})
}

//Promise.all([prms1, prms2]).then(res => console.log(res)); //[ 'Ist promise resolved', '2nd promise resolved' ]

myPromiseAll([prms1, prms2]).then(res => console.log(res));