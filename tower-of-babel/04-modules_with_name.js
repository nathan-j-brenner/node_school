var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI, sqrt, square} from './Math';
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));

// Matches solution, but doesn't pass.  Error: invalid arguments