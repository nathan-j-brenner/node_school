const express = require('express');
const app = express();

app.get('/search', (req, res)=>{
	var data = req.query;
	res.send(data);
})

app.listen(process.argv[2]);