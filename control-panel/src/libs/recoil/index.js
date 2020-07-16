define("recoil", ["react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * @format
 */

/* eslint-disable */


if (false) {} else {
  // @oss-only
  module.exports = __webpack_require__(1); // @oss-only
} // @oss-only

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var react = _interopDefault(__webpack_require__(2));

var reactDom = _interopDefault(__webpack_require__(3));
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */


function sprintf(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var index = 0;
  return format.replace(/%s/g, function () {
    return String(args[index++]);
  });
}

var Recoil_sprintf = sprintf; // @oss-only
// prettier-ignore

function expectationViolation(format) {
  // @oss-only
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    // @oss-only
    var message = Recoil_sprintf.call.apply(Recoil_sprintf, [null, format].concat(args)); // @oss-only

    var error = new Error(message); // @oss-only

    error.name = 'Expectation Violation'; // @oss-only

    console.error(error); // @oss-only
  } // @oss-only
} // @oss-only


var Recoil_expectationViolation = expectationViolation;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// prettier-ignore

/* eslint-disable no-lone-blocks */
// this {} block is necessary to keep prettier off on internal repo
// @fb-only: {

function recoverableViolation( // @oss-only
message, // @oss-only
projectName) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      error = _ref.error;

  // @oss-only
  {
    // @oss-only
    console.error(message, error); // @oss-only
  } // @oss-only

  return null; // @oss-only
} // @oss-only
// @fb-only: }

/* eslint-enable no-lone-blocks */


var Recoil_recoverableViolation = recoverableViolation;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// eslint-disable-next-line no-unused-vars


var AbstractRecoilValue = function AbstractRecoilValue(newKey) {
  _classCallCheck(this, AbstractRecoilValue);

  _defineProperty(this, "key", void 0);

  this.key = newKey;
};

var RecoilState = /*#__PURE__*/function (_AbstractRecoilValue) {
  _inherits(RecoilState, _AbstractRecoilValue);

  var _super = _createSuper(RecoilState);

  function RecoilState() {
    _classCallCheck(this, RecoilState);

    return _super.apply(this, arguments);
  }

  return RecoilState;
}(AbstractRecoilValue);

var RecoilValueReadOnly = /*#__PURE__*/function (_AbstractRecoilValue2) {
  _inherits(RecoilValueReadOnly, _AbstractRecoilValue2);

  var _super2 = _createSuper(RecoilValueReadOnly);

  function RecoilValueReadOnly() {
    _classCallCheck(this, RecoilValueReadOnly);

    return _super2.apply(this, arguments);
  }

  return RecoilValueReadOnly;
}(AbstractRecoilValue);

function isRecoilValue(x) {
  return x instanceof RecoilState || x instanceof RecoilValueReadOnly;
}

var Recoil_RecoilValue = {
  AbstractRecoilValue: AbstractRecoilValue,
  RecoilState: RecoilState,
  RecoilValueReadOnly: RecoilValueReadOnly,
  isRecoilValue: isRecoilValue
};
var Recoil_RecoilValue_1 = Recoil_RecoilValue.AbstractRecoilValue;
var Recoil_RecoilValue_2 = Recoil_RecoilValue.RecoilState;
var Recoil_RecoilValue_3 = Recoil_RecoilValue.RecoilValueReadOnly;
var Recoil_RecoilValue_4 = Recoil_RecoilValue.isRecoilValue;
var Recoil_RecoilValue$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AbstractRecoilValue: Recoil_RecoilValue_1,
  RecoilState: Recoil_RecoilValue_2,
  RecoilValueReadOnly: Recoil_RecoilValue_3,
  isRecoilValue: Recoil_RecoilValue_4
});

var DefaultValue = function DefaultValue() {
  _classCallCheck(this, DefaultValue);
};

var DEFAULT_VALUE = new DefaultValue();

var RecoilValueNotReady = /*#__PURE__*/function (_Error) {
  _inherits(RecoilValueNotReady, _Error);

  var _super3 = _createSuper(RecoilValueNotReady);

  function RecoilValueNotReady(key) {
    _classCallCheck(this, RecoilValueNotReady);

    return _super3.call(this, "Tried to set the value of Recoil selector ".concat(key, " using an updater function, but it is an async selector in a pending or error state; this is not supported."));
  }

  return RecoilValueNotReady;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // flowlint-next-line unclear-type:off


var nodes = new Map();
/* eslint-disable no-redeclare */

function registerNode(node) {
  if (nodes.has(node.key)) {
    var message = "Duplicate atom key \"".concat(node.key, "\". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement."); // TODO Need to figure out if there is a standard/open-source equivalent to see if hot module replacement is happening:
    // prettier-ignore
    // @fb-only: if (__DEV__) {
    // @fb-only: const isAcceptingUpdate = require('__debug').isAcceptingUpdate;
    // prettier-ignore
    // @fb-only: if (typeof isAcceptingUpdate !== 'function' || !isAcceptingUpdate()) {
    // @fb-only: expectationViolation(message, 'recoil');
    // @fb-only: }
    // prettier-ignore
    // @fb-only: } else {

    Recoil_recoverableViolation(message); // @fb-only: }
  }

  nodes.set(node.key, node);
  return node.set == null ? new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key) : new Recoil_RecoilValue$1.RecoilState(node.key);
}
/* eslint-enable no-redeclare */


var NodeMissingError = /*#__PURE__*/function (_Error2) {
  _inherits(NodeMissingError, _Error2);

  var _super4 = _createSuper(NodeMissingError);

  function NodeMissingError() {
    _classCallCheck(this, NodeMissingError);

    return _super4.apply(this, arguments);
  }

  return NodeMissingError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // flowlint-next-line unclear-type:off


function getNode(key) {
  var node = nodes.get(key);

  if (node == null) {
    throw new NodeMissingError("Missing definition for RecoilValue: \"".concat(key, "\"\""));
  }

  return node;
}

var Recoil_Node = {
  nodes: nodes,
  registerNode: registerNode,
  getNode: getNode,
  NodeMissingError: NodeMissingError,
  DefaultValue: DefaultValue,
  DEFAULT_VALUE: DEFAULT_VALUE,
  RecoilValueNotReady: RecoilValueNotReady
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function enqueueExecution(s, f) {
  f();
}

var Recoil_Queue = {
  enqueueExecution: enqueueExecution
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Utilities for working with built-in Maps and Sets without mutating them.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function setByAddingToSet(set, v) {
  var next = new Set(set);
  next.add(v);
  return next;
}

function setByDeletingFromSet(set, v) {
  var next = new Set(set);
  next["delete"](v);
  return next;
}

function mapBySettingInMap(map, k, v) {
  var next = new Map(map);
  next.set(k, v);
  return next;
}

function mapByUpdatingInMap(map, k, updater) {
  var next = new Map(map);
  next.set(k, updater(next.get(k)));
  return next;
}

function mapByDeletingFromMap(map, k) {
  var next = new Map(map);
  next["delete"](k);
  return next;
}

var Recoil_CopyOnWrite = {
  setByAddingToSet: setByAddingToSet,
  setByDeletingFromSet: setByDeletingFromSet,
  mapBySettingInMap: mapBySettingInMap,
  mapByUpdatingInMap: mapByUpdatingInMap,
  mapByDeletingFromMap: mapByDeletingFromMap
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Interface for `scheduler/tracing` to aid in profiling Recoil and Recoil apps.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// flowlint-next-line untyped-import:off
// @fb-only: const SchedulerTracing = require('SchedulerTracing');

function trace(message, node, fn) {
  // prettier-ignore
  // @fb-only: if (__DEV__) {
  // prettier-ignore
  // @fb-only: if (
  // prettier-ignore
  // @fb-only: SchedulerTracing.unstable_trace !== undefined &&
  // prettier-ignore
  // @fb-only: window.performance !== undefined
  // prettier-ignore
  // @fb-only: ) {
  // prettier-ignore
  // @fb-only: return SchedulerTracing.unstable_trace(
  // prettier-ignore
  // @fb-only: `Recoil: ${message} for node: ${
  // prettier-ignore
  // @fb-only: typeof node === 'string' ? node : node.key
  // prettier-ignore
  // @fb-only: }`,
  // prettier-ignore
  // @fb-only: window.performance.now(),
  // prettier-ignore
  // @fb-only: fn,
  // prettier-ignore
  // @fb-only: );
  // prettier-ignore
  // @fb-only: }
  // prettier-ignore
  // @fb-only: }
  return fn();
}

function wrap(fn) {
  // prettier-ignore
  // @fb-only: if (__DEV__) {
  // prettier-ignore
  // @fb-only: if (SchedulerTracing.unstable_wrap !== undefined) {
  // prettier-ignore
  // @fb-only: return SchedulerTracing.unstable_wrap(fn);
  // prettier-ignore
  // @fb-only: }
  // prettier-ignore
  // @fb-only: }
  return fn;
}

var Recoil_Tracing = {
  trace: trace,
  wrap: wrap
};
var mapByDeletingFromMap$1 = Recoil_CopyOnWrite.mapByDeletingFromMap,
    mapBySettingInMap$1 = Recoil_CopyOnWrite.mapBySettingInMap,
    mapByUpdatingInMap$1 = Recoil_CopyOnWrite.mapByUpdatingInMap,
    setByAddingToSet$1 = Recoil_CopyOnWrite.setByAddingToSet;
var getNode$1 = Recoil_Node.getNode; // flowlint-next-line unclear-type:off

var emptyMap = Object.freeze(new Map()); // flowlint-next-line unclear-type:off

var emptySet = Object.freeze(new Set());

var ReadOnlyRecoilValueError = /*#__PURE__*/function (_Error3) {
  _inherits(ReadOnlyRecoilValueError, _Error3);

  var _super5 = _createSuper(ReadOnlyRecoilValueError);

  function ReadOnlyRecoilValueError() {
    _classCallCheck(this, ReadOnlyRecoilValueError);

    return _super5.apply(this, arguments);
  }

  return ReadOnlyRecoilValueError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // Get the current value loadable of a node and update the state.
// Update dependencies and subscriptions for selectors.
// Update saved value validation for atoms.


function getNodeLoadable(store, state, key) {
  return getNode$1(key).get(store, state);
} // Peek at the current value loadable for a node.
// NOTE: This will ignore updating the state for subscriptions so use sparingly!!


function peekNodeLoadable(store, state, key) {
  return getNodeLoadable(store, state, key)[1];
} // Write value directly to state bypassing the Node interface as the node
// definitions may not have been loaded yet when processing the initial snapshot.


function setUnvalidatedAtomValue(state, key, newValue) {
  return _objectSpread(_objectSpread({}, state), {}, {
    atomValues: mapByDeletingFromMap$1(state.atomValues, key),
    nonvalidatedAtoms: mapBySettingInMap$1(state.nonvalidatedAtoms, key, newValue),
    dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key)
  });
} // Set a node value and return the set of nodes that were actually written.
// That does not include any downstream nodes which are dependent on them.


function setNodeValue(store, state, key, newValue) {
  var node = getNode$1(key);

  if (node.set == null) {
    throw new ReadOnlyRecoilValueError("Attempt to set read-only RecoilValue: ".concat(key));
  }

  var _node$set = node.set(store, state, newValue),
      _node$set2 = _slicedToArray(_node$set, 2),
      newState = _node$set2[0],
      writtenNodes = _node$set2[1];

  return [newState, writtenNodes];
} // Find all of the recursively dependent nodes


function getDownstreamNodes(state, keys) {
  var dependentNodes = new Set();
  var visitedNodes = new Set();
  var visitingNodes = Array.from(keys);

  for (var key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
    var _state$nodeToNodeSubs;

    dependentNodes.add(key);
    visitedNodes.add(key);
    var subscribedNodes = (_state$nodeToNodeSubs = state.nodeToNodeSubscriptions.get(key)) !== null && _state$nodeToNodeSubs !== void 0 ? _state$nodeToNodeSubs : emptySet;

    var _iterator = _createForOfIteratorHelper(subscribedNodes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var downstreamNode = _step.value;

        if (!visitedNodes.has(downstreamNode)) {
          visitingNodes.push(downstreamNode);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return dependentNodes;
}

var subscriptionID = 0;

function subscribeComponentToNode(state, key, callback) {
  var subID = subscriptionID++;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    nodeToComponentSubscriptions: mapByUpdatingInMap$1(state.nodeToComponentSubscriptions, key, function (subsForAtom) {
      return mapBySettingInMap$1(subsForAtom !== null && subsForAtom !== void 0 ? subsForAtom : emptyMap, subID, ['TODO debug name', callback]);
    })
  });

  function release(state) {
    var newState = _objectSpread(_objectSpread({}, state), {}, {
      nodeToComponentSubscriptions: mapByUpdatingInMap$1(state.nodeToComponentSubscriptions, key, function (subsForAtom) {
        return mapByDeletingFromMap$1(subsForAtom !== null && subsForAtom !== void 0 ? subsForAtom : emptyMap, subID);
      })
    });

    return newState;
  }

  return [newState, release];
} // Fire or enqueue callbacks to rerender components that are subscribed to
// nodes affected by the updatedNodes


function fireNodeSubscriptions(store, updatedNodes, when) {
  var _store$getState$nextT;
  /*
  This is called in two conditions: When an atom is set (with 'enqueue') and
  when an async selector resolves (with 'now'). When an atom is set, we want
  to use the latest dependencies that may have become dependencies due to
  earlier changes in a batch. But if an async selector happens to resolve during
  a batch, it should use the currently rendered output, and then the end of the
  batch will trigger any further subscriptions due to new deps in the new state.
  */


  var state = when === 'enqueue' ? (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree : store.getState().currentTree;
  var dependentNodes = getDownstreamNodes(state, updatedNodes);

  var _iterator2 = _createForOfIteratorHelper(dependentNodes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var key = _step2.value;

      var _state$nodeToComponen;

      ((_state$nodeToComponen = state.nodeToComponentSubscriptions.get(key)) !== null && _state$nodeToComponen !== void 0 ? _state$nodeToComponen : []).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            _debugName = _ref3[0],
            cb = _ref3[1];

        when === 'enqueue' ? store.getState().queuedComponentCallbacks.push(cb) : cb(state);
      });
    } // Wake all suspended components so the right one(s) can try to re-render.
    // We need to wake up components not just when some asynchronous selector
    // resolved (when === 'now'), but also when changing synchronous values because
    // they may cause a selector to change from asynchronous to synchronous, in
    // which case there would be no follow-up asynchronous resolution to wake us up.
    // TODO OPTIMIZATION Only wake up related downstream components

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  Recoil_Tracing.trace('value became available, waking components', Array.from(updatedNodes).join(', '), function () {
    var resolvers = store.getState().suspendedComponentResolvers;
    resolvers.forEach(function (r) {
      return r();
    });
    resolvers.clear();
  });
}

function detectCircularDependencies(state, stack) {
  if (!stack.length) {
    return;
  }

  var leaf = stack[stack.length - 1];
  var downstream = state.nodeToNodeSubscriptions.get(leaf);

  if (!(downstream === null || downstream === void 0 ? void 0 : downstream.size)) {
    return;
  }

  var root = stack[0];

  if (downstream.has(root)) {
    throw new Error("Recoil selector has circular dependencies: ".concat([].concat(_toConsumableArray(stack), [root]).reverse().join(" \u2192 ")));
  }

  var _iterator3 = _createForOfIteratorHelper(downstream),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var next = _step3.value;
      detectCircularDependencies(state, [].concat(_toConsumableArray(stack), [next]));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

var Recoil_FunctionalCore = {
  getNodeLoadable: getNodeLoadable,
  peekNodeLoadable: peekNodeLoadable,
  setNodeValue: setNodeValue,
  setUnvalidatedAtomValue: setUnvalidatedAtomValue,
  subscribeComponentToNode: subscribeComponentToNode,
  fireNodeSubscriptions: fireNodeSubscriptions,
  detectCircularDependencies: detectCircularDependencies
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a new Map object with the same keys as the original, but with the
 * values replaced with the output of the given callback function.
 */

function mapMap(map, callback) {
  var result = new Map();
  map.forEach(function (value, key) {
    result.set(key, callback(value, key));
  });
  return result;
}

var Recoil_mapMap = mapMap;
var getNodeLoadable$1 = Recoil_FunctionalCore.getNodeLoadable,
    peekNodeLoadable$1 = Recoil_FunctionalCore.peekNodeLoadable,
    setNodeValue$1 = Recoil_FunctionalCore.setNodeValue,
    setUnvalidatedAtomValue$1 = Recoil_FunctionalCore.setUnvalidatedAtomValue,
    subscribeComponentToNode$1 = Recoil_FunctionalCore.subscribeComponentToNode;
var RecoilValueNotReady$1 = Recoil_Node.RecoilValueNotReady;
var AbstractRecoilValue$1 = Recoil_RecoilValue$1.AbstractRecoilValue,
    RecoilState$1 = Recoil_RecoilValue$1.RecoilState,
    RecoilValueReadOnly$1 = Recoil_RecoilValue$1.RecoilValueReadOnly;

function getRecoilValueAsLoadable(store, _ref4) {
  var key = _ref4.key;
  var result; // Save any state changes during read, such as validating atoms,
  // updated selector subscriptions/dependencies, &c.

  Recoil_Tracing.trace('get RecoilValue', key, function () {
    return store.replaceState(Recoil_Tracing.wrap(function (state) {
      var _getNodeLoadable$ = getNodeLoadable$1(store, state, key),
          _getNodeLoadable$2 = _slicedToArray(_getNodeLoadable$, 2),
          newState = _getNodeLoadable$2[0],
          loadable = _getNodeLoadable$2[1];

      result = loadable;
      return newState;
    }));
  });
  return result; // flowlint-line unclear-type:off
}

function setRecoilValue(store, _ref5, newValue) {
  var key = _ref5.key;
  Recoil_Tracing.trace('set RecoilValue', key, function () {
    return store.replaceState(Recoil_Tracing.wrap(function (state) {
      var _setNodeValue$ = setNodeValue$1(store, state, key, newValue),
          _setNodeValue$2 = _slicedToArray(_setNodeValue$, 2),
          newState = _setNodeValue$2[0],
          writtenNodes = _setNodeValue$2[1];

      store.fireNodeSubscriptions(writtenNodes, 'enqueue');
      return newState;
    }));
  });
}

function setUnvalidatedRecoilValue(store, _ref6, newValue) {
  var key = _ref6.key;
  Recoil_Tracing.trace('set unvalidated persisted atom', key, function () {
    return store.replaceState(Recoil_Tracing.wrap(function (state) {
      var newState = setUnvalidatedAtomValue$1(state, key, newValue);
      store.fireNodeSubscriptions(new Set([key]), 'enqueue');
      return newState;
    }));
  });
}

function valueFromValueOrUpdater(store, _ref7, valueOrUpdater) {
  var key = _ref7.key;

  if (typeof valueOrUpdater === 'function') {
    var _storeState$nextTree; // Updater form: pass in the current value. Throw if the current value
    // is unavailable (namely when updating an async selector that's
    // pending or errored):


    var storeState = store.getState();
    var state = (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree; // NOTE: This will not update state with node subscriptions.

    var current = peekNodeLoadable$1(store, state, key);

    if (current.state === 'loading') {
      throw new RecoilValueNotReady$1(key);
    } else if (current.state === 'hasError') {
      throw current.contents;
    } // T itself may be a function, so our refinement is not sufficient:


    return valueOrUpdater(current.contents); // flowlint-line unclear-type:off
  } else {
    return valueOrUpdater;
  }
}

function subscribeToRecoilValue(store, _ref8, callback) {
  var key = _ref8.key;
  var newState, releaseFn;
  Recoil_Tracing.trace('subscribe component to RecoilValue', key, function () {
    return store.replaceState(Recoil_Tracing.wrap(function (state) {
      var _subscribeComponentTo = subscribeComponentToNode$1(state, key, callback);

      var _subscribeComponentTo2 = _slicedToArray(_subscribeComponentTo, 2);

      newState = _subscribeComponentTo2[0];
      releaseFn = _subscribeComponentTo2[1];
      return newState;
    }));
  });
  return {
    release: function release(store) {
      return store.replaceState(releaseFn);
    }
  };
}

var Recoil_RecoilValueInterface = {
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  valueFromValueOrUpdater: valueFromValueOrUpdater,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable,
  setRecoilValue: setRecoilValue,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue,
  subscribeToRecoilValue: subscribeToRecoilValue
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// TODO We could just store T instead of a Loadable<T> in atomValues
// flowlint-next-line unclear-type:off
// StoreState represents the state of a Recoil context. It is global and mutable.
// It is updated only during effects, except that the nextTree property is updated
// when atom values change and async requests resolve, and suspendedComponentResolvers
// is updated when components are suspended.

function makeEmptyTreeState() {
  return {
    transactionMetadata: {},
    atomValues: new Map(),
    nonvalidatedAtoms: new Map(),
    dirtyAtoms: new Set(),
    nodeDeps: new Map(),
    nodeToNodeSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map()
  };
}

function makeStoreState(treeState) {
  return {
    currentTree: treeState,
    nextTree: null,
    transactionSubscriptions: new Map(),
    queuedComponentCallbacks: [],
    suspendedComponentResolvers: new Set()
  };
}

function makeEmptyStoreState() {
  return makeStoreState(makeEmptyTreeState());
}

var Recoil_State = {
  makeEmptyTreeState: makeEmptyTreeState,
  makeEmptyStoreState: makeEmptyStoreState,
  makeStoreState: makeStoreState
};
var DEFAULT_VALUE$1 = Recoil_Node.DEFAULT_VALUE;
var getRecoilValueAsLoadable$1 = Recoil_RecoilValueInterface.getRecoilValueAsLoadable,
    setRecoilValue$1 = Recoil_RecoilValueInterface.setRecoilValue,
    valueFromValueOrUpdater$1 = Recoil_RecoilValueInterface.valueFromValueOrUpdater;
var makeEmptyTreeState$1 = Recoil_State.makeEmptyTreeState,
    makeStoreState$1 = Recoil_State.makeStoreState;

function makeStore(treeState) {
  var storeState = makeStoreState$1(treeState);
  var store = {
    getState: function getState() {
      return storeState;
    },
    replaceState: function replaceState(replacer) {
      storeState.currentTree = replacer(storeState.currentTree); // no batching so nextTree is never active
    },
    subscribeToTransactions: function subscribeToTransactions() {
      throw new Error('Cannot subscribe to Snapshots');
    },
    addTransactionMetadata: function addTransactionMetadata() {
      throw new Error('Cannot subscribe to Snapshots');
    },
    fireNodeSubscriptions: function fireNodeSubscriptions() {}
  };
  return store;
} // A "Snapshot" is "read-only" and captures a specific set of values of atoms.
// However, the data-flow-graph and selector values may evolve as selector
// evaluation functions are executed and async selectors resolve.


var Snapshot = /*#__PURE__*/function () {
  function Snapshot(treeState) {
    var _this = this;

    _classCallCheck(this, Snapshot);

    _defineProperty(this, "_store", void 0);

    _defineProperty(this, "getLoadable", function (recoilValue) {
      return getRecoilValueAsLoadable$1(_this._store, recoilValue);
    });

    _defineProperty(this, "getPromise", function (recoilValue) {
      return _this.getLoadable(recoilValue).toPromise();
    });

    _defineProperty(this, "map", function (mapper) {
      var mutableSnapshot = new MutableSnapshot(_this._store.getState().currentTree);
      mapper(mutableSnapshot);
      var newState = mutableSnapshot.getStore_INTERNAL().getState().currentTree;
      return cloneSnapshot(newState);
    });

    _defineProperty(this, "asyncMap", /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(mapper) {
        var mutableSnapshot, newState;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mutableSnapshot = new MutableSnapshot(_this._store.getState().currentTree);
                _context.next = 3;
                return mapper(mutableSnapshot);

              case 3:
                newState = mutableSnapshot.getStore_INTERNAL().getState().currentTree;
                return _context.abrupt("return", cloneSnapshot(newState));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref9.apply(this, arguments);
      };
    }());

    this._store = makeStore(treeState);
  }

  _createClass(Snapshot, [{
    key: "getStore_INTERNAL",
    value: function getStore_INTERNAL() {
      return this._store;
    }
  }]);

  return Snapshot;
}();

function cloneTreeState(treeState) {
  return {
    transactionMetadata: _objectSpread({}, treeState.transactionMetadata),
    atomValues: new Map(treeState.atomValues),
    nonvalidatedAtoms: new Map(treeState.nonvalidatedAtoms),
    dirtyAtoms: new Set(treeState.dirtyAtoms),
    nodeDeps: new Map(treeState.nodeDeps),
    nodeToNodeSubscriptions: Recoil_mapMap(treeState.nodeToNodeSubscriptions, function (keys) {
      return new Set(keys);
    }),
    nodeToComponentSubscriptions: new Map()
  };
} // Factory to build a fresh snapshot


function freshSnapshot() {
  return new Snapshot(makeEmptyTreeState$1());
} // Factory to clone a snapahot state


function cloneSnapshot(treeState) {
  return new Snapshot(cloneTreeState(treeState));
}

var MutableSnapshot = /*#__PURE__*/function (_Snapshot) {
  _inherits(MutableSnapshot, _Snapshot);

  var _super6 = _createSuper(MutableSnapshot);

  function MutableSnapshot(treeState) {
    var _this2;

    _classCallCheck(this, MutableSnapshot);

    _this2 = _super6.call(this, cloneTreeState(treeState));

    _defineProperty(_assertThisInitialized(_this2), "set", function (recoilState, newValueOrUpdater) {
      var store = _this2.getStore_INTERNAL();

      var newValue = valueFromValueOrUpdater$1(store, recoilState, newValueOrUpdater);
      setRecoilValue$1(store, recoilState, newValue);
    });

    _defineProperty(_assertThisInitialized(_this2), "reset", function (recoilState) {
      return setRecoilValue$1(_this2.getStore_INTERNAL(), recoilState, DEFAULT_VALUE$1);
    });

    return _this2;
  } // We want to allow the methods to be destructured and used as accessors
  // eslint-disable-next-line fb-www/extra-arrow-initializer


  return MutableSnapshot;
}(Snapshot);

var Recoil_Snapshot = {
  Snapshot: Snapshot,
  MutableSnapshot: MutableSnapshot,
  freshSnapshot: freshSnapshot,
  cloneSnapshot: cloneSnapshot
};
var Recoil_Snapshot_1 = Recoil_Snapshot.Snapshot;
var Recoil_Snapshot_2 = Recoil_Snapshot.MutableSnapshot;
var Recoil_Snapshot_3 = Recoil_Snapshot.freshSnapshot;
var Recoil_Snapshot_4 = Recoil_Snapshot.cloneSnapshot;
var Recoil_Snapshot$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Snapshot: Recoil_Snapshot_1,
  MutableSnapshot: Recoil_Snapshot_2,
  freshSnapshot: Recoil_Snapshot_3,
  cloneSnapshot: Recoil_Snapshot_4
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function nullthrows(x, message) {
  if (x != null) {
    return x;
  }

  throw new Error(message !== null && message !== void 0 ? message : 'Got unexpected null or undefined');
}

var Recoil_nullthrows = nullthrows;
var useContext = react.useContext,
    useEffect = react.useEffect,
    useRef = react.useRef,
    useState = react.useState;
var fireNodeSubscriptions$1 = Recoil_FunctionalCore.fireNodeSubscriptions,
    setNodeValue$2 = Recoil_FunctionalCore.setNodeValue,
    setUnvalidatedAtomValue$2 = Recoil_FunctionalCore.setUnvalidatedAtomValue;
var freshSnapshot$1 = Recoil_Snapshot$1.freshSnapshot;
var makeEmptyStoreState$1 = Recoil_State.makeEmptyStoreState,
    makeStoreState$2 = Recoil_State.makeStoreState;

function notInAContext() {
  throw new Error('This component must be used inside a <RecoilRoot> component.');
}

var defaultStore = Object.freeze({
  getState: notInAContext,
  replaceState: notInAContext,
  subscribeToTransactions: notInAContext,
  addTransactionMetadata: notInAContext,
  fireNodeSubscriptions: notInAContext
});

function startNextTreeIfNeeded(storeState) {
  if (storeState.nextTree === null) {
    storeState.nextTree = _objectSpread(_objectSpread({}, storeState.currentTree), {}, {
      dirtyAtoms: new Set(),
      transactionMetadata: {}
    });
  }
}

var AppContext = react.createContext({
  current: defaultStore
});

var useStoreRef = function useStoreRef() {
  return useContext(AppContext);
};
/*
 * The purpose of the Batcher is to observe when React batches end so that
 * Recoil state changes can be batched. Whenever Recoil state changes, we call
 * setState on the batcher. Then we wait for that change to be committed, which
 * signifies the end of the batch. That's when we respond to the Recoil change.
 */


function Batcher(props) {
  var storeRef = useStoreRef();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      _ = _useState2[0],
      setState = _useState2[1];

  props.setNotifyBatcherOfChange(function () {
    return setState({});
  });
  useEffect(function () {
    // enqueueExecution runs this function immediately; it is only used to
    // manipulate the order of useEffects during tests, since React seems to
    // call useEffect in an unpredictable order sometimes.
    Recoil_Queue.enqueueExecution('Batcher', function () {
      var storeState = storeRef.current.getState();
      var nextTree = storeState.nextTree; // Ignore commits that are not because of Recoil transactions -- namely,
      // because something above RecoilRoot re-rendered:

      if (nextTree === null) {
        return;
      } // Inform transaction subscribers of the transaction:


      var dirtyAtoms = nextTree.dirtyAtoms;

      if (dirtyAtoms.size) {
        storeState.transactionSubscriptions.forEach(function (sub) {
          return sub(storeRef.current);
        });
      } // Inform components that depend on dirty atoms of the transaction:
      // FIXME why is this StoreState but dirtyAtoms is TreeState? Seems like they should be the same.


      storeState.queuedComponentCallbacks.forEach(function (cb) {
        return cb(nextTree);
      });
      storeState.queuedComponentCallbacks.splice(0, storeState.queuedComponentCallbacks.length); // nextTree is now committed -- note that copying and reset occurs when
      // a transaction begins, in startNextTreeIfNeeded:

      storeState.currentTree = nextTree;
      storeState.nextTree = null;
    });
  });
  return null;
}

{
  if (typeof window !== 'undefined' && !window.$recoilDebugStates) {
    window.$recoilDebugStates = [];
  }
}

function initialStoreState_DEPRECATED(store, initializeState) {
  var initial = makeEmptyStoreState$1();
  initializeState({
    set: function set(atom, value) {
      initial.currentTree = setNodeValue$2(store, initial.currentTree, atom.key, value)[0];
    },
    setUnvalidatedAtomValues: function setUnvalidatedAtomValues(atomValues) {
      atomValues.forEach(function (v, k) {
        initial.currentTree = setUnvalidatedAtomValue$2(initial.currentTree, k, v);
      });
    }
  });
  return initial;
}

function initialStoreState(initializeState) {
  var snapshot = freshSnapshot$1().map(initializeState);
  return makeStoreState$2(snapshot.getStore_INTERNAL().getState().currentTree);
}

var nextID = 0;

function RecoilRoot(_ref10) {
  var initializeState_DEPRECATED = _ref10.initializeState_DEPRECATED,
      initializeState = _ref10.initializeState,
      children = _ref10.children;
  var storeState; // eslint-disable-line prefer-const

  var subscribeToTransactions = function subscribeToTransactions(callback) {
    var id = nextID++;
    storeRef.current.getState().transactionSubscriptions.set(id, callback);
    return {
      release: function release() {
        storeRef.current.getState().transactionSubscriptions["delete"](id);
      }
    };
  };

  var addTransactionMetadata = function addTransactionMetadata(metadata) {
    startNextTreeIfNeeded(storeRef.current.getState());

    for (var _i2 = 0, _Object$keys = Object.keys(metadata); _i2 < _Object$keys.length; _i2++) {
      var k = _Object$keys[_i2];
      Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k] = metadata[k];
    }
  };

  function fireNodeSubscriptionsForStore(updatedNodes, when) {
    fireNodeSubscriptions$1(storeRef.current, updatedNodes, when);
  }

  var replaceState = function replaceState(replacer) {
    var storeState = storeRef.current.getState();
    startNextTreeIfNeeded(storeState); // Use replacer to get the next state:

    var nextTree = Recoil_nullthrows(storeState.nextTree);
    var replaced = replacer(nextTree);

    if (replaced === nextTree) {
      return;
    }

    {
      if (typeof window !== 'undefined') {
        window.$recoilDebugStates.push(replaced); // TODO this shouldn't happen here because it's not batched
      }
    } // Save changes to nextTree and schedule a React update:

    storeState.nextTree = replaced;
    Recoil_nullthrows(notifyBatcherOfChange.current)();
  };

  var notifyBatcherOfChange = useRef(null);

  function setNotifyBatcherOfChange(x) {
    notifyBatcherOfChange.current = x;
  }

  var store = {
    getState: function getState() {
      return storeState.current;
    },
    replaceState: replaceState,
    subscribeToTransactions: subscribeToTransactions,
    addTransactionMetadata: addTransactionMetadata,
    fireNodeSubscriptions: fireNodeSubscriptionsForStore
  };
  var storeRef = useRef(store);
  storeState = useRef(initializeState_DEPRECATED != null ? initialStoreState_DEPRECATED(store, initializeState_DEPRECATED) : initializeState != null ? initialStoreState(initializeState) : makeEmptyStoreState$1());
  return /*#__PURE__*/react.createElement(AppContext.Provider, {
    value: storeRef
  }, /*#__PURE__*/react.createElement(Batcher, {
    setNotifyBatcherOfChange: setNotifyBatcherOfChange
  }), children);
}

var Recoil_RecoilRoot_react = {
  useStoreRef: useStoreRef,
  RecoilRoot: RecoilRoot
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a set containing all of the values from the first set that are not
 * present in any of the subsequent sets.
 *
 * Note: this is written procedurally (i.e., without filterSet) for performant
 * use in tight loops.
 */

function differenceSets(set) {
  var ret = new Set();

  for (var _len3 = arguments.length, setsWithValuesToRemove = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    setsWithValuesToRemove[_key3 - 1] = arguments[_key3];
  }

  var _iterator4 = _createForOfIteratorHelper(set),
      _step4;

  try {
    FIRST: for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var value = _step4.value;

      var _iterator5 = _createForOfIteratorHelper(setsWithValuesToRemove),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var otherSet = _step5.value;

          if (otherSet.has(value)) {
            continue FIRST;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      ret.add(value);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return ret;
}

var Recoil_differenceSets = differenceSets;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a map containing all of the keys + values from the original map where
 * the given callback returned true.
 */

function filterMap(map, callback) {
  var result = new Map();

  var _iterator6 = _createForOfIteratorHelper(map),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _step6$value = _slicedToArray(_step6.value, 2),
          key = _step6$value[0],
          value = _step6$value[1];

      if (callback(value, key)) {
        result.set(key, value);
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return result;
}

var Recoil_filterMap = filterMap;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Returns the set of values that are present in all the given sets, preserving
 * the order of the first set.
 *
 * Note: this is written procedurally (i.e., without filterSet) for performant
 * use in tight loops.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function intersectSets(first) {
  var ret = new Set();

  for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    rest[_key4 - 1] = arguments[_key4];
  }

  var _iterator7 = _createForOfIteratorHelper(first),
      _step7;

  try {
    FIRST: for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var value = _step7.value;

      var _iterator8 = _createForOfIteratorHelper(rest),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var otherSet = _step8.value;

          if (!otherSet.has(value)) {
            continue FIRST;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      ret.add(value);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return ret;
}

var Recoil_intersectSets = intersectSets;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// prettier-ignore

function invariant(condition, message) {
  // @oss-only
  if (!condition) {
    // @oss-only
    throw new Error(message); // @oss-only
  } // @oss-only

} // @oss-only


var Recoil_invariant = invariant;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function mergeMaps() {
  var result = new Map();

  for (var _len5 = arguments.length, maps = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    maps[_key5] = arguments[_key5];
  }

  for (var i = 0; i < maps.length; i++) {
    var iterator = maps[i].keys();
    var nextKey = void 0;

    while (!(nextKey = iterator.next()).done) {
      // $FlowFixMe - map/iterator knows nothing about flow types
      result.set(nextKey.value, maps[i].get(nextKey.value));
    }
  }
  /* $FlowFixMe(>=0.66.0 site=www,mobile) This comment suppresses an error
   * found when Flow v0.66 was deployed. To see the error delete this comment
   * and run Flow. */


  return result;
}

var Recoil_mergeMaps = mergeMaps;
var useCallback = react.useCallback,
    useEffect$1 = react.useEffect,
    useMemo = react.useMemo,
    useRef$1 = react.useRef,
    useState$1 = react.useState;
var peekNodeLoadable$2 = Recoil_FunctionalCore.peekNodeLoadable,
    setNodeValue$3 = Recoil_FunctionalCore.setNodeValue;
var DEFAULT_VALUE$2 = Recoil_Node.DEFAULT_VALUE,
    getNode$2 = Recoil_Node.getNode,
    nodes$1 = Recoil_Node.nodes;
var useStoreRef$1 = Recoil_RecoilRoot_react.useStoreRef;
var isRecoilValue$1 = Recoil_RecoilValue$1.isRecoilValue;
var AbstractRecoilValue$2 = Recoil_RecoilValueInterface.AbstractRecoilValue,
    getRecoilValueAsLoadable$2 = Recoil_RecoilValueInterface.getRecoilValueAsLoadable,
    setRecoilValue$2 = Recoil_RecoilValueInterface.setRecoilValue,
    setUnvalidatedRecoilValue$1 = Recoil_RecoilValueInterface.setUnvalidatedRecoilValue,
    subscribeToRecoilValue$1 = Recoil_RecoilValueInterface.subscribeToRecoilValue,
    valueFromValueOrUpdater$2 = Recoil_RecoilValueInterface.valueFromValueOrUpdater;
var Snapshot$1 = Recoil_Snapshot$1.Snapshot,
    cloneSnapshot$1 = Recoil_Snapshot$1.cloneSnapshot;
var setByAddingToSet$2 = Recoil_CopyOnWrite.setByAddingToSet;

function cloneState_DEPRECATED(state) {
  return {
    transactionMetadata: _objectSpread({}, state.transactionMetadata),
    atomValues: new Map(state.atomValues),
    nonvalidatedAtoms: new Map(state.nonvalidatedAtoms),
    dirtyAtoms: new Set(state.dirtyAtoms),
    nodeDeps: new Map(state.nodeDeps),
    nodeToNodeSubscriptions: Recoil_mapMap(state.nodeToNodeSubscriptions, function (keys) {
      return new Set(keys);
    }),
    nodeToComponentSubscriptions: Recoil_mapMap(state.nodeToComponentSubscriptions, function (subsByAtom) {
      return new Map(subsByAtom);
    })
  };
}

function handleLoadable(loadable, atom, storeRef) {
  // We can't just throw the promise we are waiting on to Suspense.  If the
  // upstream dependencies change it may produce a state in which the component
  // can render, but it would still be suspended on a Promise that may never resolve.
  if (loadable.state === 'hasValue') {
    return loadable.contents;
  } else if (loadable.state === 'loading') {
    var promise = new Promise(function (resolve) {
      storeRef.current.getState().suspendedComponentResolvers.add(resolve);
    });
    throw promise;
  } else if (loadable.state === 'hasError') {
    throw loadable.contents;
  } else {
    throw new Error("Invalid value of loadable atom \"".concat(atom.key, "\""));
  }
}

function validateRecoilValue(recoilValue, hookName) {
  if (!isRecoilValue$1(recoilValue)) {
    throw new Error("Invalid argument to ".concat(hookName, ": expected an atom or selector but got ").concat(String(recoilValue)));
  }
}

function useInterface() {
  var storeRef = useStoreRef$1();

  var _useState$ = useState$1([]),
      _useState$2 = _slicedToArray(_useState$, 2),
      _ = _useState$2[0],
      forceUpdate = _useState$2[1];

  var recoilValuesUsed = useRef$1(new Set());
  recoilValuesUsed.current = new Set(); // Track the RecoilValues used just during this render

  var previousSubscriptions = useRef$1(new Set());
  var subscriptions = useRef$1(new Map());
  var unsubscribeFrom = useCallback(function (key) {
    var sub = subscriptions.current.get(key);

    if (sub) {
      sub.release(storeRef.current);
      subscriptions.current["delete"](key);
    }
  }, [storeRef, subscriptions]);
  useEffect$1(function () {
    var store = storeRef.current;

    function updateState(_state, key) {
      if (!subscriptions.current.has(key)) {
        return;
      }

      forceUpdate([]);
    }

    Recoil_differenceSets(recoilValuesUsed.current, previousSubscriptions.current).forEach(function (key) {
      if (subscriptions.current.has(key)) {
        Recoil_expectationViolation("Double subscription to RecoilValue \"".concat(key, "\""));
        return;
      }

      var sub = subscribeToRecoilValue$1(store, new AbstractRecoilValue$2(key), function (state) {
        Recoil_Tracing.trace('RecoilValue subscription fired', key, function () {
          updateState(state, key);
        });
      });
      subscriptions.current.set(key, sub);
      Recoil_Tracing.trace('initial update on subscribing', key, function () {
        updateState(store.getState(), key);
      });
    });
    Recoil_differenceSets(previousSubscriptions.current, recoilValuesUsed.current).forEach(function (key) {
      unsubscribeFrom(key);
    });
    previousSubscriptions.current = recoilValuesUsed.current;
  });
  useEffect$1(function () {
    var subs = subscriptions.current;
    return function () {
      return subs.forEach(function (_, key) {
        return unsubscribeFrom(key);
      });
    };
  }, [unsubscribeFrom]);
  return useMemo(function () {
    function useSetRecoilState(recoilState) {
      {
        validateRecoilValue(recoilState, 'useSetRecoilState');
      }
      return function (newValueOrUpdater) {
        var newValue = valueFromValueOrUpdater$2(storeRef.current, recoilState, newValueOrUpdater);
        setRecoilValue$2(storeRef.current, recoilState, newValue);
      };
    }

    function useResetRecoilState(recoilState) {
      {
        validateRecoilValue(recoilState, 'useResetRecoilState');
      }
      return function () {
        return setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
      };
    }

    function useRecoilValueLoadable(recoilValue) {
      {
        validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
      }

      if (!recoilValuesUsed.current.has(recoilValue.key)) {
        recoilValuesUsed.current = setByAddingToSet$2(recoilValuesUsed.current, recoilValue.key);
      } // TODO Restore optimization to memoize lookup


      return getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
    }

    function useRecoilValue(recoilValue) {
      {
        validateRecoilValue(recoilValue, 'useRecoilValue');
      }
      var loadable = useRecoilValueLoadable(recoilValue);
      return handleLoadable(loadable, recoilValue, storeRef);
    }

    function useRecoilState(recoilState) {
      {
        validateRecoilValue(recoilState, 'useRecoilState');
      }
      return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
    }

    function useRecoilStateLoadable(recoilState) {
      {
        validateRecoilValue(recoilState, 'useRecoilStateLoadable');
      }
      return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
    }

    return {
      getRecoilValue: useRecoilValue,
      getRecoilValueLoadable: useRecoilValueLoadable,
      getRecoilState: useRecoilState,
      getRecoilStateLoadable: useRecoilStateLoadable,
      getSetRecoilState: useSetRecoilState,
      getResetRecoilState: useResetRecoilState
    };
  }, [recoilValuesUsed, storeRef]);
}
/**
  Returns the value represented by the RecoilValue.
  If the value is pending, it will throw a Promise to suspend the component,
  if the value is an error it will throw it for the nearest React error boundary.
  This will also subscribe the component for any updates in the value.
  */


function useRecoilValue(recoilValue) {
  return useInterface().getRecoilValue(recoilValue);
}
/**
  Like useRecoilValue(), but either returns the value if available or
  just undefined if not available for any reason, such as pending or error.
*/


function useRecoilValueLoadable(recoilValue) {
  return useInterface().getRecoilValueLoadable(recoilValue);
}
/**
  Returns a function that allows the value of a RecoilState to be updated, but does
  not subscribe the component to changes to that RecoilState.
*/


function useSetRecoilState(recoilState) {
  return useCallback(useInterface().getSetRecoilState(recoilState), [recoilState]);
}
/**
  Returns a function that will reset the value of a RecoilState to its default
*/


function useResetRecoilState(recoilState) {
  return useCallback(useInterface().getResetRecoilState(recoilState), [recoilState]);
}
/**
  Equivalent to useState(). Allows the value of the RecoilState to be read and written.
  Subsequent updates to the RecoilState will cause the component to re-render. If the
  RecoilState is pending, this will suspend the component and initiate the
  retrieval of the value. If evaluating the RecoilState resulted in an error, this will
  throw the error so that the nearest React error boundary can catch it.
*/


function useRecoilState(recoilState) {
  var recoilInterface = useInterface();

  var _recoilInterface$getR = recoilInterface.getRecoilState(recoilState),
      _recoilInterface$getR2 = _slicedToArray(_recoilInterface$getR, 1),
      value = _recoilInterface$getR2[0];

  var setValue = useCallback(recoilInterface.getSetRecoilState(recoilState), [recoilState]);
  return [value, setValue];
}
/**
  Like useRecoilState(), but does not cause Suspense or React error handling. Returns
  an object that indicates whether the RecoilState is available, pending, or
  unavailable due to an error.
*/


function useRecoilStateLoadable(recoilState) {
  var recoilInterface = useInterface();

  var _recoilInterface$getR3 = recoilInterface.getRecoilStateLoadable(recoilState),
      _recoilInterface$getR4 = _slicedToArray(_recoilInterface$getR3, 1),
      value = _recoilInterface$getR4[0];

  var setValue = useCallback(recoilInterface.getSetRecoilState(recoilState), [recoilState]);
  return [value, setValue];
}

function useTransactionSubscription(callback) {
  var storeRef = useStoreRef$1();
  useEffect$1(function () {
    var sub = storeRef.current.subscribeToTransactions(callback);
    return sub.release;
  }, [callback, storeRef]);
} // TODO instead of force update can put snapshot into local state


function useTreeStateClone_DEPRECATED() {
  var _useState$3 = useState$1(0),
      _useState$4 = _slicedToArray(_useState$3, 2),
      _ = _useState$4[0],
      setState = _useState$4[1];

  var forceUpdate = useCallback(function () {
    return setState(function (x) {
      return x + 1;
    });
  }, []);
  useTransactionSubscription(forceUpdate);
  var storeRef = useStoreRef$1();
  return cloneState_DEPRECATED(storeRef.current.getState().currentTree);
}

function useSnapshotWithStateChange_DEPRECATED(transaction) {
  var storeRef = useStoreRef$1();
  var snapshot = useTreeStateClone_DEPRECATED();

  var update = function update(_ref11, updater) {
    var key = _ref11.key;

    var _setNodeValue$3 = setNodeValue$3(storeRef.current, snapshot, key, peekNodeLoadable$2(storeRef.current, snapshot, key).map(updater));

    var _setNodeValue$4 = _slicedToArray(_setNodeValue$3, 1);

    snapshot = _setNodeValue$4[0];
  };

  transaction(update);
  var atomValues = Recoil_mapMap(snapshot.atomValues, function (v) {
    return v.contents;
  }); // Only report atoms, not selectors

  var updatedAtoms = Recoil_intersectSets(snapshot.dirtyAtoms, new Set(atomValues.keys()));
  return {
    atomValues: atomValues,
    updatedAtoms: updatedAtoms
  };
}

function externallyVisibleAtomValuesInState(state) {
  var atomValues = state.atomValues;
  var persistedAtomContentsValues = Recoil_mapMap(Recoil_filterMap(atomValues, function (v, k) {
    var _node$options;

    var node = getNode$2(k);
    var persistence = (_node$options = node.options) === null || _node$options === void 0 ? void 0 : _node$options.persistence_UNSTABLE;
    return persistence != null && persistence.type !== 'none' && v.state === 'hasValue';
  }), function (v) {
    return v.contents;
  }); // Merge in nonvalidated atoms; we may not have defs for them but they will
  // all have persistence on or they wouldn't be there in the first place.

  return Recoil_mergeMaps(state.nonvalidatedAtoms, persistedAtomContentsValues);
}
/**
  Calls the given callback after any atoms have been modified and the consequent
  component re-renders have been committed. This is intended for persisting
  the values of the atoms to storage. The stored values can then be restored
  using the useSetUnvalidatedAtomValues hook.

  The callback receives the following info:

  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.
*/


function useTransactionObservation_DEPRECATED(callback) {
  useTransactionSubscription(useCallback(function (store) {
    var previousState = store.getState().currentTree;
    var nextState = store.getState().nextTree;

    if (!nextState) {
      Recoil_recoverableViolation('Transaction subscribers notified without a next tree being present -- this is a bug in Recoil');
      nextState = store.getState().currentTree; // attempt to trundle on
    }

    var atomValues = externallyVisibleAtomValuesInState(nextState);
    var previousAtomValues = externallyVisibleAtomValuesInState(previousState);
    var atomInfo = Recoil_mapMap(nodes$1, function (node) {
      var _node$options$persist, _node$options2, _node$options2$persis, _node$options$persist2, _node$options3, _node$options3$persis;

      return {
        persistence_UNSTABLE: {
          type: (_node$options$persist = (_node$options2 = node.options) === null || _node$options2 === void 0 ? void 0 : (_node$options2$persis = _node$options2.persistence_UNSTABLE) === null || _node$options2$persis === void 0 ? void 0 : _node$options2$persis.type) !== null && _node$options$persist !== void 0 ? _node$options$persist : 'none',
          backButton: (_node$options$persist2 = (_node$options3 = node.options) === null || _node$options3 === void 0 ? void 0 : (_node$options3$persis = _node$options3.persistence_UNSTABLE) === null || _node$options3$persis === void 0 ? void 0 : _node$options3$persis.backButton) !== null && _node$options$persist2 !== void 0 ? _node$options$persist2 : false
        }
      };
    });
    var modifiedAtoms = new Set(nextState.dirtyAtoms);
    callback({
      atomValues: atomValues,
      previousAtomValues: previousAtomValues,
      atomInfo: atomInfo,
      modifiedAtoms: modifiedAtoms,
      transactionMetadata: _objectSpread({}, nextState.transactionMetadata)
    });
  }, [callback]));
}

function useRecoilTransactionObserver(callback) {
  useTransactionSubscription(useCallback(function (store) {
    var previousState = store.getState().currentTree;
    var nextState = store.getState().nextTree;

    if (!nextState) {
      Recoil_recoverableViolation('Transaction subscribers notified without a next tree being present -- this is a bug in Recoil');
      nextState = previousState; // attempt to trundle on
    }

    callback({
      snapshot: cloneSnapshot$1(nextState),
      previousSnapshot: cloneSnapshot$1(previousState)
    });
  }, [callback]));
} // Return a snapshot of the current state and subscribe to all state changes


function useRecoilSnapshot() {
  var store = useStoreRef$1();

  var _useState$5 = useState$1(function () {
    return cloneSnapshot$1(store.current.getState().currentTree);
  }),
      _useState$6 = _slicedToArray(_useState$5, 2),
      snapshot = _useState$6[0],
      setSnapshot = _useState$6[1];

  useTransactionSubscription(useCallback(function (store) {
    var _store$getState$nextT;

    return setSnapshot(cloneSnapshot$1((_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree));
  }, []));
  return snapshot;
}

function useGoToSnapshot_DEPRECATED() {
  var storeRef = useStoreRef$1();
  return function (snapshot) {
    reactDom.unstable_batchedUpdates(function () {
      snapshot.updatedAtoms.forEach(function (key) {
        setRecoilValue$2(storeRef.current, new AbstractRecoilValue$2(key), snapshot.atomValues.get(key));
      });
    });
  };
}

function useGotoRecoilSnapshot() {
  var storeRef = useStoreRef$1();
  return useCallback(function (snapshot) {
    reactDom.unstable_batchedUpdates(function () {
      storeRef.current.replaceState(function (prevState) {
        var nextState = snapshot.getStore_INTERNAL().getState().currentTree; // Fire subscriptions for any atoms that changed values

        var updatedKeys = new Set(); // Going through both seems to be more efficient than constructing a union set of keys

        for (var _i3 = 0, _arr2 = [prevState.atomValues.keys(), nextState.atomValues.keys()]; _i3 < _arr2.length; _i3++) {
          var keys = _arr2[_i3];

          var _iterator9 = _createForOfIteratorHelper(keys),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var key = _step9.value;

              var _prevState$atomValues, _nextState$atomValues;

              if (((_prevState$atomValues = prevState.atomValues.get(key)) === null || _prevState$atomValues === void 0 ? void 0 : _prevState$atomValues.contents) !== ((_nextState$atomValues = nextState.atomValues.get(key)) === null || _nextState$atomValues === void 0 ? void 0 : _nextState$atomValues.contents)) {
                updatedKeys.add(key);
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }

        storeRef.current.fireNodeSubscriptions(updatedKeys, 'enqueue');
        return _objectSpread(_objectSpread({}, nextState), {}, {
          nodeToComponentSubscriptions: prevState.nodeToComponentSubscriptions
        });
      });
    });
  }, [storeRef]);
}

function useSetUnvalidatedAtomValues() {
  var storeRef = useStoreRef$1();
  return function (values) {
    var transactionMetadata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    reactDom.unstable_batchedUpdates(function () {
      storeRef.current.addTransactionMetadata(transactionMetadata);
      values.forEach(function (value, key) {
        return setUnvalidatedRecoilValue$1(storeRef.current, new AbstractRecoilValue$2(key), value);
      });
    });
  };
}

var Sentinel = function Sentinel() {
  _classCallCheck(this, Sentinel);
};

var SENTINEL = new Sentinel();

function useRecoilCallback(fn, deps) {
  var storeRef = useStoreRef$1();
  var gotoSnapshot = useGotoRecoilSnapshot();
  return useCallback(function () {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    // Use currentTree for the snapshot to show the currently committed stable state
    var snapshot = cloneSnapshot$1(storeRef.current.getState().currentTree);

    function set(recoilState, newValueOrUpdater) {
      var newValue = valueFromValueOrUpdater$2(storeRef.current, recoilState, newValueOrUpdater);
      setRecoilValue$2(storeRef.current, recoilState, newValue);
    }

    function reset(recoilState) {
      setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    }

    var ret = SENTINEL;
    reactDom.unstable_batchedUpdates(function () {
      // flowlint-next-line unclear-type:off
      ret = fn({
        set: set,
        reset: reset,
        snapshot: snapshot,
        gotoSnapshot: gotoSnapshot
      }).apply(void 0, args);
    });
    !!(ret instanceof Sentinel) ? Recoil_invariant(false, 'unstable_batchedUpdates should return immediately') : void 0;
    return ret;
  }, deps != null ? [].concat(_toConsumableArray(deps), [storeRef]) : undefined // eslint-disable-line fb-www/react-hooks-deps
  );
}

var Recoil_Hooks = {
  useRecoilCallback: useRecoilCallback,
  useRecoilValue: useRecoilValue,
  useRecoilValueLoadable: useRecoilValueLoadable,
  useRecoilState: useRecoilState,
  useRecoilStateLoadable: useRecoilStateLoadable,
  useSetRecoilState: useSetRecoilState,
  useResetRecoilState: useResetRecoilState,
  useRecoilInterface: useInterface,
  useSnapshotWithStateChange_DEPRECATED: useSnapshotWithStateChange_DEPRECATED,
  useTransactionSubscription_DEPRECATED: useTransactionSubscription,
  useTransactionObservation_DEPRECATED: useTransactionObservation_DEPRECATED,
  useRecoilTransactionObserver: useRecoilTransactionObserver,
  useRecoilSnapshot: useRecoilSnapshot,
  useGoToSnapshot_DEPRECATED: useGoToSnapshot_DEPRECATED,
  useGotoRecoilSnapshot: useGotoRecoilSnapshot,
  useSetUnvalidatedAtomValues: useSetUnvalidatedAtomValues
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// Split declaration and implementation to allow this function to pretend to
// check for actual instance of Promise instead of something with a `then`
// method.
// eslint-disable-next-line no-redeclare

function isPromise(p) {
  return !!p && typeof p.then === 'function';
}

var Recoil_isPromise = isPromise; // TODO Convert Loadable to a Class to allow for runtime type detection.
// Containing static factories of withValue(), withError(), withPromise(), and all()

var loadableAccessors = {
  getValue: function getValue() {
    if (this.state !== 'hasValue') {
      throw this.contents; // Throw Error, or Promise for the loading state
    }

    return this.contents;
  },
  toPromise: function toPromise() {
    return this.state === 'hasValue' ? Promise.resolve(this.contents) : this.state === 'hasError' ? Promise.reject(this.contents) : this.contents;
  },
  valueMaybe: function valueMaybe() {
    return this.state === 'hasValue' ? this.contents : undefined;
  },
  valueOrThrow: function valueOrThrow() {
    if (this.state !== 'hasValue') {
      throw new Error("Loadable expected value, but in \"".concat(this.state, "\" state"));
    }

    return this.contents;
  },
  errorMaybe: function errorMaybe() {
    return this.state === 'hasError' ? this.contents : undefined;
  },
  errorOrThrow: function errorOrThrow() {
    if (this.state !== 'hasError') {
      throw new Error("Loadable expected error, but in \"".concat(this.state, "\" state"));
    }

    return this.contents;
  },
  promiseMaybe: function promiseMaybe() {
    return this.state === 'loading' ? this.contents : undefined;
  },
  promiseOrThrow: function promiseOrThrow() {
    if (this.state !== 'loading') {
      throw new Error("Loadable expected promise, but in \"".concat(this.state, "\" state"));
    }

    return this.contents;
  },
  // TODO Unit tests
  // TODO Convert Loadable to a Class to better support chaining
  //      by returning a Loadable from a map function
  map: function map(_map) {
    var _this3 = this;

    if (this.state === 'hasError') {
      return this;
    }

    if (this.state === 'hasValue') {
      try {
        var next = _map(this.contents); // TODO if next instanceof Loadable, then return next


        return Recoil_isPromise(next) ? loadableWithPromise(next) : loadableWithValue(next);
      } catch (e) {
        return Recoil_isPromise(e) ? // If we "suspended", then try again.
        // errors and subsequent retries will be handled in 'loading' case
        loadableWithPromise(e.next(function () {
          return _map(_this3.contents);
        })) : loadableWithError(e);
      }
    }

    if (this.state === 'loading') {
      return loadableWithPromise(this.contents // TODO if map returns a loadable, then return the value or promise or throw the error
      .then(_map)["catch"](function (e) {
        if (Recoil_isPromise(e)) {
          // we were "suspended," try again
          return e.then(function () {
            return _map(_this3.contents);
          });
        }

        throw e;
      }));
    }

    throw new Error('Invalid Loadable state');
  }
};

function loadableWithValue(value) {
  // Build objects this way since Flow doesn't support disjoint unions for class properties
  return Object.freeze(_objectSpread({
    state: 'hasValue',
    contents: value
  }, loadableAccessors));
}

function loadableWithError(error) {
  return Object.freeze(_objectSpread({
    state: 'hasError',
    contents: error
  }, loadableAccessors));
}

function loadableWithPromise(promise) {
  return Object.freeze(_objectSpread({
    state: 'loading',
    contents: promise
  }, loadableAccessors));
}

function loadableLoading() {
  return loadableWithPromise(new Promise(function () {}));
}

function loadableAll(inputs) {
  return inputs.every(function (i) {
    return i.state === 'hasValue';
  }) ? loadableWithValue(inputs.map(function (i) {
    return i.contents;
  })) : inputs.some(function (i) {
    return i.state === 'hasError';
  }) ? loadableWithError( // $FlowIssue #44070740 Array.find should refine parameter
  Recoil_nullthrows(inputs.find(function (i) {
    return i.state === 'hasError';
  }), 'Invalid loadable passed to loadableAll').contents) : loadableWithPromise(Promise.all(inputs.map(function (i) {
    return i.contents;
  })));
}

var Recoil_Loadable = {
  loadableWithValue: loadableWithValue,
  loadableWithError: loadableWithError,
  loadableWithPromise: loadableWithPromise,
  loadableLoading: loadableLoading,
  loadableAll: loadableAll
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function isNode(object) {
  var _ownerDocument, _doc$defaultView;

  if (typeof window === 'undefined') {
    return false;
  }

  var doc = object != null ? (_ownerDocument = object.ownerDocument) !== null && _ownerDocument !== void 0 ? _ownerDocument : object : document;
  var defaultView = (_doc$defaultView = doc.defaultView) !== null && _doc$defaultView !== void 0 ? _doc$defaultView : window;
  return !!(object != null && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

var Recoil_isNode = isNode;

function shouldNotBeFrozen(value) {
  // Primitives and functions:
  if (value === null || _typeof(value) !== 'object') {
    return true;
  } // React elements:


  switch (_typeof(value.$$typeof)) {
    case 'symbol':
      return true;

    case 'number':
      return true;
  } // Immutable structures:


  if (value['@@__IMMUTABLE_ITERABLE__@@'] != null || value['@@__IMMUTABLE_KEYED__@@'] != null || value['@@__IMMUTABLE_INDEXED__@@'] != null || value['@@__IMMUTABLE_ORDERED__@@'] != null || value['@@__IMMUTABLE_RECORD__@@'] != null) {
    return true;
  } // DOM nodes:


  if (Recoil_isNode(value)) {
    return true;
  }

  if (Recoil_isPromise(value)) {
    return true;
  }

  return false;
} // Recursively freeze a value to enforce it is read-only.
// This may also have minimal performance improvements for enumerating
// objects (based on browser implementations, of course)


function deepFreezeValue(value) {
  if (_typeof(value) !== 'object' || shouldNotBeFrozen(value)) {
    return;
  }

  Object.freeze(value); // Make all properties read-only

  for (var key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      var prop = value[key]; // Prevent infinite recurssion for circular references.

      if (_typeof(prop) === 'object' && prop != null && !Object.isFrozen(prop)) {
        deepFreezeValue(prop);
      }
    }
  }

  Object.seal(value); // This also makes existing properties non-configurable.
}

var Recoil_deepFreezeValue = deepFreezeValue;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Implements (a subset of) the interface of built-in Map but supports arrays as
 * keys. Two keys are equal if corresponding elements are equal according to the
 * equality semantics of built-in Map. Operations are at worst O(n*b) where n is
 * the array length and b is the complexity of the built-in operation.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

var LEAF = Symbol('ArrayKeyedMap');
var emptyMap$1 = new Map();

var ArrayKeyedMap = /*#__PURE__*/function () {
  // @fb-only: _base: Map<any, any> = new Map();
  function ArrayKeyedMap(existing) {
    _classCallCheck(this, ArrayKeyedMap);

    // $FlowOSSFixMe
    this._base = new Map(); // @oss-only

    if (existing instanceof ArrayKeyedMap) {
      var _iterator10 = _createForOfIteratorHelper(existing.entries()),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _step10$value = _slicedToArray(_step10.value, 2),
              k = _step10$value[0],
              v = _step10$value[1];

          this.set(k, v);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    } else if (existing) {
      var _iterator11 = _createForOfIteratorHelper(existing),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _step11$value = _slicedToArray(_step11.value, 2),
              _k = _step11$value[0],
              _v = _step11$value[1];

          this.set(_k, _v);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }

    return this;
  }

  _createClass(ArrayKeyedMap, [{
    key: "get",
    value: function get(key) {
      var ks = Array.isArray(key) ? key : [key]; // $FlowOSSFixMe

      var map = this._base;
      ks.forEach(function (k) {
        var _map$get;

        map = (_map$get = map.get(k)) !== null && _map$get !== void 0 ? _map$get : emptyMap$1;
      });
      return map === undefined ? undefined : map.get(LEAF);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var ks = Array.isArray(key) ? key : [key]; // $FlowOSSFixMe

      var map = this._base;
      var next = map;
      ks.forEach(function (k) {
        next = map.get(k);

        if (!next) {
          next = new Map();
          map.set(k, next);
        }

        map = next;
      });
      next.set(LEAF, value);
      return this;
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var ks = Array.isArray(key) ? key : [key]; // $FlowOSSFixMe

      var map = this._base;
      var next = map;
      ks.forEach(function (k) {
        next = map.get(k);

        if (!next) {
          next = new Map();
          map.set(k, next);
        }

        map = next;
      });
      next["delete"](LEAF); // TODO We could cleanup empty maps

      return this;
    }
  }, {
    key: "entries",
    value: function entries() {
      var answer = [];

      function recurse(level, prefix) {
        level.forEach(function (v, k) {
          if (k === LEAF) {
            answer.push([prefix, v]);
          } else {
            recurse(v, prefix.concat(k));
          }
        });
      } // $FlowOSSFixMe


      recurse(this._base, []);
      return answer.values();
    }
  }, {
    key: "toBuiltInMap",
    value: function toBuiltInMap() {
      return new Map(this.entries());
    }
  }]);

  return ArrayKeyedMap;
}();

var Recoil_ArrayKeyedMap = ArrayKeyedMap;

function cacheWithReferenceEquality() {
  return new Recoil_ArrayKeyedMap();
}

var Recoil_cacheWithReferenceEquality = cacheWithReferenceEquality;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * The everySet() method tests whether all elements in the given Set pass the
 * test implemented by the provided function.
 */

function everySet(set, callback, context) {
  var iterator = set.entries();
  var current = iterator.next();

  while (!current.done) {
    var entry = current.value;

    if (!callback.call(context, entry[1], entry[0], set)) {
      return false;
    }

    current = iterator.next();
  }

  return true;
}

var Recoil_everySet = everySet;
/**
 * Checks if two sets are equal
 */

function equalsSet(one, two) {
  if (one.size !== two.size) {
    return false;
  }

  return Recoil_everySet(one, function (value) {
    return two.has(value);
  });
}

var Recoil_equalsSet = equalsSet;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is a stub for some integration into FB internal stuff
 */

function startPerfBlock(_id) {
  return function () {
    return null;
  };
}

var Recoil_PerformanceTimings = {
  startPerfBlock: startPerfBlock
};
var emptySet$1 = Object.freeze(new Set());
var mapBySettingInMap$2 = Recoil_CopyOnWrite.mapBySettingInMap,
    mapByUpdatingInMap$2 = Recoil_CopyOnWrite.mapByUpdatingInMap,
    setByAddingToSet$3 = Recoil_CopyOnWrite.setByAddingToSet,
    setByDeletingFromSet$1 = Recoil_CopyOnWrite.setByDeletingFromSet;
var detectCircularDependencies$1 = Recoil_FunctionalCore.detectCircularDependencies,
    getNodeLoadable$2 = Recoil_FunctionalCore.getNodeLoadable,
    setNodeValue$4 = Recoil_FunctionalCore.setNodeValue;
var loadableWithError$1 = Recoil_Loadable.loadableWithError,
    loadableWithPromise$1 = Recoil_Loadable.loadableWithPromise,
    loadableWithValue$1 = Recoil_Loadable.loadableWithValue;
var DEFAULT_VALUE$3 = Recoil_Node.DEFAULT_VALUE,
    RecoilValueNotReady$2 = Recoil_Node.RecoilValueNotReady,
    registerNode$1 = Recoil_Node.registerNode;
var startPerfBlock$1 = Recoil_PerformanceTimings.startPerfBlock;
var isRecoilValue$2 = Recoil_RecoilValue$1.isRecoilValue; // flowlint-next-line unclear-type:off

var emptySet$2 = Object.freeze(new Set());

function cacheKeyFromDepValues(depValues) {
  var answer = [];

  var _iterator12 = _createForOfIteratorHelper(Array.from(depValues.keys()).sort()),
      _step12;

  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var key = _step12.value;
      var loadable = Recoil_nullthrows(depValues.get(key));
      answer.push(key);
      answer.push(loadable.contents);
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }

  return answer;
}
/* eslint-disable no-redeclare */


function selector(options) {
  var key = options.key,
      get = options.get,
      cacheImplementation = options.cacheImplementation_UNSTABLE;
  var set = options.set != null ? options.set : undefined; // flow

  var cache = cacheImplementation !== null && cacheImplementation !== void 0 ? cacheImplementation : Recoil_cacheWithReferenceEquality();

  function putIntoCache(store, cacheKey, loadable) {
    if (loadable.state !== 'loading') {
      // Synchronous result
      if (!options.dangerouslyAllowMutability === true) {
        Recoil_deepFreezeValue(loadable.contents);
      }
    } else {
      // Asynchronous result
      // When the promise resolves, we need to replace the loading state in the
      // cache and fire any external subscriptions to re-render with the new value.
      loadable.contents.then(function (result) {
        // If the value is now resolved, then update the cache with the new value
        if (!options.dangerouslyAllowMutability === true) {
          Recoil_deepFreezeValue(result);
        }

        cache = cache.set(cacheKey, loadableWithValue$1(result)); // TODO Potential optimization: I think this is updating the cache
        // with a cacheKey of the dep when it wasn't ready yet.  We could also
        // theoretically put the result in the cache for a cacheKey with the
        // dep resolved.  If we had some way of figuring out what that cacheKey was..
        // Note that this optimization would change the user visible behavior slightly,
        // see the unit test "useRecoilState - selector catching promise 2".
        // If the user catches and handles pending async dependencies, then returns
        // a promise that resolves when they are available there is a question if
        // the result of that promise should be the value of the selector, or if
        // the selector should re-evaluate when the dependency is available.
        // If the promise returned and the pending dependency resolve at different
        // times, then the behaviour is better defined, as in the unit test,
        // "useRecoilState - selector catching promise and resolving asynchronously"
        // Fire subscriptions to re-render any subscribed components with the new value.
        // The store uses the CURRENT state, not the old state from which
        // this was called.  That state likely doesn't have the subscriptions saved yet.

        store.fireNodeSubscriptions(new Set([key]), 'now');
        return result;
      })["catch"](function (error) {
        // TODO Figure out why we are catching promises here versus evaluateSelectorFunction
        // OH, I see why.  Ok, work on this.
        if (Recoil_isPromise(error)) {
          return error;
        } // The async value was rejected with an error.  Update the cache with
        // the error and fire subscriptions to re-render.


        if (!options.dangerouslyAllowMutability === true) {
          Recoil_deepFreezeValue(error);
        }

        cache = cache.set(cacheKey, loadableWithError$1(error));
        store.fireNodeSubscriptions(new Set([key]), 'now');
        return error;
      });
    }

    cache = cache.set(cacheKey, loadable);
  }

  function getFromCache(store, state) {
    var _state$nodeDeps$get;

    var newState = state; // First, get the current deps for this selector

    var currentDeps = (_state$nodeDeps$get = state.nodeDeps.get(key)) !== null && _state$nodeDeps$get !== void 0 ? _state$nodeDeps$get : emptySet$2;
    var depValues = new Map(Array.from(currentDeps).sort().map(function (depKey) {
      var _getNodeLoadable$3 = getNodeLoadable$2(store, newState, depKey),
          _getNodeLoadable$4 = _slicedToArray(_getNodeLoadable$3, 2),
          nextState = _getNodeLoadable$4[0],
          loadable = _getNodeLoadable$4[1];

      newState = nextState;
      return [depKey, loadable];
    })); // Always cache and evaluate a selector
    // It may provide a result even when not all deps are available.

    var cacheKey = cacheKeyFromDepValues(depValues);
    var cached = cache.get(cacheKey);

    if (cached != null) {
      return [newState, cached];
    } // Cache miss, compute the value


    var _computeAndSubscribeS = computeAndSubscribeSelector(store, newState),
        _computeAndSubscribeS2 = _slicedToArray(_computeAndSubscribeS, 3),
        nextState = _computeAndSubscribeS2[0],
        loadable = _computeAndSubscribeS2[1],
        newDepValues = _computeAndSubscribeS2[2];

    newState = nextState; // Save result in cache

    var newCacheKey = cacheKeyFromDepValues(newDepValues);
    putIntoCache(store, newCacheKey, loadable);
    return [newState, loadable];
  }

  function evaluateSelectorFunction(store, state) {
    var endPerfBlock = startPerfBlock$1(key);
    var newState = state;
    var depValues = new Map();

    function getRecoilValue(_ref12) {
      var key = _ref12.key;
      var loadable;

      var _getNodeLoadable$5 = getNodeLoadable$2(store, newState, key);

      var _getNodeLoadable$6 = _slicedToArray(_getNodeLoadable$5, 2);

      newState = _getNodeLoadable$6[0];
      loadable = _getNodeLoadable$6[1];
      depValues.set(key, loadable);

      if (loadable.state === 'hasValue') {
        return loadable.contents;
      } else {
        throw loadable.contents; // Promise or error
      }
    }

    try {
      // The big moment!
      var output = get({
        get: getRecoilValue
      });
      var result = isRecoilValue$2(output) ? getRecoilValue(output) : output; // TODO Allow user to also return Loadables for improved composability

      var loadable = !Recoil_isPromise(result) ? ( // The selector returned a simple synchronous value, so let's use it!
      endPerfBlock(), loadableWithValue$1(result)) : // The user returned a promise for an asynchronous selector.  This will
      // resolve to the proper value of the selector when available.
      loadableWithPromise$1(result["finally"](endPerfBlock));
      return [newState, loadable, depValues];
    } catch (errorOrDepPromise) {
      var _loadable = !Recoil_isPromise(errorOrDepPromise) ? ( // There was a synchronous error in the evaluation
      endPerfBlock(), loadableWithError$1(errorOrDepPromise)) : // If an asynchronous dependency was not ready, then return a promise that
      // will resolve when we finally do have a real value or error for the selector.
      loadableWithPromise$1(errorOrDepPromise.then(function () {
        // The dependency we were waiting on is now available.
        // So, let's try to evaluate the selector again and return that value.
        var loadable = loadableWithError$1(new Error('Internal Recoil Selector Error') // To make Flow happy
        ); // This is done asynchronously, so we need to make sure to save the state

        store.replaceState(function (asyncState) {
          var newAsyncState;

          var _getFromCache = getFromCache(store, asyncState);

          var _getFromCache2 = _slicedToArray(_getFromCache, 2);

          newAsyncState = _getFromCache2[0];
          loadable = _getFromCache2[1];
          return newAsyncState;
        });

        if (loadable.state === 'hasError') {
          throw loadable.contents;
        } // Either the re-try provided a value, which we will use, or it
        // got blocked again.  In that case this is a promise and we'll try again.


        return loadable.contents;
      })["finally"](endPerfBlock));

      return [newState, _loadable, depValues];
    }
  }

  function computeAndSubscribeSelector(store, state) {
    var _state$nodeDeps$get2; // Call the selector get evaluation function to get the new value


    var _evaluateSelectorFunc = evaluateSelectorFunction(store, state),
        _evaluateSelectorFunc2 = _slicedToArray(_evaluateSelectorFunc, 3),
        newStateFromEvaluate = _evaluateSelectorFunc2[0],
        loadable = _evaluateSelectorFunc2[1],
        newDepValues = _evaluateSelectorFunc2[2];

    var newState = newStateFromEvaluate; // Update state with new upsteram dependencies

    var oldDeps = (_state$nodeDeps$get2 = state.nodeDeps.get(key)) !== null && _state$nodeDeps$get2 !== void 0 ? _state$nodeDeps$get2 : emptySet$2;
    var newDeps = new Set(newDepValues.keys());
    newState = Recoil_equalsSet(oldDeps, newDeps) ? newState : _objectSpread(_objectSpread({}, newState), {}, {
      nodeDeps: mapBySettingInMap$2(newState.nodeDeps, key, newDeps)
    }); // Update state with new downstream subscriptions

    var addedDeps = Recoil_differenceSets(newDeps, oldDeps);
    var removedDeps = Recoil_differenceSets(oldDeps, newDeps);

    var _iterator13 = _createForOfIteratorHelper(addedDeps),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var upstreamNode = _step13.value;
        newState = _objectSpread(_objectSpread({}, newState), {}, {
          nodeToNodeSubscriptions: mapByUpdatingInMap$2(newState.nodeToNodeSubscriptions, upstreamNode, function (subs) {
            return setByAddingToSet$3(subs !== null && subs !== void 0 ? subs : emptySet$2, key);
          })
        });
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    var _iterator14 = _createForOfIteratorHelper(removedDeps),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _upstreamNode = _step14.value;
        newState = _objectSpread(_objectSpread({}, newState), {}, {
          nodeToNodeSubscriptions: mapByUpdatingInMap$2(newState.nodeToNodeSubscriptions, _upstreamNode, function (subs) {
            return setByDeletingFromSet$1(subs !== null && subs !== void 0 ? subs : emptySet$2, key);
          })
        });
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }

    {
      detectCircularDependencies$1(newState, [key]);
    }
    return [newState, loadable, newDepValues];
  }

  function myGet(store, state) {
    // TODO memoize a value if no deps have changed to avoid a cache lookup
    // Lookup the node value in the cache.  If not there, then compute
    // the value and update the state with any changed node subscriptions.
    return getFromCache(store, state);
  }

  if (set != null) {
    var mySet = function mySet(store, state, newValue) {
      var newState = state;
      var writtenNodes = new Set();

      function getRecoilValue(_ref13) {
        var key = _ref13.key;

        var _getNodeLoadable$7 = getNodeLoadable$2(store, newState, key),
            _getNodeLoadable$8 = _slicedToArray(_getNodeLoadable$7, 2),
            nextState = _getNodeLoadable$8[0],
            loadable = _getNodeLoadable$8[1];

        newState = nextState;

        if (loadable.state === 'hasValue') {
          return loadable.contents;
        } else if (loadable.state === 'loading') {
          throw new RecoilValueNotReady$2(key);
        } else {
          throw loadable.contents;
        }
      }

      function setRecoilState(recoilState, valueOrUpdater) {
        var newValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
        // flowlint-next-line unclear-type:off
        valueOrUpdater(getRecoilValue(recoilState)) : valueOrUpdater;
        var written;

        var _setNodeValue$5 = setNodeValue$4(store, newState, recoilState.key, newValue);

        var _setNodeValue$6 = _slicedToArray(_setNodeValue$5, 2);

        newState = _setNodeValue$6[0];
        written = _setNodeValue$6[1];
        written.forEach(function (atom) {
          return writtenNodes.add(atom);
        });
      }

      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$3);
      }

      set({
        set: setRecoilState,
        get: getRecoilValue,
        reset: resetRecoilState
      }, newValue);
      return [newState, writtenNodes];
    };

    return registerNode$1({
      key: key,
      options: options,
      get: myGet,
      set: mySet
    });
  } else {
    return registerNode$1({
      key: key,
      options: options,
      get: myGet
    });
  }
}
/* eslint-enable no-redeclare */


var Recoil_selector_OLD = selector;
var selector$1 = Recoil_selector_OLD;
var Recoil_selector = selector$1; // @fb-only: import type {ScopeRules} from './Recoil_ScopedAtom';

var loadableWithValue$2 = Recoil_Loadable.loadableWithValue;
var DEFAULT_VALUE$4 = Recoil_Node.DEFAULT_VALUE,
    DefaultValue$1 = Recoil_Node.DefaultValue,
    registerNode$2 = Recoil_Node.registerNode;
var isRecoilValue$3 = Recoil_RecoilValue$1.isRecoilValue;
var mapByDeletingFromMap$2 = Recoil_CopyOnWrite.mapByDeletingFromMap,
    mapBySettingInMap$3 = Recoil_CopyOnWrite.mapBySettingInMap,
    setByAddingToSet$4 = Recoil_CopyOnWrite.setByAddingToSet; // @fb-only: const {scopedAtom} = require('./Recoil_ScopedAtom');
// It would be nice if this didn't have to be defined at the Recoil level, but I don't want to make
// the api cumbersome. One way to do this would be to have a selector mark the atom as persisted.
// Note that this should also allow for special URL handling. (Although the persistence observer could
// have this as a separate configuration.)

function baseAtom(options) {
  var key = options.key,
      persistence = options.persistence_UNSTABLE;
  return registerNode$2({
    key: key,
    options: options,
    get: function get(_store, state) {
      if (state.atomValues.has(key)) {
        // atom value is stored in state
        return [state, Recoil_nullthrows(state.atomValues.get(key))];
      } else if (state.nonvalidatedAtoms.has(key)) {
        if (persistence == null) {
          Recoil_expectationViolation("Tried to restore a persisted value for atom ".concat(key, " but it has no persistence settings."));
          return [state, loadableWithValue$2(options["default"])];
        }

        var nonvalidatedValue = state.nonvalidatedAtoms.get(key);
        var validatedValue = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$4);
        return validatedValue instanceof DefaultValue$1 ? [_objectSpread(_objectSpread({}, state), {}, {
          nonvalidatedAtoms: mapByDeletingFromMap$2(state.nonvalidatedAtoms, key)
        }), loadableWithValue$2(options["default"])] : [_objectSpread(_objectSpread({}, state), {}, {
          atomValues: mapBySettingInMap$3(state.atomValues, key, loadableWithValue$2(validatedValue)),
          nonvalidatedAtoms: mapByDeletingFromMap$2(state.nonvalidatedAtoms, key)
        }), loadableWithValue$2(validatedValue)];
      } else {
        return [state, loadableWithValue$2(options["default"])];
      }
    },
    set: function set(_store, state, newValue) {
      if (options.dangerouslyAllowMutability !== true) {
        Recoil_deepFreezeValue(newValue);
      }

      return [_objectSpread(_objectSpread({}, state), {}, {
        dirtyAtoms: setByAddingToSet$4(state.dirtyAtoms, key),
        atomValues: newValue instanceof DefaultValue$1 ? mapByDeletingFromMap$2(state.atomValues, key) : mapBySettingInMap$3(state.atomValues, key, loadableWithValue$2(newValue)),
        nonvalidatedAtoms: mapByDeletingFromMap$2(state.nonvalidatedAtoms, key)
      }), new Set([key])];
    }
  });
} // prettier-ignore


function atom(options) {
  var optionsDefault = options["default"],
      restOptions = _objectWithoutProperties(options, ["default"]);

  if (isRecoilValue$3(optionsDefault) || Recoil_isPromise(optionsDefault)) {
    return atomWithFallback(_objectSpread(_objectSpread({}, restOptions), {}, {
      "default": optionsDefault // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,

    })); // @fb-only: } else if (scopeRules_APPEND_ONLY_READ_THE_DOCS) {
    // @fb-only: return scopedAtom<T>({
    // @fb-only: ...restOptions,
    // @fb-only: default: optionsDefault,
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    // @fb-only: });
  } else {
    return baseAtom(_objectSpread(_objectSpread({}, restOptions), {}, {
      "default": optionsDefault
    }));
  }
}

function atomWithFallback(options) {
  var base = atom(_objectSpread(_objectSpread({}, options), {}, {
    "default": DEFAULT_VALUE$4,
    persistence_UNSTABLE: options.persistence_UNSTABLE === undefined ? undefined : _objectSpread(_objectSpread({}, options.persistence_UNSTABLE), {}, {
      validator: function validator(storedValue) {
        return storedValue instanceof DefaultValue$1 ? storedValue : Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue, DEFAULT_VALUE$4);
      }
    })
  }));
  return Recoil_selector({
    key: "".concat(options.key, "__withFallback"),
    get: function get(_ref14) {
      var _get = _ref14.get;

      var baseValue = _get(base);

      return baseValue instanceof DefaultValue$1 ? options["default"] : baseValue;
    },
    set: function set(_ref15, newValue) {
      var _set = _ref15.set;
      return _set(base, newValue);
    },
    dangerouslyAllowMutability: options.dangerouslyAllowMutability
  });
}

var Recoil_atom = atom;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

var Recoil_ParameterizedAtomTaggedValue_DEPRECATED = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var TIME_WARNING_THRESHOLD_MS = 15;

function stringify(x, opt, key) {
  // A optimization to avoid the more expensive JSON.stringify() for simple strings
  // This may lose protection for u2028 and u2029, though.
  if (typeof x === 'string' && !x.includes('"') && !x.includes('\\')) {
    return "\"".concat(x, "\"");
  } // Handle primitive types


  switch (_typeof(x)) {
    case 'undefined':
      return '';
    // JSON.stringify(undefined) returns undefined, but we always want to return a string

    case 'boolean':
      return x ? 'true' : 'false';

    case 'number':
    case 'symbol':
      // case 'bigint': // BigInt is not supported in www
      return String(x);

    case 'string':
      // Add surrounding quotes and escape internal quotes
      return JSON.stringify(x);

    case 'function':
      if ((opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true) {
        throw new Error('Attempt to serialize function in a Recoil cache key');
      }

      return "__FUNCTION(".concat(x.name, ")__");
  }

  if (x === null) {
    return 'null';
  } // Fallback case for unknown types


  if (_typeof(x) !== 'object') {
    var _JSON$stringify;

    return (_JSON$stringify = JSON.stringify(x)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '';
  } // Deal with all promises as equivalent for now.


  if (Recoil_isPromise(x)) {
    return '__PROMISE__';
  } // Arrays handle recursive stringification


  if (Array.isArray(x)) {
    return "[".concat(x.map(function (v, i) {
      return stringify(v, opt, i.toString());
    }), "]");
  } // If an object defines a toJSON() method, then use that to override the
  // serialization.  This matches the behavior of JSON.stringify().
  // Pass the key for compatibility.
  // Immutable.js collections define this method to allow us to serialize them.


  if (typeof x.toJSON === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(x.toJSON(key), opt, key);
  } // For built-in Maps, sort the keys in a stable order instead of the
  // default insertion order.  Support non-string keys.


  if (x instanceof Map) {
    return stringify( // TODO Object.fromEntries(x) isn't supported in Babel yet (7/17/19)
    Array.from(x).reduce(function (obj, _ref16) {
      var _ref17 = _slicedToArray(_ref16, 2),
          k = _ref17[0],
          v = _ref17[1];

      return _objectSpread(_objectSpread({}, obj), {}, _defineProperty2({}, typeof k === 'string' ? k : stringify(k, opt), v));
    }, {}), opt, key);
  } // For built-in Sets, sort the keys in a stable order instead of the
  // default insertion order.


  if (x instanceof Set) {
    return stringify(Array.from(x).sort(function (a, b) {
      return stringify(a, opt).localeCompare(stringify(b, opt));
    }), opt, key);
  } // Anything else that is iterable serialize as an Array.


  if (x[Symbol.iterator] != null && typeof x[Symbol.iterator] === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(Array.from(x), opt, key);
  } // For all other Objects, sort the keys in a stable order.


  return "{".concat(Object.keys(x).filter(function (key) {
    return x[key] !== undefined;
  }).sort() // stringify the key to add quotes and escape any nested slashes or quotes.
  .map(function (key) {
    return "".concat(stringify(key, opt), ":").concat(stringify(x[key], opt, key));
  }).join(','), "}");
} // Utility similar to JSON.stringify() except:
// * Serialize built-in Sets as an Array
// * Serialize built-in Maps as an Object.  Supports non-string keys.
// * Serialize other iterables as arrays
// * Sort the keys of Objects and Maps to have a stable order based on string conversion.
//    This overrides their default insertion order.
// * Still uses toJSON() of any object to override serialization
// * Support Symbols (though don't guarantee uniqueness)
// * We could support BigInt, but Flow doesn't seem to like it.
// See Recoil_stableStringify-test.js for examples


function stableStringify(x) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    allowFunctions: false
  };
  {
    if (typeof window !== 'undefined') {
      var startTime = window.performance ? window.performance.now() : 0;
      var str = stringify(x, opt);
      var endTime = window.performance ? window.performance.now() : 0;

      if (endTime - startTime > TIME_WARNING_THRESHOLD_MS) {
        /* eslint-disable fb-www/no-console */
        console.groupCollapsed("Recoil: Spent ".concat(endTime - startTime, "ms computing a cache key"));
        console.warn(x, str);
        console.groupEnd();
        /* eslint-enable fb-www/no-console */
      }

      return str;
    }
  }
  return stringify(x, opt);
}

var Recoil_stableStringify = stableStringify; // If we do profile and find the key equality check is expensive,
// we could always try to optimize..  Something that comes to mind is having
// each check assign an incrementing index to each reference that maps to the
// value equivalency.  Then, if an object already has an index, the comparison
// check/lookup would be trivial and the string serialization would only need
// to be done once per object instance.  Just a thought..
// Cache implementation to use value equality for keys instead of the default
// reference equality.  This allows different instances of dependency values to
// be used.  Normally this is not needed, as dependent atoms/selectors will
// themselves be cached and always return the same instance.  However, if
// different params or upstream values for those dependencies could produce
// equivalent values or they have a custom cache implementation, then this
// implementation may be needed.  The downside with this approach is that it
// takes longer to compute the value equivalence vs simple reference equality.

function cacheWithValueEquality() {
  var map = new Map();
  var cache = {
    get: function get(key) {
      return map.get(Recoil_stableStringify(key));
    },
    set: function set(key, value) {
      map.set(Recoil_stableStringify(key), value);
      return cache;
    },
    map: map // For debugging

  };
  return cache;
}

var Recoil_cacheWithValueEquality = cacheWithValueEquality; // Keep in mind the parameter needs to be serializable as a cahche key
// using Recoil_stableStringify
// Add a unique index to each selector in case the cache implementation allows
// duplicate keys based on equivalent stringified parameters

var nextIndex = 0;
/* eslint-disable no-redeclare */
// Return a function that returns members of a family of selectors of the same type
// E.g.,
//
// const s = selectorFamily(...);
// s({a: 1}) => a selector
// s({a: 2}) => a different selector
//
// By default, the selectors are distinguished by distinct values of the
// parameter based on value equality, not reference equality.  This allows using
// object literals or other equivalent objects at callsites to not create
// duplicate cache entries.  This behavior may be overridden with the
// cacheImplementationForParams option.

function selectorFamily(options) {
  var _options$cacheImpleme, _options$cacheImpleme2;

  var selectorCache = (_options$cacheImpleme = (_options$cacheImpleme2 = options.cacheImplementationForParams_UNSTABLE) === null || _options$cacheImpleme2 === void 0 ? void 0 : _options$cacheImpleme2.call(options)) !== null && _options$cacheImpleme !== void 0 ? _options$cacheImpleme : Recoil_cacheWithValueEquality();
  return function (params) {
    var _stableStringify, _options$cacheImpleme3;

    var cachedSelector = selectorCache.get(params);

    if (cachedSelector != null) {
      return cachedSelector;
    }

    var myKey = "".concat(options.key, "__selectorFamily/").concat((_stableStringify = Recoil_stableStringify(params, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: true
    })) !== null && _stableStringify !== void 0 ? _stableStringify : 'void', "/").concat(nextIndex++); // Append index in case values serialize to the same key string

    var myGet = function myGet(callbacks) {
      return options.get(params)(callbacks);
    };

    var myCacheImplementation = (_options$cacheImpleme3 = options.cacheImplementation_UNSTABLE) === null || _options$cacheImpleme3 === void 0 ? void 0 : _options$cacheImpleme3.call(options);
    var newSelector;

    if (options.set != null) {
      var set = options.set;

      var mySet = function mySet(callbacks, newValue) {
        return set(params)(callbacks, newValue);
      };

      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        set: mySet,
        cacheImplementation_UNSTABLE: myCacheImplementation,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability
      });
    } else {
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        cacheImplementation_UNSTABLE: myCacheImplementation,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability
      });
    }

    selectorCache = selectorCache.set(params, newSelector);
    return newSelector;
  };
}
/* eslint-enable no-redeclare */


var Recoil_selectorFamily = selectorFamily; // @fb-only: import type {ScopeRules} from './Recoil_ScopedAtom';

var DEFAULT_VALUE$5 = Recoil_Node.DEFAULT_VALUE,
    DefaultValue$2 = Recoil_Node.DefaultValue; // @fb-only: const {parameterizedScopedAtomLegacy} = require('./Recoil_ScopedAtom');

function isSuperset(setA, setB) {
  return Recoil_everySet(setB, function (b) {
    return setA.has(b);
  });
}

var pick = function pick(object, chosenKeys) {
  return Array.from(chosenKeys).reduce(function (obj, key) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty2({}, key, object[key]));
  }, {});
};

function getParameterizedValue_DEPRECATED(baseValue, parameter) {
  // Allow simple atoms to be upgraded to atomFamilies
  if (!(baseValue instanceof Recoil_ParameterizedAtomTaggedValue_DEPRECATED)) {
    return baseValue;
  } // Legacy ParameterizedAtomTaggedValue only supported object type parameters


  if (_typeof(parameter) !== 'object' || parameter == null || Array.isArray(parameter)) {
    return DEFAULT_VALUE$5;
  }

  var entries = baseValue.value;
  var parameterKeys = new Set(Object.keys(parameter));

  var _iterator15 = _createForOfIteratorHelper(entries),
      _step15;

  try {
    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      var _step15$value = _slicedToArray(_step15.value, 2),
          entryParameterKeys = _step15$value[0],
          entryMap = _step15$value[1];

      if (isSuperset(parameterKeys, entryParameterKeys)) {
        var contextOrSubcontext = parameterKeys.size === entryParameterKeys.size // if true they are equal
        ? parameter : pick(parameter, entryParameterKeys);
        var value = entryMap.get(Recoil_stableStringify(contextOrSubcontext));

        if (value !== undefined) {
          return value;
        }
      }
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }

  return DEFAULT_VALUE$5;
}

function mapPersistenceSettings_DEPRECATED(settings) {
  if (settings == null) {
    return undefined;
  }

  var passthrough = _extends({}, settings);

  return _objectSpread(_objectSpread({}, passthrough), {}, {
    validator: function validator(storedValue) {
      if (storedValue instanceof Recoil_ParameterizedAtomTaggedValue_DEPRECATED) {
        return new Recoil_ParameterizedAtomTaggedValue_DEPRECATED(storedValue.value.filter(function (_ref18) {
          var _ref19 = _slicedToArray(_ref18, 2),
              keys = _ref19[0],
              map = _ref19[1];

          return keys instanceof Set && map instanceof Map;
        }).map(function (_ref20) {
          var _ref21 = _slicedToArray(_ref20, 2),
              keys = _ref21[0],
              map = _ref21[1];

          return [keys, Array.from(map.entries()).reduce(function (acc, _ref22) {
            var _ref23 = _slicedToArray(_ref22, 2),
                k = _ref23[0],
                v = _ref23[1];

            var validatedValue = passthrough.validator(v, DEFAULT_VALUE$5);

            if (validatedValue instanceof DefaultValue$2) {
              return acc;
            }

            acc.set(k, validatedValue);
            return acc;
          }, new Map())];
        }));
      } else {
        return passthrough.validator(storedValue, DEFAULT_VALUE$5);
      }
    }
  });
} // Process scopeRules to handle any entries which are functions taking parameters

/*
A function which returns an atom based on the input parameter.

Each unique parameter returns a unique atom. E.g.,

  const f = atomFamily(...);
  f({a: 1}) => an atom
  f({a: 2}) => a different atom

This allows components to persist local, private state using atoms.  Each
instance of the component may have a different key, which it uses as the
parameter for a family of atoms; in this way, each component will have
its own atom not shared by other instances.  These state keys may be composed
into children's state keys as well.
*/


function atomFamily(options) {
  var atomCache = Recoil_cacheWithValueEquality(); // An atom to represent any legacy atoms that we can upgrade to an atomFamily

  var legacyAtomOptions = {
    key: options.key,
    // Legacy atoms just used the plain key directly
    "default": DEFAULT_VALUE$5,
    // TODO Drop support for ParameterizedAtomTaggedValue_DEPRECATED June 2020
    persistence_UNSTABLE: mapPersistenceSettings_DEPRECATED(options.persistence_UNSTABLE)
  };
  var legacyAtom; // prettier-ignore
  // @fb-only: if (
  // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS
  // @fb-only: ) {
  // @fb-only: legacyAtom = parameterizedScopedAtomLegacy<
  // @fb-only: StoredBaseValue_DEPRECATED<T> | DefaultValue,
  // @fb-only: P,
  // @fb-only: >({
  // @fb-only: ...legacyAtomOptions,
  // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS:
  // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
  // @fb-only: });
  // @fb-only: } else {

  legacyAtom = Recoil_atom(legacyAtomOptions); // @fb-only: }
  // Selector to calculate the default value based on any persisted legacy atoms
  // that were upgraded to a atomFamily

  var atomFamilyDefault = Recoil_selectorFamily({
    key: "".concat(options.key, "__atomFamily/Default"),
    get: function get(param) {
      return function (_ref24) {
        var get = _ref24.get;
        var legacyValue = get(typeof legacyAtom === 'function' ? legacyAtom(param) : legacyAtom);

        if (!(legacyValue instanceof DefaultValue$2)) {
          // Atom was upgraded from a non-parameterized atom
          // or a legacy ParameterizedAtomTaggedValue
          // TODO Drop support for ParameterizedAtomTaggedValue_DEPRECATED June 2020
          var upgradedValue = getParameterizedValue_DEPRECATED(legacyValue, param);

          if (!(upgradedValue instanceof DefaultValue$2)) {
            return upgradedValue;
          }
        } // There's no legacy atom value, so use the user-specified default


        return typeof options["default"] === 'function' ? // The default was parameterized
        // Flow doesn't know that T isn't a function, so we need to case to any
        options["default"](param) // flowlint-line unclear-type:off
        : // Default may be a static value, promise, or RecoilValue
        options["default"];
      };
    },
    dangerouslyAllowMutability: options.dangerouslyAllowMutability
  }); // Simple atomFamily implementation to cache individual atoms based
  // on the parameter value equality.

  return function (params) {
    var _stableStringify;

    var cachedAtom = atomCache.get(params);

    if (cachedAtom != null) {
      return cachedAtom;
    }

    var newAtom = Recoil_atom({
      key: "".concat(options.key, "__").concat((_stableStringify = Recoil_stableStringify(params)) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'),
      "default": atomFamilyDefault(params),
      // prettier-ignore
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
      // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: params,
      // @fb-only: ),
      persistence_UNSTABLE: options.persistence_UNSTABLE,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability
    });
    atomCache = atomCache.set(params, newAtom);
    return newAtom;
  };
}

var Recoil_atomFamily = atomFamily; // flowlint-next-line unclear-type:off

var constantSelector = Recoil_selectorFamily({
  key: '__constant',
  get: function get(constant) {
    return function () {
      return constant;
    };
  },
  cacheImplementationForParams_UNSTABLE: Recoil_cacheWithReferenceEquality
}); // Function that returns a selector which always produces the
// same constant value.  It may be called multiple times with the
// same value, based on reference equality, and will provide the
// same selector.

function constSelector(constant) {
  return constantSelector(constant);
}

var Recoil_constSelector = constSelector; // flowlint-next-line unclear-type:off

var throwingSelector = Recoil_selectorFamily({
  key: '__error',
  get: function get(message) {
    return function () {
      throw new Error(message);
    };
  },
  cacheImplementationForParams_UNSTABLE: Recoil_cacheWithReferenceEquality
}); // Function that returns a selector which always throws an error
// with the provided message.

function errorSelector(message) {
  return throwingSelector(message);
}

var Recoil_errorSelector = errorSelector;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Wraps another recoil value and prevents writing to it.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function readOnlySelector(atom) {
  // flowlint-next-line unclear-type: off
  return atom;
}

var Recoil_readOnlySelector = readOnlySelector;
var loadableWithError$2 = Recoil_Loadable.loadableWithError,
    loadableWithPromise$2 = Recoil_Loadable.loadableWithPromise,
    loadableWithValue$3 = Recoil_Loadable.loadableWithValue; /////////////////
//  TRUTH TABLE
/////////////////
// Dependencies        waitForNone         waitForAny        waitForAll
//  [loading, loading]  [Promise, Promise]  Promise           Promise
//  [value, loading]    [value, Promise]    [value, Promise]  Promise
//  [value, value]      [value, value]      [value, value]    [value, value]
//
//  [error, loading]    [Error, Promise]    Promise           Error
//  [error, error]      [Error, Error]      Error             Error
//  [value, error]      [value, Error]      [value, Error]    Error
// Issue parallel requests for all dependencies and return the current
// status if they have results, have some error, or are still pending.

function concurrentRequests(getRecoilValue, deps) {
  var results = Array(deps.length).fill(undefined);
  var exceptions = Array(deps.length).fill(undefined);

  var _iterator16 = _createForOfIteratorHelper(deps.entries()),
      _step16;

  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var _step16$value = _slicedToArray(_step16.value, 2),
          i = _step16$value[0],
          dep = _step16$value[1];

      try {
        results[i] = getRecoilValue(dep);
      } catch (e) {
        // exceptions can either be Promises of pending results or real errors
        exceptions[i] = e;
      }
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }

  return [results, exceptions];
}

function isError(exp) {
  return exp != null && !Recoil_isPromise(exp);
}

function unwrapDependencies(dependencies) {
  return Array.isArray(dependencies) ? dependencies : Object.getOwnPropertyNames(dependencies).map(function (key) {
    return dependencies[key];
  });
}

function wrapResults(dependencies, results) {
  return Array.isArray(dependencies) ? results : // Object.getOwnPropertyNames() has consistent key ordering with ES6
  Object.getOwnPropertyNames(dependencies).reduce(function (out, key, idx) {
    return _objectSpread(_objectSpread({}, out), {}, _defineProperty2({}, key, results[idx]));
  }, {});
}

function wrapLoadables(dependencies, results, exceptions) {
  var output = exceptions.map(function (exception, idx) {
    return exception == null ? loadableWithValue$3(results[idx]) : Recoil_isPromise(exception) ? loadableWithPromise$2(exception) : loadableWithError$2(exception);
  });
  return wrapResults(dependencies, output);
} // Selector that requests all dependencies in parallel and immediately returns
// current results without waiting.


var waitForNone = Recoil_selectorFamily({
  key: '__waitForNone',
  get: function get(dependencies) {
    return function (_ref25) {
      var get = _ref25.get;
      // Issue requests for all dependencies in parallel.
      var deps = unwrapDependencies(dependencies);

      var _concurrentRequests = concurrentRequests(get, deps),
          _concurrentRequests2 = _slicedToArray(_concurrentRequests, 2),
          results = _concurrentRequests2[0],
          exceptions = _concurrentRequests2[1]; // Always return the current status of the results; never block.


      return wrapLoadables(dependencies, results, exceptions);
    };
  }
}); // Selector that requests all dependencies in parallel and waits for at least
// one to be available before returning results.  It will only error if all
// dependencies have errors.

var waitForAny = Recoil_selectorFamily({
  key: '__waitForAny',
  get: function get(dependencies) {
    return function (_ref26) {
      var get = _ref26.get;
      // Issue requests for all dependencies in parallel.
      // Exceptions can either be Promises of pending results or real errors
      var deps = unwrapDependencies(dependencies);

      var _concurrentRequests3 = concurrentRequests(get, deps),
          _concurrentRequests4 = _slicedToArray(_concurrentRequests3, 2),
          results = _concurrentRequests4[0],
          exceptions = _concurrentRequests4[1]; // If any results are available, return the current status


      if (exceptions.some(function (exp) {
        return exp == null;
      })) {
        return wrapLoadables(dependencies, results, exceptions);
      } // Since we are waiting for any results, only throw an error if all
      // dependencies have an error.  Then, throw the first one.


      if (exceptions.every(isError)) {
        throw exceptions.find(isError);
      }

      {
        throw new Promise(function (resolve, reject) {
          var _iterator17 = _createForOfIteratorHelper(exceptions.entries()),
              _step17;

          try {
            var _loop = function _loop() {
              var _step17$value = _slicedToArray(_step17.value, 2),
                  i = _step17$value[0],
                  exp = _step17$value[1];

              if (Recoil_isPromise(exp)) {
                exp.then(function (result) {
                  results[i] = result;
                  exceptions[i] = null;
                  resolve(wrapLoadables(dependencies, results, exceptions));
                })["catch"](function (error) {
                  exceptions[i] = error;

                  if (exceptions.every(isError)) {
                    reject(exceptions[0]);
                  }
                });
              }
            };

            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
        });
      }
    };
  }
}); // Selector that requests all dependencies in parallel and waits for all to be
// available before returning a value.  It will error if any dependencies error.

var waitForAll = Recoil_selectorFamily({
  key: '__waitForAll',
  get: function get(dependencies) {
    return function (_ref27) {
      var get = _ref27.get;
      // Issue requests for all dependencies in parallel.
      // Exceptions can either be Promises of pending results or real errors
      var deps = unwrapDependencies(dependencies);

      var _concurrentRequests5 = concurrentRequests(get, deps),
          _concurrentRequests6 = _slicedToArray(_concurrentRequests5, 2),
          results = _concurrentRequests6[0],
          exceptions = _concurrentRequests6[1]; // If all results are available, return the results


      if (exceptions.every(function (exp) {
        return exp == null;
      })) {
        return wrapResults(dependencies, results);
      } // If we have any errors, throw the first error


      var error = exceptions.find(isError);

      if (error != null) {
        throw error;
      }

      {
        throw Promise.all(exceptions).then(function (results) {
          return wrapResults(dependencies, results);
        });
      }
    };
  }
});
var noWait = Recoil_selectorFamily({
  key: '__noWait',
  get: function get(dependency) {
    return function (_ref28) {
      var get = _ref28.get;

      try {
        return loadableWithValue$3(get(dependency));
      } catch (exception) {
        return Recoil_isPromise(exception) ? loadableWithPromise$2(exception) : loadableWithError$2(exception);
      }
    };
  }
});
var Recoil_WaitFor = {
  waitForNone: waitForNone,
  waitForAny: waitForAny,
  waitForAll: waitForAll,
  noWait: noWait
};
var DefaultValue$3 = Recoil_Node.DefaultValue;
var RecoilRoot$1 = Recoil_RecoilRoot_react.RecoilRoot;
var isRecoilValue$4 = Recoil_RecoilValue$1.isRecoilValue;
var useGotoRecoilSnapshot$1 = Recoil_Hooks.useGotoRecoilSnapshot,
    useRecoilCallback$1 = Recoil_Hooks.useRecoilCallback,
    useRecoilSnapshot$1 = Recoil_Hooks.useRecoilSnapshot,
    useRecoilState$1 = Recoil_Hooks.useRecoilState,
    useRecoilStateLoadable$1 = Recoil_Hooks.useRecoilStateLoadable,
    useRecoilTransactionObserver$1 = Recoil_Hooks.useRecoilTransactionObserver,
    useRecoilValue$1 = Recoil_Hooks.useRecoilValue,
    useRecoilValueLoadable$1 = Recoil_Hooks.useRecoilValueLoadable,
    useResetRecoilState$1 = Recoil_Hooks.useResetRecoilState,
    useSetRecoilState$1 = Recoil_Hooks.useSetRecoilState,
    useSetUnvalidatedAtomValues$1 = Recoil_Hooks.useSetUnvalidatedAtomValues,
    useTransactionObservation_DEPRECATED$1 = Recoil_Hooks.useTransactionObservation_DEPRECATED;
var noWait$1 = Recoil_WaitFor.noWait,
    waitForAll$1 = Recoil_WaitFor.waitForAll,
    waitForAny$1 = Recoil_WaitFor.waitForAny,
    waitForNone$1 = Recoil_WaitFor.waitForNone;
var Recoil_index = {
  // Types
  DefaultValue: DefaultValue$3,
  // Components
  RecoilRoot: RecoilRoot$1,
  // RecoilValues
  atom: Recoil_atom,
  selector: Recoil_selector,
  // Convenience RecoilValues
  atomFamily: Recoil_atomFamily,
  selectorFamily: Recoil_selectorFamily,
  constSelector: Recoil_constSelector,
  errorSelector: Recoil_errorSelector,
  readOnlySelector: Recoil_readOnlySelector,
  // Hooks that accept RecoilValues
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useSetRecoilState: useSetRecoilState$1,
  useResetRecoilState: useResetRecoilState$1,
  // Hooks for asynchronous Recoil
  useRecoilCallback: useRecoilCallback$1,
  // Hooks for Snapshots
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
  useTransactionObservation_UNSTABLE: useTransactionObservation_DEPRECATED$1,
  useSetUnvalidatedAtomValues_UNSTABLE: useSetUnvalidatedAtomValues$1,
  // Concurrency Helpers
  noWait: noWait$1,
  waitForNone: waitForNone$1,
  waitForAny: waitForAny$1,
  waitForAll: waitForAll$1,
  // Other functions
  isRecoilValue: isRecoilValue$4
};
var Recoil_index_1 = Recoil_index.DefaultValue;
var Recoil_index_2 = Recoil_index.RecoilRoot;
var Recoil_index_3 = Recoil_index.atom;
var Recoil_index_4 = Recoil_index.selector;
var Recoil_index_5 = Recoil_index.atomFamily;
var Recoil_index_6 = Recoil_index.selectorFamily;
var Recoil_index_7 = Recoil_index.constSelector;
var Recoil_index_8 = Recoil_index.errorSelector;
var Recoil_index_9 = Recoil_index.readOnlySelector;
var Recoil_index_10 = Recoil_index.useRecoilValue;
var Recoil_index_11 = Recoil_index.useRecoilValueLoadable;
var Recoil_index_12 = Recoil_index.useRecoilState;
var Recoil_index_13 = Recoil_index.useRecoilStateLoadable;
var Recoil_index_14 = Recoil_index.useSetRecoilState;
var Recoil_index_15 = Recoil_index.useResetRecoilState;
var Recoil_index_16 = Recoil_index.useRecoilCallback;
var Recoil_index_17 = Recoil_index.useGotoRecoilSnapshot;
var Recoil_index_18 = Recoil_index.useRecoilSnapshot;
var Recoil_index_19 = Recoil_index.useRecoilTransactionObserver_UNSTABLE;
var Recoil_index_20 = Recoil_index.useTransactionObservation_UNSTABLE;
var Recoil_index_21 = Recoil_index.useSetUnvalidatedAtomValues_UNSTABLE;
var Recoil_index_22 = Recoil_index.noWait;
var Recoil_index_23 = Recoil_index.waitForNone;
var Recoil_index_24 = Recoil_index.waitForAny;
var Recoil_index_25 = Recoil_index.waitForAll;
var Recoil_index_26 = Recoil_index.isRecoilValue;
exports.DefaultValue = Recoil_index_1;
exports.RecoilRoot = Recoil_index_2;
exports.atom = Recoil_index_3;
exports.atomFamily = Recoil_index_5;
exports.constSelector = Recoil_index_7;
exports["default"] = Recoil_index;
exports.errorSelector = Recoil_index_8;
exports.isRecoilValue = Recoil_index_26;
exports.noWait = Recoil_index_22;
exports.readOnlySelector = Recoil_index_9;
exports.selector = Recoil_index_4;
exports.selectorFamily = Recoil_index_6;
exports.useGotoRecoilSnapshot = Recoil_index_17;
exports.useRecoilCallback = Recoil_index_16;
exports.useRecoilSnapshot = Recoil_index_18;
exports.useRecoilState = Recoil_index_12;
exports.useRecoilStateLoadable = Recoil_index_13;
exports.useRecoilTransactionObserver_UNSTABLE = Recoil_index_19;
exports.useRecoilValue = Recoil_index_10;
exports.useRecoilValueLoadable = Recoil_index_11;
exports.useResetRecoilState = Recoil_index_15;
exports.useSetRecoilState = Recoil_index_14;
exports.useSetUnvalidatedAtomValues_UNSTABLE = Recoil_index_21;
exports.useTransactionObservation_UNSTABLE = Recoil_index_20;
exports.waitForAll = Recoil_index_25;
exports.waitForAny = Recoil_index_24;
exports.waitForNone = Recoil_index_23;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ })
/******/ ])});;