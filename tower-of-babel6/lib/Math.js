"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var PI = exports.PI = 3.141592;

var _sqrt = function _sqrt(s, x, last) {
	return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
var sqrt = exports.sqrt = function sqrt(s) {
	return _sqrt(s, s / 2.0, 0.0);
};

var square = exports.square = function square(x) {
	return x * x;
};