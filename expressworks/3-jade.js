// solution for jade
// const express = require('express');
// const app = express();

// app.set('views', process.argv[3]);
// app.set('view engine', 'jade');

// app.get('/home', (req, res)=>{
// 	res.render(process.argv[3] || 'index' , {date: new Date().toDateString()})
// });

// app.listen(process.argv[2], ()=>{
// 	console.log(`app listening on port 3000`);
// });

// solution to debug with pug
const express = require('express');
const app = express();
const path = require('path');

app.set('views', process.argv[3] || path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/home', (req, res)=>{
	res.render(process.argv[3] || 'indexPug' , {date: new Date().toDateString()})
});

app.listen(process.argv[2] || 3000, ()=>{
	console.log(`app listening on port 3000`);
});

// jade has been renamed to pug
// const express = require('express');
// const app = express();

// app.set('views', process.argv[3]);
// app.set('view engine', 'pug');

// app.get('/home', (req, res)=>{
// 	res.render(process.argv[3], {date: new Date().toDateString()})
// });

// app.listen(process.argv[2]);