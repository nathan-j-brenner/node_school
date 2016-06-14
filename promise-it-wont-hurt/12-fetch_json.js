var HTTP = require('q-io/http');


//also works
// HTTP.read('http://localhost:1337').then(JSON.parse).then(console.log);

HTTP.read('http://localhost:1337')
	.then((json)=>{
		console.log(JSON.parse(json));
	})
	.then(null, console.error)
	.done();