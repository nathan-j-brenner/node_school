'use strict';

var json = process.argv[2];

function parsePromised(obj){
	return new Promise((res, rej)=>{
		try {
			res(JSON.parse(obj));
		} catch (e) {
			rej(e);
		}
	});
};
parsePromised(json).then(null, console.log);