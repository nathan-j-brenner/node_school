module.exports = (str) => {
	return /^(0x[A-Fa-f\d]{2}\s+){8}$/.test(str)
}