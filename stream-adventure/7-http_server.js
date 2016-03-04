const http = require('http');
const through = require('through2');

function write(buf, _, next){
  this.push(buf.toString().toUpperCase());
  next();
}
function end(done){
  done();
}
const server = http.createServer((req, res) => {
  if (req.method === "POST"){
    req.pipe(through(write,end)).pipe(res);
  }
});
server.listen(process.argv[2]);

// iteration 2
// const http = require('http');
// const through = require('through2');
// var stream = through((buf, _, next)=>{
//   stream.push(buf.toString().toUpperCase());
//   next();
// })
// const server = http.createServer((req, res) => {
//   if (req.method === "POST"){
//     req.pipe(stream).pipe(res);
//   }
// });
// server.listen(process.argv[2]);
