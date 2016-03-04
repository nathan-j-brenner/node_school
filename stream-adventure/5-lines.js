const through = require('through');
const split = require('split');
var count = 0;
var stream = through(function(buffer){
      if(count%2===1){
        this.queue(buffer.toString().toUpperCase() + '\n');
      }else {
				this.queue(buffer.toString().toLowerCase()
      );
      this.queue('\n');
    }
		count++
  });

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
