define("react-is", [], function() { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/react-is/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/** @license React v16.13.1\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nif (true) {\n  (function () {\n    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n    // nor polyfill, then a plain number is used for performance.\n\n    var hasSymbol = typeof Symbol === 'function' && Symbol[\"for\"];\n    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol[\"for\"]('react.element') : 0xeac7;\n    var REACT_PORTAL_TYPE = hasSymbol ? Symbol[\"for\"]('react.portal') : 0xeaca;\n    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol[\"for\"]('react.fragment') : 0xeacb;\n    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol[\"for\"]('react.strict_mode') : 0xeacc;\n    var REACT_PROFILER_TYPE = hasSymbol ? Symbol[\"for\"]('react.profiler') : 0xead2;\n    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol[\"for\"]('react.provider') : 0xeacd;\n    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol[\"for\"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary\n    // (unstable) APIs that have been removed. Can we remove the symbols?\n\n    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol[\"for\"]('react.async_mode') : 0xeacf;\n    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol[\"for\"]('react.concurrent_mode') : 0xeacf;\n    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol[\"for\"]('react.forward_ref') : 0xead0;\n    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol[\"for\"]('react.suspense') : 0xead1;\n    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol[\"for\"]('react.suspense_list') : 0xead8;\n    var REACT_MEMO_TYPE = hasSymbol ? Symbol[\"for\"]('react.memo') : 0xead3;\n    var REACT_LAZY_TYPE = hasSymbol ? Symbol[\"for\"]('react.lazy') : 0xead4;\n    var REACT_BLOCK_TYPE = hasSymbol ? Symbol[\"for\"]('react.block') : 0xead9;\n    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol[\"for\"]('react.fundamental') : 0xead5;\n    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol[\"for\"]('react.responder') : 0xead6;\n    var REACT_SCOPE_TYPE = hasSymbol ? Symbol[\"for\"]('react.scope') : 0xead7;\n\n    function isValidElementType(type) {\n      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);\n    }\n\n    function typeOf(object) {\n      if (_typeof(object) === 'object' && object !== null) {\n        var $$typeof = object.$$typeof;\n\n        switch ($$typeof) {\n          case REACT_ELEMENT_TYPE:\n            var type = object.type;\n\n            switch (type) {\n              case REACT_ASYNC_MODE_TYPE:\n              case REACT_CONCURRENT_MODE_TYPE:\n              case REACT_FRAGMENT_TYPE:\n              case REACT_PROFILER_TYPE:\n              case REACT_STRICT_MODE_TYPE:\n              case REACT_SUSPENSE_TYPE:\n                return type;\n\n              default:\n                var $$typeofType = type && type.$$typeof;\n\n                switch ($$typeofType) {\n                  case REACT_CONTEXT_TYPE:\n                  case REACT_FORWARD_REF_TYPE:\n                  case REACT_LAZY_TYPE:\n                  case REACT_MEMO_TYPE:\n                  case REACT_PROVIDER_TYPE:\n                    return $$typeofType;\n\n                  default:\n                    return $$typeof;\n                }\n\n            }\n\n          case REACT_PORTAL_TYPE:\n            return $$typeof;\n        }\n      }\n\n      return undefined;\n    } // AsyncMode is deprecated along with isAsyncMode\n\n\n    var AsyncMode = REACT_ASYNC_MODE_TYPE;\n    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\n    var ContextConsumer = REACT_CONTEXT_TYPE;\n    var ContextProvider = REACT_PROVIDER_TYPE;\n    var Element = REACT_ELEMENT_TYPE;\n    var ForwardRef = REACT_FORWARD_REF_TYPE;\n    var Fragment = REACT_FRAGMENT_TYPE;\n    var Lazy = REACT_LAZY_TYPE;\n    var Memo = REACT_MEMO_TYPE;\n    var Portal = REACT_PORTAL_TYPE;\n    var Profiler = REACT_PROFILER_TYPE;\n    var StrictMode = REACT_STRICT_MODE_TYPE;\n    var Suspense = REACT_SUSPENSE_TYPE;\n    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated\n\n    function isAsyncMode(object) {\n      {\n        if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint\n\n          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');\n        }\n      }\n      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;\n    }\n\n    function isConcurrentMode(object) {\n      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;\n    }\n\n    function isContextConsumer(object) {\n      return typeOf(object) === REACT_CONTEXT_TYPE;\n    }\n\n    function isContextProvider(object) {\n      return typeOf(object) === REACT_PROVIDER_TYPE;\n    }\n\n    function isElement(object) {\n      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n    }\n\n    function isForwardRef(object) {\n      return typeOf(object) === REACT_FORWARD_REF_TYPE;\n    }\n\n    function isFragment(object) {\n      return typeOf(object) === REACT_FRAGMENT_TYPE;\n    }\n\n    function isLazy(object) {\n      return typeOf(object) === REACT_LAZY_TYPE;\n    }\n\n    function isMemo(object) {\n      return typeOf(object) === REACT_MEMO_TYPE;\n    }\n\n    function isPortal(object) {\n      return typeOf(object) === REACT_PORTAL_TYPE;\n    }\n\n    function isProfiler(object) {\n      return typeOf(object) === REACT_PROFILER_TYPE;\n    }\n\n    function isStrictMode(object) {\n      return typeOf(object) === REACT_STRICT_MODE_TYPE;\n    }\n\n    function isSuspense(object) {\n      return typeOf(object) === REACT_SUSPENSE_TYPE;\n    }\n\n    exports.AsyncMode = AsyncMode;\n    exports.ConcurrentMode = ConcurrentMode;\n    exports.ContextConsumer = ContextConsumer;\n    exports.ContextProvider = ContextProvider;\n    exports.Element = Element;\n    exports.ForwardRef = ForwardRef;\n    exports.Fragment = Fragment;\n    exports.Lazy = Lazy;\n    exports.Memo = Memo;\n    exports.Portal = Portal;\n    exports.Profiler = Profiler;\n    exports.StrictMode = StrictMode;\n    exports.Suspense = Suspense;\n    exports.isAsyncMode = isAsyncMode;\n    exports.isConcurrentMode = isConcurrentMode;\n    exports.isContextConsumer = isContextConsumer;\n    exports.isContextProvider = isContextProvider;\n    exports.isElement = isElement;\n    exports.isForwardRef = isForwardRef;\n    exports.isFragment = isFragment;\n    exports.isLazy = isLazy;\n    exports.isMemo = isMemo;\n    exports.isPortal = isPortal;\n    exports.isProfiler = isProfiler;\n    exports.isStrictMode = isStrictMode;\n    exports.isSuspense = isSuspense;\n    exports.isValidElementType = isValidElementType;\n    exports.typeOf = typeOf;\n  })();\n}\n\n//# sourceURL=webpack://react-is/./node_modules/react-is/cjs/react-is.development.js?");

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"./node_modules/react-is/cjs/react-is.development.js\");\n}\n\n//# sourceURL=webpack://react-is/./node_modules/react-is/index.js?");

/***/ })

/******/ })});;