// 'use strict';

// let promise = new Promise((res, rej)=>{
// 	if (false){
// 		res('Promise Resolved');
// 	} else {
// 		rej( new Error('Error: Rejected') );
// 	}
// });

// function onReject(error){
// 	console.log(error.message);
// }

// promise.then(console.log).catch(onReject);

// let resPromise = Promise.resolve('resPromise: Resolved');

// let rejPromise = Promise.reject(new Error('rejected Promise'));

'use strict';

var message;
var promise;

function randomBytes(n) {
	return (Math.random() * Math.pow(256, n) | 0).toString(16);
}

message = `A fatal exception ${randomBytes(1)} has occurred at ${randomBytes(2)} : ${randomBytes(4)}. Your system\nwill be terminated in 3 seconds.`;

promise = Promise.reject(new Error(message));

promise.catch((err)=>{
	var i = 10;

	process.stderr.write(err.message);

	setTimeout(function boom() {
	process.stderr.write(`\rwill be terminated in ${(--i)} seconds.`);
	if (!i) {
		process.stderr.write('\n..... . . . boom . . . .....\n');
	} else {
		setTimeout(boom, 1000);
	}
	}, 1000);
});



