'use strict';
const _ = require('lodash');

module.exports = (list) => {
	return {
		warm: _.some(list, 19),
		hot: _.every(list, 19)
	}
}

// warm: some, at least 1 day where temp > 19
// hot: every, temp is greater than 19 every day