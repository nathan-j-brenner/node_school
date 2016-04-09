import * as express from 'express'
import * as path from 'path'
const app = express();
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);
