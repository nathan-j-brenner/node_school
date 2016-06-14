'use strict';
// this works, but it wont pass the tests
// const attachTitle = name => `DR. ${name}`;

function attachTitle(name){
	return `DR. ${name}`
}
Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);