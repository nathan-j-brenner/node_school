var fs = require('fs');
var path = require('path');\

// var dir = process.argv[2];
// var ext = process.argv[3];
//
// fs.readdir(dir, (err, files)=>{
//   if(err) throw err;
//   var matches = files.filter((file)=>{
//     var extensionIndex = file.indexOf('.');
//     var fileExtension = file.slice(extensionIndex + 1);
//     if(extensionIndex != -1){
//       return fileExtension == ext;
//     }
//   });
//   for (var i = 0; i < matches.length; i++) {
//     console.log(matches[i]);
//   }
// });

// official solution
fs.readdir(process.argv[2], (err, files)=>{
  files.forEach((file)=>{
    if(path.extname(file) === '.' + process.argv[3]){
      console.log(file);
    }
  });
});
