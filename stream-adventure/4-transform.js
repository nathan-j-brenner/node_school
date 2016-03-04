
// iteration 1
const through = require('through2');
const stream = through((buffer, _, next)=>{
    stream.push(buffer.toString().toUpperCase());
    next();
});
process.stdin.pipe(stream).pipe(process.stdout);

// iteration 2
// const through = require('through2');
// const stream = through(write);
// function write (buffer, encoding, next){
//   this.push(buffer.toString().toUpperCase());
//   next();
// }
// process.stdin.pipe(stream).pipe(process.stdout);

// iteration 3
// const through = require('through2');
// process.stdin
//   .pipe(through(function (buffer, _, next){
//     this.push(buffer.toString().toUpperCase());
//     next();
//   }))
//   .pipe(process.stdout);
