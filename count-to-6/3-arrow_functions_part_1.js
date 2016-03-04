var inputs = process.argv.slice(2);
var result = inputs.map(x=>x[0]).reduce((y,z)=> y+z);
console.log(`[${inputs}] becomes "${result}"`);
// let x = an element of the inputs array
// let y =  previous value
// let z = current value
