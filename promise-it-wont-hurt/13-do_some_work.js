'use strict';

const HTTP = require('q-io/http');

HTTP.read('http://localhost:7000')
	.then((userId)=>{
		return HTTP.read(`http://localhost:7001/${userId}`);
	})
	.then((userObj)=>{
			console.log(JSON.parse(userObj));
	})
	.then(null, console.error)
	.done();