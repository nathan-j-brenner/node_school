const replify = require('replify');
const replpad = require('replpad');
const server = require('http').createServer((req, res)=>{
    res.end('hello');
});

replify({ name: "hello-server", start: replpad}, server);
server.listen(1234, ()=> console.log("listening"));