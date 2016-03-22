require('stackup');
const readFile = require('fs').readFile;
const domain = require('domain');
module.exports = traces;

function traces(jsonPath, cb){
    d = domain.create();
    
    d.on("error", cb);
    
    d.run(()=>{
        readFile(jsonPath, {encoding: "utf8"}, function(error, contents){
            cb(error, JSON.parse(contents))
        });
    });
}
