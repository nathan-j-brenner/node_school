'use strict';
// var Promise = require('es6-promise').Promise;
//the exercise suggests you use this es-6 shim, but it throws an error, and passes without it
var promise = new Promise((fulfill, reject)=>{
        setTimeout(()=>{ fulfill('FULFILLED!')}, 300);
    });
    
promise.then(console.log);