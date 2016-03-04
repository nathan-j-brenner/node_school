var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, (res)=>{
  res.pipe(bl((err, data)=>{
    if(err) return console.log(err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }))
})
