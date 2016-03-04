var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data)=>{
  if(err) throw err;
  console.log(data.split('\n').length-1);
});

//official solution
// var fs = require('fs');
// var file = process.argv[2];
// fs.readFile(file, 'utf8', (err, data)=>{
//   if(err) throw err;
//   var lines = data.split('\n').length-1;
//   console.log(lines);
// });
