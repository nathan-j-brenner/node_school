'use strict';
const _ = require('lodash');

module.exports = (col) => _.sortBy(col, (o)=>-o.quantity);;