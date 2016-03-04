const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const file = process.argv[3];
var server = http.createServer((req, res)=>{
  res.writeHead(200, {'content-type': 'text/plain' })
  fs.createReadStream(file).pipe(res);
  //req = fetch properties, node stream
  //res = sending data to the client (headers, body), node stream
})
server.listen(port, ()=>{
  console.log("listening on port " + port);
});
