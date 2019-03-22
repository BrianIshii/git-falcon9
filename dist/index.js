(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Falcon9Terminal.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Engines.jsx":
/*!*************************!*\
  !*** ./src/Engines.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MerlinEngineRight = exports.MerlinEngineRightMiddle = exports.MerlinEngineLeftMiddle = exports.MerlinEngineLeft = exports.MerlinEngine = exports.Octaweb = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 5px;\n  width: 23px;\n  bottom: 60px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #3a3a3b; \n'], ['\n  position: absolute;\n  height: 5px;\n  width: 23px;\n  bottom: 60px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #3a3a3b; \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  bottom: 52px;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  background-color: #787879;\n  border-color: #3a3a3b;\n  border-width: 1px;\n  border-top-width: 0px;\n  border-style: solid;\n'], ['\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  bottom: 52px;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  background-color: #787879;\n  border-color: #3a3a3b;\n  border-width: 1px;\n  border-top-width: 0px;\n  border-style: solid;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  left: 15px;\n'], ['\n  left: 15px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  left: 11px;\n'], ['\n  left: 11px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  left: 4px;\n'], ['\n  left: 4px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  left: 0px;\n'], ['\n  left: 0px;\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Octaweb = exports.Octaweb = _styledComponents2.default.i(_templateObject);

var MerlinEngine = exports.MerlinEngine = _styledComponents2.default.i(_templateObject2);

var MerlinEngineLeft = exports.MerlinEngineLeft = MerlinEngine.extend(_templateObject3);

var MerlinEngineLeftMiddle = exports.MerlinEngineLeftMiddle = MerlinEngine.extend(_templateObject4);

var MerlinEngineRightMiddle = exports.MerlinEngineRightMiddle = MerlinEngine.extend(_templateObject5);

var MerlinEngineRight = exports.MerlinEngineRight = MerlinEngine.extend(_templateObject6);

/***/ }),

/***/ "./src/Exhaust.jsx":
/*!*************************!*\
  !*** ./src/Exhaust.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Smoke = exports.smokeUp = undefined;

var _templateObject = _taggedTemplateLiteral(['\n0%{\n  height: 0px;\n  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);\n}\n100%{\n  height: 100vh;\n  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);\n}\n'], ['\n0%{\n  height: 0px;\n  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);\n}\n100%{\n  height: 100vh;\n  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nposition: absolute;\ndisplay: ', ';\nbackground: black;\nleft: calc(90% - 35px);\nwidth: 0px;\nbottom: calc(0%);\ni {\n  position: absolute;\n  display: ', ';\n  background: black;\n  width: 0px;\n  bottom: calc(0%);\n  display: ', ';\n  ', '\n}\ni:nth-child(1) {\n}\ni:nth-child(2) {\n  display: ', ';\n  left: -22px;\n}\ni:nth-child(3) {\n  display: ', ';\n  left: 22px;\n}\n'], ['\nposition: absolute;\ndisplay: ', ';\nbackground: black;\nleft: calc(90% - 35px);\nwidth: 0px;\nbottom: calc(0%);\ni {\n  position: absolute;\n  display: ', ';\n  background: black;\n  width: 0px;\n  bottom: calc(0%);\n  display: ', ';\n  ', '\n}\ni:nth-child(1) {\n}\ni:nth-child(2) {\n  display: ', ';\n  left: -22px;\n}\ni:nth-child(3) {\n  display: ', ';\n  left: 22px;\n}\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var smokeUp = exports.smokeUp = (0, _styledComponents.keyframes)(_templateObject);

var Smoke = exports.Smoke = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH see Rocket
    'animation-name: ' + smokeUp + ';' + 'animation-duration: 2s;' + 'animation-delay: 1.5s;' :
    // on LAND
    ';';
  };
}, function (props) {
  return props.heavy ? 'block' : 'none';
}, function (props) {
  return props.heavy ? 'block' : 'none';
});

var Exhaust = function Exhaust(_ref) {
  var display = _ref.display,
      animationType = _ref.animationType,
      heavy = _ref.heavy;
  return _react2.default.createElement(
    Smoke,
    { id: 'smoke', display: display, animationType: animationType, heavy: heavy },
    _react2.default.createElement('i', null),
    _react2.default.createElement('i', null),
    _react2.default.createElement('i', null)
  );
};

exports.default = Exhaust;

/***/ }),

/***/ "./src/Falcon9.jsx":
/*!*************************!*\
  !*** ./src/Falcon9.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RocketCap = exports.RocketSecondStage = exports.RocketFairing = exports.SpaceXLogo = exports.USFlag = exports.FirstStageSpan = exports.FirstStageDiv = exports.Falcon9 = exports.Rocket = exports.launch = exports.land = exports.wiggle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    left: calc(90% - 47px); }\n  50% {\n    left: calc(90% - 45px); }\n  100% {\n    left: calc(90% - 47px); }\n'], ['\n  0% {\n    left: calc(90% - 47px); }\n  50% {\n    left: calc(90% - 45px); }\n  100% {\n    left: calc(90% - 47px); }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    top: -260px; }\n  50% {\n      top: calc(100% - 300px); }\n  67% {\n    top: calc(100% - 285px); }\n  100% {\n    top: calc(100% - 285px); }\n'], ['\n  0% {\n    top: -260px; }\n  50% {\n      top: calc(100% - 300px); }\n  67% {\n    top: calc(100% - 285px); }\n  100% {\n    top: calc(100% - 285px); }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0% {\n    top: calc(100% - 280px); }\n  33% {\n    top: calc(100% - 280px); }\n  100% {\n    top: calc(0% - 300px); }\n'], ['\n  0% {\n    top: calc(100% - 280px); }\n  33% {\n    top: calc(100% - 280px); }\n  100% {\n    top: calc(0% - 300px); }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: ', ';\n  position: absolute;\n  height: 320px;\n  left: calc(90% - 50px);\n  ', '\n'], ['\n  display: ', ';\n  position: absolute;\n  height: 320px;\n  left: calc(90% - 50px);\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  position: absolute;\n  height: 320px;\n  top: calc(0%-300px);\n  ', '\n'], ['\n  ', '\n  position: absolute;\n  height: 320px;\n  top: calc(0%-300px);\n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: block;\n  position: absolute;\n  top: 100px;\n  width: 22px;\n  height: 155px;\n  background-color: #d1d2d6;\n  border-top: 1px solid #a7a9b1;\n'], ['\n  display: block;\n  position: absolute;\n  top: 100px;\n  width: 22px;\n  height: 155px;\n  background-color: #d1d2d6;\n  border-top: 1px solid #a7a9b1;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 115px;\n  height: 5px;\n  width: 8px;\n  left: 7px;\n'], ['\n  position: absolute;\n  top: 115px;\n  height: 5px;\n  width: 8px;\n  left: 7px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 130px;\n  height: 85px;\n  width: 22px;\n'], ['\n  position: absolute;\n  top: 130px;\n  height: 85px;\n  width: 22px;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  display: ', ';\n  //display: ', ';\n  position: absolute;\n  top: -20px;\n  height: 60px;\n  width: 30px;\n  left: -4px;\n  border-top-left-radius: 200%;\n  border-top-right-radius: 200%;\n  border-bottom-left-radius: 70%;\n  border-bottom-right-radius: 70%;\n  background-color: #d1d2d6;\n  box-sizing: border-box;\n\n  :after{\n    content: \'\';\n    position: absolute;\n    display: ', ';\n    left: 16px;\n    width: 10px;\n    top: 3px;\n    height: 27px;\n    border-top-right-radius: 100%;\n    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); \n  }\n'], ['\n  display: ', ';\n  //display: ', ';\n  position: absolute;\n  top: -20px;\n  height: 60px;\n  width: 30px;\n  left: -4px;\n  border-top-left-radius: 200%;\n  border-top-right-radius: 200%;\n  border-bottom-left-radius: 70%;\n  border-bottom-right-radius: 70%;\n  background-color: #d1d2d6;\n  box-sizing: border-box;\n\n  :after{\n    content: \'\';\n    position: absolute;\n    display: ', ';\n    left: 16px;\n    width: 10px;\n    top: 3px;\n    height: 27px;\n    border-top-right-radius: 100%;\n    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); \n  }\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  display: ', ';\n  position: absolute;\n  top: 40px;\n  height: 60px;\n  width: 20px;\n  left: 1px;\n  background-color: #d1d2d6;\n  border-bottom: 1px solid #a7a9b1;\n  border-top: 1px solid #a7a9b1;\n  box-sizing: initial;\n'], ['\n  display: ', ';\n  position: absolute;\n  top: 40px;\n  height: 60px;\n  width: 20px;\n  left: 1px;\n  background-color: #d1d2d6;\n  border-bottom: 1px solid #a7a9b1;\n  border-top: 1px solid #a7a9b1;\n  box-sizing: initial;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  display: block;\n  position: absolute;\n  top: 80px;\n  height: 65px;\n  width: 22px;\n  border-top-left-radius: 2000%;\n  border-top-right-radius: 2000%;\n  background-color: #d1d2d6;\n'], ['\n  display: block;\n  position: absolute;\n  top: 80px;\n  height: 65px;\n  width: 22px;\n  border-top-left-radius: 2000%;\n  border-top-right-radius: 2000%;\n  background-color: #d1d2d6;\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Legs = __webpack_require__(/*! ./Legs */ "./src/Legs.jsx");

var _Fins = __webpack_require__(/*! ./Fins */ "./src/Fins.jsx");

var _Engines = __webpack_require__(/*! ./Engines */ "./src/Engines.jsx");

var _Thrust = __webpack_require__(/*! ./Thrust */ "./src/Thrust.jsx");

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Animation Duration: 3 seconds

var wiggle = exports.wiggle = (0, _styledComponents.keyframes)(_templateObject);

var land = exports.land = (0, _styledComponents.keyframes)(_templateObject2);

var launch = exports.launch = (0, _styledComponents.keyframes)(_templateObject3);

var Rocket = exports.Rocket = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH
    'top: calc(100% - 280px);' + 'animation-name: ' + wiggle + "," + launch + ";" + 'animation-duration: 200ms, 3s;' + 'animation-delay: 0.5s, 0s;' + 'animation-iteration-count: 13, 1;' + 'animation-fill-mode: forwards;' + 'animation-timing-function: ease-in;' :
    // on LAND
    'top: calc(0%-300x);' + 'bottom: calc(100%);' + 'animation-name: ' + wiggle + ',' + land + ";" + 'animation-duration: 200ms, 3s;' + 'animation-delay: 1s, 0s;' + 'animation-iteration-count: 5, 1;' + 'animation-fill-mode: forwards;' + 'animation-timing-function: ease-out;';
  };
});

var Falcon9 = exports.Falcon9 = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.position == '0px' ? 'display: block;' : function (props) {
    return props.heavy ? 'display: block;' :
    // on LAND
    'display: none;';
  };
}, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH see Rocket
    'left: ' + props.position + ';' :
    // on LAND
    'left: ' + props.position + ';';
  };
});

var FirstStageDiv = exports.FirstStageDiv = _styledComponents2.default.div(_templateObject6);
var FirstStageSpan = exports.FirstStageSpan = _styledComponents2.default.span(_templateObject7);

var USFlag = exports.USFlag = _styledComponents2.default.img(_templateObject8);

var SpaceXLogo = exports.SpaceXLogo = _styledComponents2.default.img(_templateObject9);
var RocketFairing = exports.RocketFairing = _styledComponents2.default.i(_templateObject10, function (props) {
  return props.animationType == "LAUNCH" ? 'block' : 'none';
}, function (props) {
  return props.heavy ? 'block' : 'none';
}, function (props) {
  return props.animationType == "LAUNCH" ? 'block' : 'none';
});

var RocketSecondStage = exports.RocketSecondStage = _styledComponents2.default.i(_templateObject11, function (props) {
  return props.animationType == "LAUNCH" ? 'block' : 'none';
});
var RocketCap = exports.RocketCap = _styledComponents2.default.i(_templateObject12);

var FirstStage = function FirstStage(_ref) {
  var animationType = _ref.animationType;
  return _react2.default.createElement(
    FirstStageDiv,
    null,
    _react2.default.createElement(FirstStageSpan, null),
    _react2.default.createElement(_Fins.FinLeft, { animationType: animationType }),
    _react2.default.createElement(_Fins.FinRight, { animationType: animationType }),
    _react2.default.createElement(_Thrust.Thrust, { animationType: animationType }),
    _react2.default.createElement(_Engines.Octaweb, null),
    _react2.default.createElement(_Engines.MerlinEngineLeft, null),
    _react2.default.createElement(_Engines.MerlinEngineRight, null),
    _react2.default.createElement(_Engines.MerlinEngineLeftMiddle, null),
    _react2.default.createElement(_Engines.MerlinEngineRightMiddle, null),
    _react2.default.createElement(_Legs.LegLeft, { animationType: animationType }),
    _react2.default.createElement(_Legs.LegRight, { animationType: animationType }),
    _react2.default.createElement(_Legs.LegMiddle, { animationType: animationType }),
    _react2.default.createElement(
      _Thrust.Wastes,
      { animationType: animationType },
      _react2.default.createElement('i', null),
      _react2.default.createElement('i', null),
      _react2.default.createElement('i', null),
      _react2.default.createElement('i', null),
      _react2.default.createElement('i', null)
    )
  );
};

var Falcon9SideRocket = function Falcon9SideRocket(_ref2) {
  var position = _ref2.position,
      heavy = _ref2.heavy,
      animationType = _ref2.animationType;
  return _react2.default.createElement(
    Falcon9,
    { position: position, heavy: heavy, animationType: animationType },
    _react2.default.createElement(RocketCap, null),
    _react2.default.createElement(FirstStage, { animationType: animationType })
  );
};

var Falcon9Rocket = function Falcon9Rocket(_ref3) {
  var position = _ref3.position,
      heavy = _ref3.heavy,
      animationType = _ref3.animationType;
  return _react2.default.createElement(
    Falcon9,
    { position: position, heavy: heavy, animationType: animationType },
    _react2.default.createElement(RocketSecondStage, { animationType: animationType }),
    _react2.default.createElement(RocketFairing, { animationType: animationType, heavy: heavy }),
    _react2.default.createElement(FirstStage, { animationType: animationType }),
    _react2.default.createElement(USFlag, { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png' }),
    _react2.default.createElement(SpaceXLogo, { src: 'http://i67.tinypic.com/24q6a0k.png' })
  );
};

var FalconRocket = function FalconRocket(_ref4) {
  var display = _ref4.display,
      animationType = _ref4.animationType,
      heavy = _ref4.heavy,
      onAnimationEnd = _ref4.onAnimationEnd;
  return _react2.default.createElement(
    Rocket,
    { id: 'rocket', display: display, animationType: animationType, onAnimationEnd: onAnimationEnd.bind(undefined) },
    _react2.default.createElement(Falcon9SideRocket, { position: '24px', heavy: heavy, animationType: animationType }),
    _react2.default.createElement(Falcon9SideRocket, { position: '-24px', heavy: heavy, animationType: animationType }),
    _react2.default.createElement(Falcon9Rocket, { position: '0px', heavy: heavy, animationType: animationType })
  );
};

exports.default = FalconRocket;

/***/ }),

/***/ "./src/Falcon9Terminal.jsx":
/*!*********************************!*\
  !*** ./src/Falcon9Terminal.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Falcon = __webpack_require__(/*! ./Falcon9 */ "./src/Falcon9.jsx");

var _Falcon2 = _interopRequireDefault(_Falcon);

var _Platform = __webpack_require__(/*! ./Platform */ "./src/Platform.jsx");

var _Platform2 = _interopRequireDefault(_Platform);

var _Exhaust = __webpack_require__(/*! ./Exhaust */ "./src/Exhaust.jsx");

var _Exhaust2 = _interopRequireDefault(_Exhaust);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This function performs regex matching on expected shell output for git push result being input
// at the command line. Currently it supports output from bash, zsh, fish, cmd and powershell.
function detectPushCommand(data) {
  var patterns = ['To(.+)\.git'];
  var antiPatterns = ['error:'];
  return new RegExp('(' + patterns.join(')|(') + ')').test(data) && !new RegExp('(' + antiPatterns.join(')|(') + ')').test(data);
}

function detectPullCommand(data) {
  //const patterns = ['Updating'] // for development
  var patterns = ['Unpacking objects:(.+)done.'];
  var antiPattern = /CONFLICT/;
  return new RegExp('(' + patterns.join(')|(') + ')').test(data) && !antiPattern.test(data);
}

function detectByteCommand(data) {
  var patterns = ['Writing(.+),(.+)KiB'];
  if (new RegExp('(' + patterns.join(')|(') + ')').test(data)) {
    var array = data.split(/\n| /);
    return array[array.indexOf("KiB") - 1];
  }
  return 0;
}

exports.middleware = function (store) {
  return function (next) {
    return function (action) {
      // console.log("in middleware");
      // console.log(action);
      // console.log(store.getState());

      if (action.type === 'SESSION_ADD_DATA') {
        var data = action.data;

        var uid = store.getState().ui.activeUid;

        var bytes = detectByteCommand(data);
        if (bytes) {
          store.dispatch({
            type: 'UPDATE_BYTE_COUNT',
            uid: uid,
            bytes: bytes
          });
        }
        if (detectPushCommand(data)) {
          store.dispatch({
            type: 'PUSH_MODE_TOGGLE',
            uid: uid
          });
        } else if (detectPullCommand(data)) {
          store.dispatch({
            type: 'PULL_MODE_TOGGLE',
            uid: uid
          });
        }
        next(action);
      } else {
        next(action);
      }
    };
  };
};

exports.reduceUI = function (state, action) {
  // console.log("action");
  // console.log(state);
  // console.log(action.uid);

  var gitFalcon9 = {
    'uid': action.uid,
    'rocketState': 'None',
    'heavy': false
  };

  if (action.type === 'PUSH_MODE_TOGGLE') {
    gitFalcon9.rocketState = 'LAUNCH';
    return state.set('gitFalcon9', gitFalcon9);
  } else if (action.type === 'PULL_MODE_TOGGLE') {
    gitFalcon9.rocketState = 'LAND';
    return state.set('gitFalcon9', gitFalcon9);
  } else if (action.type === 'UPDATE_BYTE_COUNT') {
    var numBytes = Number.parseFloat(action.bytes, 10);
    // if more than 22.8 kBs we need the falcon heavy
    if (numBytes && numBytes > 22.8) {
      gitFalcon9.heavy = true;
      return state.set('gitFalcon9', gitFalcon9);
    }
    return state.set('gitFalcon9', gitFalcon9);
  }

  return state;
};

var passProps = function passProps(uid, parentProps, props) {
  return Object.assign(props, {
    gitFalcon9: parentProps.gitFalcon9
  });
};

exports.mapTermsState = function (state, map) {
  return Object.assign(map, {
    gitFalcon9: state.ui.gitFalcon9
  });
};

exports.getTermGroupProps = passProps;
exports.getTermProps = passProps;

exports.decorateTerm = function (Term, _ref) {
  var React = _ref.React;

  // Define and return our higher order component.
  var HigherOrderComponentTerminal = function (_React$Component) {
    _inherits(HigherOrderComponentTerminal, _React$Component);

    function HigherOrderComponentTerminal(props, context) {
      _classCallCheck(this, HigherOrderComponentTerminal);

      var _this = _possibleConstructorReturn(this, (HigherOrderComponentTerminal.__proto__ || Object.getPrototypeOf(HigherOrderComponentTerminal)).call(this, props, context));

      _this.state = {
        animationType: "NONE",
        heavy: false,
        display: false,
        uid: props.uid
      };
      return _this;
    }

    _createClass(HigherOrderComponentTerminal, [{
      key: 'onTerminal',
      value: function onTerminal(term) {
        if (this.props.onTerminal) this.props.onTerminal(term);
        this._div = term.div_;
        this._window = term.document_.defaultView;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var uid = this.state.uid;
        var gitFalcon9 = nextProps.gitFalcon9;


        if (gitFalcon9) {

          // console.log(rocketUID);
          // console.log(nextProps.rocketUID);
          // console.log(uid);

          if (gitFalcon9.uid == uid) {
            this.setState({
              animationType: gitFalcon9.rocketState,
              display: true
            });

            if (gitFalcon9.heavy) {
              this.setState({
                heavy: true
              });
            }
          }
        }
        return nextProps;
      }
    }, {
      key: 'onAnimationEnd',
      value: function onAnimationEnd(event) {
        if (event.elapsedTime == 3) {
          this.setState({
            animationType: "NONE",
            heavy: false,
            display: false
          });
        }
        setTimeout(1500);
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { style: { width: '100%', height: '100%', position: 'relative' } },
          React.createElement(Term, Object.assign({}, this.props, {
            onTerminal: this._onTerminal
          })),
          React.createElement(_Exhaust2.default, { display: this.state.display, animationType: this.state.animationType, heavy: this.state.heavy }),
          React.createElement(_Falcon2.default, { display: this.state.display, animationType: this.state.animationType, heavy: this.state.heavy, onAnimationEnd: this.onAnimationEnd.bind(this) }),
          React.createElement(_Platform2.default, { display: this.state.display, animationType: this.state.animationType })
        );
      }
    }]);

    return HigherOrderComponentTerminal;
  }(React.Component);

  HigherOrderComponentTerminal.propTypes = {
    onTerminal: _propTypes2.default.func.isRequired
  };

  return HigherOrderComponentTerminal;
};

/***/ }),

/***/ "./src/Fins.jsx":
/*!**********************!*\
  !*** ./src/Fins.jsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinRight = exports.FinLeft = exports.GridFin = exports.openRightFin = exports.openLeftFin = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(90deg); }\n'], ['\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(90deg); }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-90deg); }\n'], ['\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-90deg); }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n  position: absolute;\n  top: 101px;\n  height: 15px;\n  width: 3px;\n  background-color: #3a3a3b;\n  animation-duration: 0.5s;\n  animation-delay: 0s;\n  animation-fill-mode: forwards;\n  transform: rotate(0deg);\n'], ['\n  display: block;\n  position: absolute;\n  top: 101px;\n  height: 15px;\n  width: 3px;\n  background-color: #3a3a3b;\n  animation-duration: 0.5s;\n  animation-delay: 0s;\n  animation-fill-mode: forwards;\n  transform: rotate(0deg);\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  left: -2px;\n  border-=top-left-radius: 50%;\n  transform-origin: right top;\n  ', '\n'], ['\n  left: -2px;\n  border-=top-left-radius: 50%;\n  transform-origin: right top;\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  right: -23px;\n  border-top-right-radius: 50%;\n  transform-origin: left top;\n  ', '\n  '], ['\n  right: -23px;\n  border-top-right-radius: 50%;\n  transform-origin: left top;\n  ', '\n  ']);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var openLeftFin = exports.openLeftFin = (0, _styledComponents.keyframes)(_templateObject);

var openRightFin = exports.openRightFin = (0, _styledComponents.keyframes)(_templateObject2);

var GridFin = exports.GridFin = _styledComponents2.default.i(_templateObject3);

var FinLeft = exports.FinLeft = GridFin.extend(_templateObject4, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH
    ';' :
    // on LAND
    'animation-name: ' + openLeftFin + ';';
  };
});

var FinRight = exports.FinRight = GridFin.extend(_templateObject5, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH
    ';' :
    // on LAND
    'animation-name: ' + openRightFin + ';';
  };
});

/***/ }),

/***/ "./src/Legs.jsx":
/*!**********************!*\
  !*** ./src/Legs.jsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegRight = exports.LegMiddle = exports.LegLeft = exports.Leg = exports.LegBaseStyling = exports.openRightLeg = exports.openMiddleLeg = exports.openLeftLeg = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: rotate(90deg) skewX(35deg); }\n  to {\n    transform: rotate(-40deg) skewX(-35deg); } \n'], ['\n  from {\n    transform: rotate(90deg) skewX(35deg); }\n  to {\n    transform: rotate(-40deg) skewX(-35deg); } \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    transform: rotateX(0deg); }\n  to {\n    transform: rotateX(-135deg); } \n'], ['\n  from {\n    transform: rotateX(0deg); }\n  to {\n    transform: rotateX(-135deg); } \n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  from {\n    transform: rotate(-90deg) skewX(-35deg); }\n  to {\n    transform: rotate(40deg) skewX(35deg); }\n'], ['\n  from {\n    transform: rotate(-90deg) skewX(-35deg); }\n  to {\n    transform: rotate(40deg) skewX(35deg); }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  animation-duration: 0.5s;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n'], ['\n  animation-duration: 0.5s;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: block; \n  position: absolute;\n  height: 4px;\n  width: 45px;\n  bottom: 65px;\n  background-color: #3a3a3b;\n'], ['\n  display: block; \n  position: absolute;\n  height: 4px;\n  width: 45px;\n  bottom: 65px;\n  background-color: #3a3a3b;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  right: 1px;\n  transform-origin: right center;\n  transform: rotate(90deg) skewX(35deg);\n  ', '\n'], ['\n  right: 1px;\n  transform-origin: right center;\n  transform: rotate(90deg) skewX(35deg);\n  ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 45px;\n  width: 18px; \n  bottom: 65px;\n  left: 2px;\n  border-radius: 200% 200% 0 0;\n  border-top-left-radius: 50% 90%;\n  border-top-right-radius: 50% 90%;\n  border: 8px solid #3a3a3b;\n  border-bottom: none;\n  transform-origin: left bottom;\n  ', '\n\n'], ['\n  position: absolute;\n  height: 45px;\n  width: 18px; \n  bottom: 65px;\n  left: 2px;\n  border-radius: 200% 200% 0 0;\n  border-top-left-radius: 50% 90%;\n  border-top-right-radius: 50% 90%;\n  border: 8px solid #3a3a3b;\n  border-bottom: none;\n  transform-origin: left bottom;\n  ', '\n\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  left: 23px;\n  transform-origin: left center;\n  transform: rotate(-90deg) skewX(-35deg);\n  ', '\n'], ['\n  left: 23px;\n  transform-origin: left center;\n  transform: rotate(-90deg) skewX(-35deg);\n  ', '\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var openLeftLeg = exports.openLeftLeg = (0, _styledComponents.keyframes)(_templateObject);
var openMiddleLeg = exports.openMiddleLeg = (0, _styledComponents.keyframes)(_templateObject2);

var openRightLeg = exports.openRightLeg = (0, _styledComponents.keyframes)(_templateObject3);

var LegBaseStyling = exports.LegBaseStyling = _styledComponents2.default.i(_templateObject4);
var Leg = exports.Leg = LegBaseStyling.extend(_templateObject5);

var LegLeft = exports.LegLeft = Leg.extend(_templateObject6, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH
    ';' :
    // on LAND
    'animation-name: ' + openLeftLeg + ';';
  };
});
var LegMiddle = exports.LegMiddle = LegBaseStyling.extend(_templateObject7, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH
    ';' :
    // on LAND
    'animation-name: ' + openMiddleLeg + ';';
  };
});

var LegRight = exports.LegRight = Leg.extend(_templateObject8, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH
    ';' :
    // on LAND
    'animation-name: ' + openRightLeg + ';';
  };
});

/***/ }),

/***/ "./src/Platform.jsx":
/*!**************************!*\
  !*** ./src/Platform.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlatformSmoke = exports.LaunchPad = exports.SmokeLaunch = exports.SmokeLand = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0%{\n    box-shadow: 0px -10px 60px -5px rgba(255,255,255,0.7);\n  }\n  90%{\n    box-shadow: 0px -10px 70px 30px white;\n  }\n  100%{\n    box-shadow: 0px -10px 120px 30px rgba(255,255,255,0.8);\n  }\n'], ['\n  0%{\n    box-shadow: 0px -10px 60px -5px rgba(255,255,255,0.7);\n  }\n  90%{\n    box-shadow: 0px -10px 70px 30px white;\n  }\n  100%{\n    box-shadow: 0px -10px 120px 30px rgba(255,255,255,0.8);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0%{\n    filter:blur(4px);\n    opacity: 0.5;\n    height: 1px;\n    width: 200px;\n    left: calc(90% - 120px);\n    box-shadow: 0px -10px 50px 50px rgba(255,255,255,0.6);\n  }\n  100%{\n    filter:blur(4px);\n    opacity: 0.5;\n    height: 100px;\n    width: 200px;\n    left: calc(90% - 120px);\n    box-shadow: 0px -10px 100px 100px rgba(255,255,255,0.6);\n  }\n'], ['\n  0%{\n    filter:blur(4px);\n    opacity: 0.5;\n    height: 1px;\n    width: 200px;\n    left: calc(90% - 120px);\n    box-shadow: 0px -10px 50px 50px rgba(255,255,255,0.6);\n  }\n  100%{\n    filter:blur(4px);\n    opacity: 0.5;\n    height: 100px;\n    width: 200px;\n    left: calc(90% - 120px);\n    box-shadow: 0px -10px 100px 100px rgba(255,255,255,0.6);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: absolute;\n    display: ', ';\n    height: 1px;\n    width: 100px;\n    left: calc(90% - 85px);\n    right: 0;\n    background: #444;\n    ', '\n    animation-iteration-count: 1;\n    will-change: box-shadow;\n'], ['\n    position: absolute;\n    display: ', ';\n    height: 1px;\n    width: 100px;\n    left: calc(90% - 85px);\n    right: 0;\n    background: #444;\n    ', '\n    animation-iteration-count: 1;\n    will-change: box-shadow;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  display: block;\n  background: rgba(255,255,255,0.6);\n  left: calc(90% - 85px);\n  bottom: calc(100%);\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  ', '\n'], ['\n  position: absolute;\n  display: block;\n  background: rgba(255,255,255,0.6);\n  left: calc(90% - 85px);\n  bottom: calc(100%);\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  ', '\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SmokeLand = exports.SmokeLand = (0, _styledComponents.keyframes)(_templateObject);

var SmokeLaunch = exports.SmokeLaunch = (0, _styledComponents.keyframes)(_templateObject2);

var LaunchPad = exports.LaunchPad = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH see Rocket
    ';' :
    // on LAND
    'animation-name: ' + SmokeLand + ';' + 'animation-duration: 2s;' + 'animation-delay: 1s;';
  };
});

var PlatformSmoke = exports.PlatformSmoke = _styledComponents2.default.i(_templateObject4, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH see Rocket
    'animation-name: ' + SmokeLaunch + ';' + 'animation-iteration-count: 1;' + 'animation-duration: 2.2s;' + 'animation-delay: 0.8s;' :
    // on LAND
    ';';
  };
});

var Platform = function Platform(_ref) {
  var display = _ref.display,
      animationType = _ref.animationType;
  return _react2.default.createElement(
    LaunchPad,
    { id: 'platform', display: display, animationType: animationType },
    _react2.default.createElement(PlatformSmoke, { animationType: animationType })
  );
};

exports.default = Platform;

/***/ }),

/***/ "./src/Thrust.jsx":
/*!************************!*\
  !*** ./src/Thrust.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wastes = exports.Thrust = exports.wasting2 = exports.wasting = exports.engineTurnedOff = exports.engineTurnedOn = exports.flameWiggleLand = exports.flameWiggleLaunch = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    height: 80px; }\n  50% {\n    height: 90px; }\n  100% {\n    height: 80px; }\n'], ['\n  0% {\n    height: 80px; }\n  50% {\n    height: 90px; }\n  100% {\n    height: 80px; }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    height: 30px; }\n  50% {\n    height: 35px; }\n  100% {\n    height: 30px; }\n'], ['\n  0% {\n    height: 30px; }\n  50% {\n    height: 35px; }\n  100% {\n    height: 30px; }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n    display: block;    \n    left: 5px;\n    width: 13px;\n  }\n  to {\n    opacity: 1;\n    display: block; \n    left: 5px;\n    width: 13px;\n  }\n}\n'], ['\n  from {\n    opacity: 1;\n    display: block;    \n    left: 5px;\n    width: 13px;\n  }\n  to {\n    opacity: 1;\n    display: block; \n    left: 5px;\n    width: 13px;\n  }\n}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  0% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  50% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  90% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  99% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  100% {\n    opacity: 0;\n    position: absolute;\n    left: 11px;\n    width: 0px;\n    //height: 0px;\n  }\n}\n'], ['\n  0% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  50% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  90% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  99% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  100% {\n    opacity: 0;\n    position: absolute;\n    left: 11px;\n    width: 0px;\n    //height: 0px;\n  }\n}\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(-10px, 35px, 0); }\n'], ['\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(-10px, 35px, 0); }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(10px, 35px, 0); }\n'], ['\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(10px, 35px, 0); }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: block;\n  position: absolute;\n  top: 265px;\n  height: 10px;\n  width: 1px;\n  left: 12px;\n  opacity: 0;\n  margin: 0px auto;\n  background: white; \n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 9000%;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 9000%;\n  box-shadow: \n      0 0px 0px 3px white,\n      0 20px 1px 4px white, \n      0 25px 2px 3px #ffd9b3, \n      0 30px 5px 4px #ffd9b3,  //top\n      0 0px 150px 15px #ffd9b3, //global\n      0 10px 2px 4px white,\n      0 5px 3px 3px white;\n  ', '\n  animation-iteration-count: infinite, 1;\n  animation-fill-mode: forwards;\n  }\n    .shadows{\n    position: absolute;\n    left: 4px;\n    //top: -5%;\n    width: 0px;\n    height: ', ';\n    border-radius: 50%;\n    box-shadow: \n      0 5px 20px 15px white, \n      0 0px 150px 30px #ffd9b3\n  }\n'], ['\n  display: block;\n  position: absolute;\n  top: 265px;\n  height: 10px;\n  width: 1px;\n  left: 12px;\n  opacity: 0;\n  margin: 0px auto;\n  background: white; \n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 9000%;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 9000%;\n  box-shadow: \n      0 0px 0px 3px white,\n      0 20px 1px 4px white, \n      0 25px 2px 3px #ffd9b3, \n      0 30px 5px 4px #ffd9b3,  //top\n      0 0px 150px 15px #ffd9b3, //global\n      0 10px 2px 4px white,\n      0 5px 3px 3px white;\n  ', '\n  animation-iteration-count: infinite, 1;\n  animation-fill-mode: forwards;\n  }\n    .shadows{\n    position: absolute;\n    left: 4px;\n    //top: -5%;\n    width: 0px;\n    height: ', ';\n    border-radius: 50%;\n    box-shadow: \n      0 5px 20px 15px white, \n      0 0px 150px 30px #ffd9b3\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: ', ';\n  height: 8px;\n  width: 8px;\n  left: 11px;\n  animation-delay: 0s;\n  i {\n    position: absolute;\n    width: 1px;\n    height: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  i:nth-child(1) {\n    top: 2px;\n    animation: ', ' 400ms ', ' 100ms;\n  }\n  i:nth-child(2) {\n    top: 4px;\n    animation: ', ' 400ms ', ' 200ms;\n  }\n  i:nth-child(3) {\n    top: 6px;\n    animation: ', ' 400ms ', ' 300ms;\n  }\n  i:nth-child(4) {\n    top: 8px;\n    animation: ', ' 400ms ', ' 400ms;\n  }\n  i:nth-child(5) {\n    top: 10px;\n    animation: ', ' 400ms ', ' 100ms;\n  }\n'], ['\n  position: absolute;\n  top: ', ';\n  height: 8px;\n  width: 8px;\n  left: 11px;\n  animation-delay: 0s;\n  i {\n    position: absolute;\n    width: 1px;\n    height: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  i:nth-child(1) {\n    top: 2px;\n    animation: ', ' 400ms ', ' 100ms;\n  }\n  i:nth-child(2) {\n    top: 4px;\n    animation: ', ' 400ms ', ' 200ms;\n  }\n  i:nth-child(3) {\n    top: 6px;\n    animation: ', ' 400ms ', ' 300ms;\n  }\n  i:nth-child(4) {\n    top: 8px;\n    animation: ', ' 400ms ', ' 400ms;\n  }\n  i:nth-child(5) {\n    top: 10px;\n    animation: ', ' 400ms ', ' 100ms;\n  }\n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var flameWiggleLaunch = exports.flameWiggleLaunch = (0, _styledComponents.keyframes)(_templateObject);
var flameWiggleLand = exports.flameWiggleLand = (0, _styledComponents.keyframes)(_templateObject2);
var engineTurnedOn = exports.engineTurnedOn = (0, _styledComponents.keyframes)(_templateObject3);

var engineTurnedOff = exports.engineTurnedOff = (0, _styledComponents.keyframes)(_templateObject4);
var wasting = exports.wasting = (0, _styledComponents.keyframes)(_templateObject5);

var wasting2 = exports.wasting2 = (0, _styledComponents.keyframes)(_templateObject6);

var Thrust = exports.Thrust = _styledComponents2.default.i(_templateObject7, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ?
    // on LAUNCH
    'animation-name: ' + flameWiggleLaunch + ', ' + engineTurnedOn + ';' + 'animation-duration: 100ms, 2.5s;' + 'animation-delay: 0.5s, 0.5s;' + 'animation-iteration-count: 13, 1;' :
    // on LAND
    'animation-name: ' + flameWiggleLand + ', ' + engineTurnedOff + ';' + 'animation-duration: 100ms, 2.5s;' + 'animation-delay: 1s, 0.0s;' + 'animation-iteration-count: 5, 1;';
  };
}, function (props) {
  return props.animationType == "LAUNCH" ? '120px' : '50px';
});

var Wastes = exports.Wastes = _styledComponents2.default.i(_templateObject8, function (props) {
  return props.animationType == "LAUNCH" ? '340px' : '265px';
}, wasting, function (props) {
  return props.animationType == "LAUNCH" ? '30' : '18';
}, wasting2, function (props) {
  return props.animationType == "LAUNCH" ? '30' : '18';
}, wasting, function (props) {
  return props.animationType == "LAUNCH" ? '30' : '18';
}, wasting2, function (props) {
  return props.animationType == "LAUNCH" ? '30' : '18';
}, wasting, function (props) {
  return props.animationType == "LAUNCH" ? '30' : '18';
});

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map