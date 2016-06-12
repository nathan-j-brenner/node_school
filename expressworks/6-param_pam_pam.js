const express = require('express');
const app = express();
const crypto = require('crypto');

app.put('/message/:id', (req, res)=>{
	var id = req.params.id;
	var today = new Date().toDateString();
	var hash = crypto.createHash('sha1').update(today + id).digest('hex');
	res.send(hash);
});

app.listen(process.argv[2]);