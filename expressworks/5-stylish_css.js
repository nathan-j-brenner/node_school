const express = require('express');
const app = express();
const stylus = require('stylus');

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])