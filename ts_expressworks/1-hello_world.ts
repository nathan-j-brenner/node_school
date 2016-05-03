/// <reference path="typings/tsd.d.ts" />

import * as express from "express";

const app = express();

app.get('/home', (req, res)=>{ 
	res.end('Hello World!')
});
app.listen(process.argv[2]);