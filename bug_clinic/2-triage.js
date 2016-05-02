const fs = require('fs');
const peach = (obj)=>{
    console.trace('traced');
    console.log(obj);
}
const bowser = (callback)=>
    fs.readFile(process.argv[2], {encoding: 'utf8'}, callback);
    
const koopa = (error, file)=>{
    if (error) return console.error('error occured');
    peach(JSON.parse(file));
};

bowser(koopa);