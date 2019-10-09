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

/***/ "./src/Exhaust.jsx":
/*!*************************!*\
  !*** ./src/Exhaust.jsx ***!
  \*************************/
/*! exports provided: smokeUp, Smoke, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smokeUp", function() { return smokeUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smoke", function() { return Smoke; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nposition: absolute;\ndisplay: ", ";\nbackground: black;\nleft: calc(90% - 35px);\nwidth: 0px;\nbottom: calc(0%);\ni {\n  position: absolute;\n  display: ", ";\n  background: black;\n  width: 0px;\n  bottom: calc(0%);\n  display: ", ";\n  ", "\n}\ni:nth-child(1) {\n}\ni:nth-child(2) {\n  display: ", ";\n  left: -22px;\n}\ni:nth-child(3) {\n  display: ", ";\n  left: 22px;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n0%{\n  height: 0px;\n  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);\n}\n100%{\n  height: 100vh;\n  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var smokeUp = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var Smoke = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2(), function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH see Rocket
    'animation-name: ' + smokeUp + ';' + 'animation-duration: 2s;' + 'animation-delay: 1.5s;' : // on LAND
    ';';
  };
}, function (props) {
  return props.heavy ? 'block' : 'none';
}, function (props) {
  return props.heavy ? 'block' : 'none';
});

var Exhaust =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Exhaust, _React$Component);

  function Exhaust() {
    _classCallCheck(this, Exhaust);

    return _possibleConstructorReturn(this, _getPrototypeOf(Exhaust).apply(this, arguments));
  }

  _createClass(Exhaust, [{
    key: "render",
    value: function render() {
      //display, animationType, heavy
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Smoke, {
        id: "smoke",
        display: this.display,
        animationType: this.animationType,
        heavy: this.heavy
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null));
    }
  }]);

  return Exhaust;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Exhaust.propTypes = {
  display: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  heavy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  animationType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Exhaust);

/***/ }),

/***/ "./src/Falcon9.jsx":
/*!*************************!*\
  !*** ./src/Falcon9.jsx ***!
  \*************************/
/*! exports provided: wiggle, land, launch, Rocket, Falcon9, FirstStageDiv, FirstStageSpan, USFlag, SpaceXLogo, RocketFairing, RocketSecondStage, RocketCap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wiggle", function() { return wiggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "land", function() { return land; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launch", function() { return launch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rocket", function() { return Rocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Falcon9", function() { return Falcon9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStageDiv", function() { return FirstStageDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstStageSpan", function() { return FirstStageSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USFlag", function() { return USFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceXLogo", function() { return SpaceXLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RocketFairing", function() { return RocketFairing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RocketSecondStage", function() { return RocketSecondStage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RocketCap", function() { return RocketCap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Legs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Legs */ "./src/Legs.jsx");
/* harmony import */ var _Fins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fins */ "./src/Fins.jsx");
/* harmony import */ var _Falcon9_Engines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Falcon9/Engines */ "./src/Falcon9/Engines.jsx");
/* harmony import */ var _Thrust__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Thrust */ "./src/Thrust.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined;

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  top: 80px;\n  height: 65px;\n  width: 22px;\n  border-top-left-radius: 2000%;\n  border-top-right-radius: 2000%;\n  background-color: #d1d2d6;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  position: absolute;\n  top: 40px;\n  height: 60px;\n  width: 20px;\n  left: 1px;\n  background-color: #d1d2d6;\n  border-bottom: 1px solid #a7a9b1;\n  border-top: 1px solid #a7a9b1;\n  box-sizing: initial;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  //display: ", ";\n  position: absolute;\n  top: -20px;\n  height: 60px;\n  width: 30px;\n  left: -4px;\n  border-top-left-radius: 200%;\n  border-top-right-radius: 200%;\n  border-bottom-left-radius: 70%;\n  border-bottom-right-radius: 70%;\n  background-color: #d1d2d6;\n  box-sizing: border-box;\n\n  :after{\n    content: '';\n    position: absolute;\n    display: ", ";\n    left: 16px;\n    width: 10px;\n    top: 3px;\n    height: 27px;\n    border-top-right-radius: 100%;\n    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); \n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 130px;\n  height: 85px;\n  width: 22px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 115px;\n  height: 5px;\n  width: 8px;\n  left: 7px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  top: 100px;\n  width: 22px;\n  height: 155px;\n  background-color: #d1d2d6;\n  border-top: 1px solid #a7a9b1;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  position: absolute;\n  height: 320px;\n  top: calc(0%-300px);\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  position: absolute;\n  height: 320px;\n  left: calc(90% - 50px);\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    top: calc(100% - 280px); }\n  33% {\n    top: calc(100% - 280px); }\n  100% {\n    top: calc(0% - 300px); }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    top: -260px; }\n  50% {\n      top: calc(100% - 300px); }\n  67% {\n    top: calc(100% - 285px); }\n  100% {\n    top: calc(100% - 285px); }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    left: calc(90% - 47px); }\n  50% {\n    left: calc(90% - 45px); }\n  100% {\n    left: calc(90% - 47px); }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







 // Animation Duration: 3 seconds

var wiggle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var land = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var launch = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject3());
var Rocket = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4(), function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH
    'top: calc(100% - 280px);' + 'animation-name: ' + wiggle + "," + launch + ";" + 'animation-duration: 200ms, 3s;' + 'animation-delay: 0.5s, 0s;' + 'animation-iteration-count: 13, 1;' + 'animation-fill-mode: forwards;' + 'animation-timing-function: ease-in;' : // on LAND
    'top: calc(0%-300x);' + 'bottom: calc(100%);' + 'animation-name: ' + wiggle + ',' + land + ";" + 'animation-duration: 200ms, 3s;' + 'animation-delay: 1s, 0s;' + 'animation-iteration-count: 5, 1;' + 'animation-fill-mode: forwards;' + 'animation-timing-function: ease-out;';
  };
});
var Falcon9 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject5(), function (props) {
  return props.position == '0px' ? 'display: block;' : function (props) {
    return props.heavy ? 'display: block;' : // on LAND
    'display: none;';
  };
}, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH see Rocket
    'left: ' + props.position + ';' : // on LAND
    'left: ' + props.position + ';';
  };
});
var FirstStageDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject6());
var FirstStageSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject7());
var USFlag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject8());
var SpaceXLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject9());
var RocketFairing = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject10(), function (props) {
  return props.animationType == "LAUNCH" ? 'block' : 'none';
}, function (props) {
  return props.heavy ? 'block' : 'none';
}, function (props) {
  return props.animationType == "LAUNCH" ? 'block' : 'none';
});
var RocketSecondStage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject11(), function (props) {
  return props.animationType == "LAUNCH" ? 'block' : 'none';
});
var RocketCap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject12());

var FirstStage = function FirstStage(_ref) {
  var animationType = _ref.animationType;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FirstStageDiv, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FirstStageSpan, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Fins__WEBPACK_IMPORTED_MODULE_2__["FinLeft"], {
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Fins__WEBPACK_IMPORTED_MODULE_2__["FinRight"], {
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Thrust__WEBPACK_IMPORTED_MODULE_4__["Thrust"], {
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Falcon9_Engines__WEBPACK_IMPORTED_MODULE_3__["Octaweb"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Falcon9_Engines__WEBPACK_IMPORTED_MODULE_3__["MerlinEngineLeft"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Falcon9_Engines__WEBPACK_IMPORTED_MODULE_3__["MerlinEngineRight"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Falcon9_Engines__WEBPACK_IMPORTED_MODULE_3__["MerlinEngineLeftMiddle"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Falcon9_Engines__WEBPACK_IMPORTED_MODULE_3__["MerlinEngineRightMiddle"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Legs__WEBPACK_IMPORTED_MODULE_1__["LegLeft"], {
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Legs__WEBPACK_IMPORTED_MODULE_1__["LegRight"], {
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Legs__WEBPACK_IMPORTED_MODULE_1__["LegMiddle"], {
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Thrust__WEBPACK_IMPORTED_MODULE_4__["Wastes"], {
    animationType: animationType
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", null)));
};

FirstStage.propTypes = {
  animationType: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
};

var Falcon9SideRocket = function Falcon9SideRocket(_ref2) {
  var position = _ref2.position,
      heavy = _ref2.heavy,
      animationType = _ref2.animationType;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Falcon9, {
    position: position,
    heavy: heavy,
    animationType: animationType
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RocketCap, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FirstStage, {
    animationType: animationType
  }));
};

Falcon9SideRocket.propTypes = {
  display: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,
  heavy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,
  animationType: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
};

var Falcon9Rocket = function Falcon9Rocket(_ref3) {
  var heavy = _ref3.heavy,
      animationType = _ref3.animationType,
      position = _ref3.position;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Falcon9, {
    position: position,
    heavy: heavy,
    animationType: animationType
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RocketSecondStage, {
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RocketFairing, {
    animationType: animationType,
    heavy: heavy
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FirstStage, {
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(USFlag, {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png"
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SpaceXLogo, {
    src: "https://logodix.com/logo/19083.png"
  }));
};

Falcon9Rocket.propTypes = {
  heavy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,
  animationType: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
};

var FalconRocket = function FalconRocket(_ref4) {
  var display = _ref4.display,
      animationType = _ref4.animationType,
      heavy = _ref4.heavy,
      onAnimationEnd = _ref4.onAnimationEnd;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Rocket, {
    id: "rocket",
    display: display,
    animationType: animationType,
    onAnimationEnd: onAnimationEnd.bind(_this)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Falcon9SideRocket, {
    position: "24px",
    heavy: heavy,
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Falcon9SideRocket, {
    position: "-24px",
    heavy: heavy,
    animationType: animationType
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Falcon9Rocket, {
    position: "0px",
    heavy: heavy,
    animationType: animationType
  }));
};

FalconRocket.propTypes = {
  display: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,
  heavy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,
  animationType: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  onAnimationEnd: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FalconRocket);

/***/ }),

/***/ "./src/Falcon9/Engines.jsx":
/*!*********************************!*\
  !*** ./src/Falcon9/Engines.jsx ***!
  \*********************************/
/*! exports provided: Octaweb, MerlinEngine, MerlinEngineLeft, MerlinEngineLeftMiddle, MerlinEngineRightMiddle, MerlinEngineRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Octaweb", function() { return Octaweb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerlinEngine", function() { return MerlinEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerlinEngineLeft", function() { return MerlinEngineLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerlinEngineLeftMiddle", function() { return MerlinEngineLeftMiddle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerlinEngineRightMiddle", function() { return MerlinEngineRightMiddle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerlinEngineRight", function() { return MerlinEngineRight; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  left: 0px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  left: 4px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  left: 11px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  left: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  bottom: 52px;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  background-color: #787879;\n  border-color: #3a3a3b;\n  border-width: 1px;\n  border-top-width: 0px;\n  border-style: solid;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 5px;\n  width: 23px;\n  bottom: 60px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #3a3a3b; \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Octaweb = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject());
var MerlinEngine = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject2());
var MerlinEngineLeft = MerlinEngine.extend(_templateObject3());
var MerlinEngineLeftMiddle = MerlinEngine.extend(_templateObject4());
var MerlinEngineRightMiddle = MerlinEngine.extend(_templateObject5());
var MerlinEngineRight = MerlinEngine.extend(_templateObject6());

/***/ }),

/***/ "./src/Falcon9Terminal.jsx":
/*!*********************************!*\
  !*** ./src/Falcon9Terminal.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Falcon9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Falcon9 */ "./src/Falcon9.jsx");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platform */ "./src/Platform.jsx");
/* harmony import */ var _Exhaust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Exhaust */ "./src/Exhaust.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 // This function performs regex matching on expected shell output for git push result being input
// at the command line. Currently it supports output from bash, zsh, fish, cmd and powershell.

function detectPushCommand(data) {
  var patterns = ['To(.+).git'];
  var antiPatterns = ['error:'];
  return new RegExp("(".concat(patterns.join(')|('), ")")).test(data) && !new RegExp("(".concat(antiPatterns.join(')|('), ")")).test(data);
}

function detectPullCommand(data) {
  //const patterns = ['Updating'] // for development
  var patterns = ['Unpacking objects:(.+)done.'];
  var antiPattern = /CONFLICT/;
  return new RegExp("(".concat(patterns.join(')|('), ")")).test(data) && !antiPattern.test(data);
}

function detectByteCommand(data) {
  var patterns = ['Writing(.+),(.+)KiB'];

  if (new RegExp("(".concat(patterns.join(')|('), ")")).test(data)) {
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
    var numBytes = Number.parseFloat(action.bytes, 10); // if more than 22.8 kBs we need the falcon heavy

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
  var HigherOrderComponentTerminal =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(HigherOrderComponentTerminal, _React$Component);

    function HigherOrderComponentTerminal(props, context) {
      var _this;

      _classCallCheck(this, HigherOrderComponentTerminal);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HigherOrderComponentTerminal).call(this, props, context));
      _this.state = {
        animationType: "NONE",
        heavy: false,
        display: false,
        uid: props.uid
      };
      return _this;
    }

    _createClass(HigherOrderComponentTerminal, [{
      key: "onTerminal",
      value: function onTerminal(term) {
        if (this.props.onTerminal) this.props.onTerminal(term);
        this._div = term.div_;
        this._window = term.document_.defaultView;
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var uid = this.state.uid;
        var gitFalcon9 = nextProps.gitFalcon9;

        if (gitFalcon9) {
          // console.log(rocketUID);
          // console.log(nextProps.rocketUID);
          // console.log(uid);
          if (gitFalcon9.uid === uid) {
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
      key: "onAnimationEnd",
      value: function onAnimationEnd(event) {
        if (event.elapsedTime == 3) {
          this.setState({
            animationType: "LAUNCH",
            heavy: false,
            display: false
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement("div", {
          style: {
            width: '100%',
            height: '100%',
            position: 'relative'
          }
        }, React.createElement(Term, Object.assign({}, this.props, {
          onTerminal: this._onTerminal
        })), React.createElement(_Exhaust__WEBPACK_IMPORTED_MODULE_2__["default"], {
          display: this.state.display,
          animationType: this.state.animationType,
          heavy: this.state.heavy
        }), React.createElement(_Falcon9__WEBPACK_IMPORTED_MODULE_0__["default"], {
          display: this.state.display,
          animationType: this.state.animationType,
          heavy: this.state.heavy,
          onAnimationEnd: this.onAnimationEnd.bind(this)
        }), React.createElement(_Platform__WEBPACK_IMPORTED_MODULE_1__["default"], {
          display: this.state.display,
          animationType: this.state.animationType
        }));
      }
    }]);

    return HigherOrderComponentTerminal;
  }(React.Component);

  HigherOrderComponentTerminal.propTypes = {
    onTerminal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    uid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    gitFalcon9: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
  };
  return HigherOrderComponentTerminal;
};

/***/ }),

/***/ "./src/Fins.jsx":
/*!**********************!*\
  !*** ./src/Fins.jsx ***!
  \**********************/
/*! exports provided: openLeftFin, openRightFin, GridFin, FinLeft, FinRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLeftFin", function() { return openLeftFin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRightFin", function() { return openRightFin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFin", function() { return GridFin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinLeft", function() { return FinLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinRight", function() { return FinRight; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  right: -23px;\n  border-top-right-radius: 50%;\n  transform-origin: left top;\n  ", "\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  left: -2px;\n  border-=top-left-radius: 50%;\n  transform-origin: right top;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  top: 101px;\n  height: 15px;\n  width: 3px;\n  background-color: #3a3a3b;\n  animation-duration: 0.5s;\n  animation-delay: 0s;\n  animation-fill-mode: forwards;\n  transform: rotate(0deg);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-90deg); }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(90deg); }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var openLeftFin = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var openRightFin = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var GridFin = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject3());
var FinLeft = GridFin.extend(_templateObject4(), function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH
    ';' : // on LAND
    'animation-name: ' + openLeftFin + ';';
  };
});
var FinRight = GridFin.extend(_templateObject5(), function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH
    ';' : // on LAND
    'animation-name: ' + openRightFin + ';';
  };
});

/***/ }),

/***/ "./src/Legs.jsx":
/*!**********************!*\
  !*** ./src/Legs.jsx ***!
  \**********************/
/*! exports provided: openLeftLeg, openMiddleLeg, openRightLeg, LegBaseStyling, Leg, LegLeft, LegMiddle, LegRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLeftLeg", function() { return openLeftLeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMiddleLeg", function() { return openMiddleLeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRightLeg", function() { return openRightLeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegBaseStyling", function() { return LegBaseStyling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Leg", function() { return Leg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegLeft", function() { return LegLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegMiddle", function() { return LegMiddle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegRight", function() { return LegRight; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  left: 23px;\n  transform-origin: left center;\n  transform: rotate(-90deg) skewX(-35deg);\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 45px;\n  width: 18px; \n  bottom: 65px;\n  left: 2px;\n  border-radius: 200% 200% 0 0;\n  border-top-left-radius: 50% 90%;\n  border-top-right-radius: 50% 90%;\n  border: 8px solid #3a3a3b;\n  border-bottom: none;\n  transform-origin: left bottom;\n  ", "\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  right: 1px;\n  transform-origin: right center;\n  transform: rotate(90deg) skewX(35deg);\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: block; \n  position: absolute;\n  height: 4px;\n  width: 45px;\n  bottom: 65px;\n  background-color: #3a3a3b;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  animation-duration: 0.5s;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(-90deg) skewX(-35deg); }\n  to {\n    transform: rotate(40deg) skewX(35deg); }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotateX(0deg); }\n  to {\n    transform: rotateX(-135deg); } \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(90deg) skewX(35deg); }\n  to {\n    transform: rotate(-40deg) skewX(-35deg); } \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var openLeftLeg = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var openMiddleLeg = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var openRightLeg = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject3());
var LegBaseStyling = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject4());
var Leg = LegBaseStyling.extend(_templateObject5());
var LegLeft = Leg.extend(_templateObject6(), function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH
    ';' : // on LAND
    'animation-name: ' + openLeftLeg + ';';
  };
});
var LegMiddle = LegBaseStyling.extend(_templateObject7(), function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH
    ';' : // on LAND
    'animation-name: ' + openMiddleLeg + ';';
  };
});
var LegRight = Leg.extend(_templateObject8(), function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH
    ';' : // on LAND
    'animation-name: ' + openRightLeg + ';';
  };
});

/***/ }),

/***/ "./src/Platform.jsx":
/*!**************************!*\
  !*** ./src/Platform.jsx ***!
  \**************************/
/*! exports provided: SmokeLand, SmokeLaunch, LaunchPad, PlatformSmoke, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmokeLand", function() { return SmokeLand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmokeLaunch", function() { return SmokeLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchPad", function() { return LaunchPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformSmoke", function() { return PlatformSmoke; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: block;\n  background: rgba(255,255,255,0.6);\n  left: calc(90% - 85px);\n  bottom: calc(100%);\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    display: ", ";\n    height: 1px;\n    width: 100px;\n    left: calc(90% - 85px);\n    right: 0;\n    background: #444;\n    ", "\n    animation-iteration-count: 1;\n    will-change: box-shadow;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0%{\n    filter:blur(4px);\n    opacity: 0.5;\n    height: 1px;\n    width: 200px;\n    left: calc(90% - 120px);\n    box-shadow: 0px -10px 50px 50px rgba(255,255,255,0.6);\n  }\n  100%{\n    filter:blur(4px);\n    opacity: 0.5;\n    height: 100px;\n    width: 200px;\n    left: calc(90% - 120px);\n    box-shadow: 0px -10px 100px 100px rgba(255,255,255,0.6);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0%{\n    box-shadow: 0px -10px 60px -5px rgba(255,255,255,0.7);\n  }\n  90%{\n    box-shadow: 0px -10px 70px 30px white;\n  }\n  100%{\n    box-shadow: 0px -10px 120px 30px rgba(255,255,255,0.8);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SmokeLand = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var SmokeLaunch = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var LaunchPad = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3(), function (props) {
  return props.display ? 'block' : 'none';
}, function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH see Rocket
    ';' : // on LAND
    'animation-name: ' + SmokeLand + ';' + 'animation-duration: 2s;' + 'animation-delay: 1s;';
  };
});
var PlatformSmoke = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject4(), function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH see Rocket
    'animation-name: ' + SmokeLaunch + ';' + 'animation-iteration-count: 1;' + 'animation-duration: 2.2s;' + 'animation-delay: 0.8s;' : // on LAND
    ';';
  };
});

var Platform =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Platform, _React$Component);

  function Platform() {
    _classCallCheck(this, Platform);

    return _possibleConstructorReturn(this, _getPrototypeOf(Platform).apply(this, arguments));
  }

  _createClass(Platform, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LaunchPad, {
        id: "platform",
        display: this.display,
        animationType: this.animationType
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlatformSmoke, {
        animationType: this.animationType
      }));
    }
  }]);

  return Platform;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Platform.propTypes = {
  display: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  animationType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Platform);

/***/ }),

/***/ "./src/Thrust.jsx":
/*!************************!*\
  !*** ./src/Thrust.jsx ***!
  \************************/
/*! exports provided: flameWiggleLaunch, flameWiggleLand, engineTurnedOn, engineTurnedOff, wasting, wasting2, Thrust, Wastes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flameWiggleLaunch", function() { return flameWiggleLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flameWiggleLand", function() { return flameWiggleLand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "engineTurnedOn", function() { return engineTurnedOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "engineTurnedOff", function() { return engineTurnedOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wasting", function() { return wasting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wasting2", function() { return wasting2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thrust", function() { return Thrust; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wastes", function() { return Wastes; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  height: 8px;\n  width: 8px;\n  left: 11px;\n  animation-delay: 0s;\n  i {\n    position: absolute;\n    width: 1px;\n    height: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  i:nth-child(1) {\n    top: 2px;\n    animation: ", " 400ms ", " 100ms;\n  }\n  i:nth-child(2) {\n    top: 4px;\n    animation: ", " 400ms ", " 200ms;\n  }\n  i:nth-child(3) {\n    top: 6px;\n    animation: ", " 400ms ", " 300ms;\n  }\n  i:nth-child(4) {\n    top: 8px;\n    animation: ", " 400ms ", " 400ms;\n  }\n  i:nth-child(5) {\n    top: 10px;\n    animation: ", " 400ms ", " 100ms;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  top: 265px;\n  height: 10px;\n  width: 1px;\n  left: 12px;\n  opacity: 0;\n  margin: 0px auto;\n  background: white; \n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 9000%;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 9000%;\n  box-shadow: \n      0 0px 0px 3px white,\n      0 20px 1px 4px white, \n      0 25px 2px 3px #ffd9b3, \n      0 30px 5px 4px #ffd9b3,  //top\n      0 0px 150px 15px #ffd9b3, //global\n      0 10px 2px 4px white,\n      0 5px 3px 3px white;\n  ", "\n  animation-iteration-count: infinite, 1;\n  animation-fill-mode: forwards;\n  }\n    .shadows{\n    position: absolute;\n    left: 4px;\n    //top: -5%;\n    width: 0px;\n    height: ", ";\n    border-radius: 50%;\n    box-shadow: \n      0 5px 20px 15px white, \n      0 0px 150px 30px #ffd9b3\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(10px, 35px, 0); }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(-10px, 35px, 0); }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  50% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  90% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  99% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  100% {\n    opacity: 0;\n    position: absolute;\n    left: 11px;\n    width: 0px;\n    //height: 0px;\n  }\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 1;\n    display: block;    \n    left: 5px;\n    width: 13px;\n  }\n  to {\n    opacity: 1;\n    display: block; \n    left: 5px;\n    width: 13px;\n  }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    height: 30px; }\n  50% {\n    height: 35px; }\n  100% {\n    height: 30px; }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    height: 80px; }\n  50% {\n    height: 90px; }\n  100% {\n    height: 80px; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var flameWiggleLaunch = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var flameWiggleLand = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var engineTurnedOn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject3());
var engineTurnedOff = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject4());
var wasting = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject5());
var wasting2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject6());
var Thrust = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject7(), function (props) {
  return props.animationType == "None" ? ';' : function (props) {
    return props.animationType == "LAUNCH" ? // on LAUNCH
    'animation-name: ' + flameWiggleLaunch + ', ' + engineTurnedOn + ';' + 'animation-duration: 100ms, 2.5s;' + 'animation-delay: 0.5s, 0.5s;' + 'animation-iteration-count: 13, 1;' : // on LAND
    'animation-name: ' + flameWiggleLand + ', ' + engineTurnedOff + ';' + 'animation-duration: 100ms, 2.5s;' + 'animation-delay: 1s, 0.0s;' + 'animation-iteration-count: 5, 1;';
  };
}, function (props) {
  return props.animationType == "LAUNCH" ? '120px' : '50px';
});
var Wastes = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.i(_templateObject8(), function (props) {
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