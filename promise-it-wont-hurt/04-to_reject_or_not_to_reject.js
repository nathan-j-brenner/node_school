'use strict';
var promise = new Promise((resolve, reject)=>{
	resolve('I FIRED');
	reject(new Error('I DID NOT FIRE'));
});

function onReject(error){
	console.log(error.messge);
}

promise.then(console.log, onReject);