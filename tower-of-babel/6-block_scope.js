'use strict';

var a = 5;

var b = process.argv[2];

if ( a === 5 ){
	let c = 4;
	console.log(c); // 4
	const b = 8; 
	console.log(b); // 8
}

console.log(a); // 5
console.log(b) // process.argv[2]
try {
	c = 1000;
} catch (e) {
	console.log(e);
}



