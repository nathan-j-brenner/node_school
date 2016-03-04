const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];
// function zeroFill(i){
//   return (i<10?'0':'') + i;
// }
// function now(){
//   var d = new Date()
//   return d.getFullYear() + '-' + zeroFill(d.getMonth() + 1) + "-" + zeroFill(d.getDate()) + " " + zeroFill(d.getHours()) + ":" + zeroFill(d.getMinutes());
// }
const server = net.createServer((socket)=>{
  //socket.end(now() + '\n');
  // hhhh-mm-dd  hh:mm
  socket.end(strftime('%F %H:%M') + '\n');
})

server.listen(port);
