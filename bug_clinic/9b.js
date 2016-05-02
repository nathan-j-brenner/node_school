module.exports = scenario;

const replify = require('replify');
function scenario(cb){
    var createServer = require('http').createServer;
    var server = createServer();
    
    server.__message ="REPLs are neat";
    var repl = replify({name: "bug-clinic"}, server);
    server.listen(8080, ()=>{cb(server, repl)});
}