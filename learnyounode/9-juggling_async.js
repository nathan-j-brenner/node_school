var http = require('http');
var urls = process.argv.slice(2);
var pages = [];
var waiting = 0;

urls.map((url, index)=>{
  http.get(url, (res)=>{
    waiting++;
    var alldata = "";
    res.setEncoding('utf8');
    res.on('data', (data)=>{alldata+=data});
    res.on('end', ()=>{
      pages[index] = alldata;
      waiting--;
      if(!waiting){
        pages.map((page)=>{console.log(page)});
      }
    });
  });
});
