"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
	function Character(x, y) {
		_classCallCheck(this, Character);

		this.x = x, this.y = y, this.health_ = 100;
	}

	_createClass(Character, [{
		key: "damage",
		value: function damage() {
			this.health_ = this.health_ - 10;
		}
	}, {
		key: "getHealth",
		value: function getHealth() {
			return this.health_;
		}
	}, {
		key: "toString",
		value: function toString() {
			return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
		}
	}]);

	return Character;
}();

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());