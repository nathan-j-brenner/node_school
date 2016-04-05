const tar = require('tar');
const parser = tar.Parse();
const crypto = require('crypto');
const zlib = require('zlib');
const concat = require('concat-stream');

parser.on('entry', (e)=>{
  if (e.type !== 'File') return;
  var h = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(h).pipe(concat(function(hash){
    console.log(hash + " " + e.path);
  }));
});

var cipher = process.argv[2];
var pw = process.argv[3];
process.stdin
  .pipe(crypto.createDecipher(cipher, pw))
  .pipe(zlib.createGunzip())
  .pipe(parser);
