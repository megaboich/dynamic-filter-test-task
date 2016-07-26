webpackJsonp([1],{

/***/ 0:
/*!************************!*\
  !*** ./tests/tests.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	var req = __webpack_require__(/*! ../app/ */ 572);
	req.keys().forEach(req);

/***/ },

/***/ 568:
/*!*****************************!*\
  !*** ./app/shared/utils.ts ***!
  \*****************************/
/***/ function(module, exports) {

	"use strict";
	function isNullOrEmptyString(value) {
	    return !!(!value || value === '');
	}
	exports.isNullOrEmptyString = isNullOrEmptyString;
	function isNotEmptyString(value) {
	    return !!(value && value !== '');
	}
	exports.isNotEmptyString = isNotEmptyString;
	function isNotEmptyArray(value) {
	    return (value && value.length > 0);
	}
	exports.isNotEmptyArray = isNotEmptyArray;
	function isNullOrEmptyArray(value) {
	    return (!value || value.length == 0);
	}
	exports.isNullOrEmptyArray = isNullOrEmptyArray;
	function assertNoUndefined(value) {
	    if (!value)
	        return;
	    value.forEach(function (x) {
	        if (x === undefined) {
	            throw "Value is undefined";
	        }
	    });
	}
	exports.assertNoUndefined = assertNoUndefined;
	function isNullOrEmptyObject(map) {
	    if (!map) {
	        return true;
	    }
	    for (var key in map) {
	        if (map.hasOwnProperty(key)) {
	            return false;
	        }
	    }
	    return true;
	}
	exports.isNullOrEmptyObject = isNullOrEmptyObject;


/***/ },

/***/ 572:
/*!***********************!*\
  !*** ./app spec\.ts$ ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./shared/utils.spec.ts": 573
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 572;


/***/ },

/***/ 573:
/*!**********************************!*\
  !*** ./app/shared/utils.spec.ts ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils = __webpack_require__(/*! ./utils */ 568);
	describe('Test Utils', function () {
	    it('IsNullOrEmptyString', function () {
	        var testCases = [
	            [null, true],
	            [undefined, true],
	            ['', true],
	            ['0', false],
	            ['false', false],
	            ['1', false],
	            ['true', false],
	        ];
	        testCases.forEach(function (testCase) {
	            var testValue = testCase[0];
	            var expectedResult = testCase[1];
	            expect(utils.isNullOrEmptyString(testValue)).toEqual(expectedResult);
	        });
	    });
	    it('IsNotEmptyString', function () {
	        var testCases = [
	            [null, false],
	            [undefined, false],
	            ['', false],
	            ['0', true],
	            ['false', true],
	            ['1', true],
	            ['true', true],
	        ];
	        testCases.forEach(function (testCase) {
	            var testValue = testCase[0];
	            var expectedResult = testCase[1];
	            expect(utils.isNotEmptyString(testValue)).toEqual(expectedResult);
	        });
	    });
	});


/***/ }

});
//# sourceMappingURL=tests.js.map