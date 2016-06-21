'use strict';
const _ = require('lodash');

module.exports = (col) => {
	return _.forEach(col, item => {
		if (item.population > 1) item.size = "big";
		else if (item.population > 0.5) item.size = "med";
		else item.size = "small";
	});
}