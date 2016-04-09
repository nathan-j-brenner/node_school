const express = require('express');
const app = express();
app.use(express.static(process.argv[3] || path.join(_dirname, 'public')));
app.listen(process.argv[2]);
