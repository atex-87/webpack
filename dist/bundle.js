var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = bilds;
function bilds(data) {
	var items = [];

	for (var i = 0; i < data.length; i++) {
		var item = document.createElement('div'),
		    span = document.createElement('span');
		item.className = 'item';
		span.innerText = data[i];
		item.appendChild(span);
		items[i] = item;
	}
	console.log(items);
	return items;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getData = function getData(array) {
	var isData = [];

	for (var i = 0; i < array.length; i++) {

		var ret = "";

		switch (_typeof(array[i])) {
			case 'number':
				if (array[i] % 3 === 0) {
					ret += 'Fizz';
				}
				if (array[i] % 5 === 0) {
					ret += 'Buzz';
				}
				if (ret === "") {
					ret = array[i];
				}
				break;
			case 'boolean':
				ret = array[i];
				break;
			case 'string':
				!array[i].length ? ret = "string is empty" : ret = array[i];
				break;
			case null:
				ret = "string is null";
				break;
			default:
				if (Array.isArray(array[i])) ret = 'string is array';else ret = "string is " + _typeof(array[i]);
		}

		isData[i] = ret;
	}
	return isData;
};
exports.getData = getData;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _parse = __webpack_require__(1);

var _output = __webpack_require__(0);

var _output2 = _interopRequireDefault(_output);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arr = [1, 2, 3, null, undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53,, function () {}, {}, [], 15, 55, 4];

function init(data) {
	var wr = document.createElement('div');
	wr.className = 'wr';
	var children = (0, _output2.default)((0, _parse.getData)(data));
	for (var j = 0; j < children.length; j++) {
		wr.appendChild(children[j]);
	}
	document.body.appendChild(wr);
}

init(arr);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map