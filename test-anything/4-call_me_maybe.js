const repeatCallback = require(process.argv[2]);
const test = require('tape');

test('repeat', (t)=>{
    t.plan(4);
    repeatCallback(4, ()=>{
        t.pass("callback passed");
    });
})
