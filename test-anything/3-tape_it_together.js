var fancify = require(process.argv[2]);
var test = require('tape');

test('fancify', function (t){
    t.equal(fancify('str'), '~*~str~*~', 'returns a string wrapped in ~*~')
    t.equal(fancify('str', true), '~*~STR~*~', 'returns the string in all caps')
    t.equal(fancify('str', false, '!'), '~!~str~!~', 'returns different middle character')
    t.end()
})
