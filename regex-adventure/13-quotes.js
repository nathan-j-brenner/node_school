module.exports = (str) =>{
	return str.match(/"[^"]*"/g)
}

// returns an array of quoted strings contained in the input