'use strict';

const _ = require('lodash');

const worker = item => _.filter(item, {"active": true});

module.exports = worker;