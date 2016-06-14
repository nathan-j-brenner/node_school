'use strict';

// var firstPromise = first();

// var secondPromise = first().then((value)=>{
// 	return second(value);
// });
//secondPromise.then(console.log);

first().then(second).then(console.log);

