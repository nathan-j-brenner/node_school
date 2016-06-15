module.exports = (str)=>{
	var m = /x=(\d+)/.exec(str)
	return m ? m[1] : null
}