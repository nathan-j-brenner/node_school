const express = require('express');
const app = express();
const fs = require('fs');

app.get('/books', (req, res)=>{
	var file = process.argv[3];
	fs.readFile(file, (err, data)=>{
		if(err) throw err;
		var books = JSON.parse(data);
		res.json(books);
	});
});

app.listen(process.argv[2]);