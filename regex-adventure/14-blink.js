var marked = require('marked');
module.exports = (str)=>{
	var md = marked(str);
	return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
}