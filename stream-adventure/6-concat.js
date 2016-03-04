const concat = require('concat-stream');
var reverse = concat(buffer=>process.stdout.write(buffer.toString().split('').reverse().join('')));

process.stdin.pipe(reverse)
