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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"html,\\r\\nbody {\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n#root {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  min-height: 100vh;\\r\\n  width: 100%;\\r\\n  background: #f06060;\\r\\n}\\r\\n\\r\\n.fighters {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  flex: 1;\\r\\n  flex-wrap: wrap;\\r\\n  padding: 0 15px;\\r\\n}\\r\\n\\r\\n.fighter {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.fighter:hover {\\r\\n  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.06);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  align-self: center;\\r\\n  font-size: 21px;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.fighter-image {\\r\\n  height: 260px;\\r\\n}\\r\\n\\r\\n#loading-overlay {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-size: 18px;\\r\\n  background: rgba(255, 255, 255, 0.7);\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n/* Full-width input fields */\\r\\ninput[type=\\\"number\\\"] {\\r\\n  width: 100%;\\r\\n  padding: 12px 20px;\\r\\n  margin: 8px 0;\\r\\n  display: inline-block;\\r\\n  border: 1px solid #ccc;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Set a style for all buttons */\\r\\nbutton {\\r\\n  background-color: #4caf50;\\r\\n  color: white;\\r\\n  padding: 14px 20px;\\r\\n  margin: 8px 0;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nbutton:disabled {\\r\\n  opacity: 0.5;\\r\\n  cursor: default;\\r\\n}\\r\\n\\r\\n.start-game {\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  opacity: 0.8;\\r\\n}\\r\\nbutton:disabled:hover {\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n/* Extra styles for the cancel button */\\r\\n.cancelbtn {\\r\\n  width: auto;\\r\\n  padding: 10px 18px;\\r\\n  background-color: #040006;\\r\\n}\\r\\n\\r\\n/* Center the image and position the close button */\\r\\n.imgcontainer {\\r\\n  text-align: center;\\r\\n  margin: 24px 0 12px 0;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  padding: 16px;\\r\\n}\\r\\n\\r\\nspan.psw {\\r\\n  float: right;\\r\\n  padding-top: 16px;\\r\\n}\\r\\n\\r\\n/* The Modal (background) */\\r\\n.modal {\\r\\n  display: none; /* Hidden by default */\\r\\n  position: fixed; /* Stay in place */\\r\\n  z-index: 1; /* Sit on top */\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%; /* Full width */\\r\\n  height: 100%; /* Full height */\\r\\n  overflow: auto; /* Enable scroll if needed */\\r\\n  background-color: rgb(0, 0, 0); /* Fallback color */\\r\\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\\r\\n  padding-top: 60px;\\r\\n}\\r\\n\\r\\n/* Modal Content/Box */\\r\\n.modal-content {\\r\\n  background-color: #fefefe;\\r\\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\\r\\n  border: 1px solid #888;\\r\\n  width: 30%; /* Could be more or less, depending on screen size */\\r\\n}\\r\\n\\r\\n/* The Close Button (x) */\\r\\n.close {\\r\\n  position: absolute;\\r\\n  right: 25px;\\r\\n  top: 0;\\r\\n  color: #000;\\r\\n  font-size: 35px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: red;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* Add Zoom Animation */\\r\\n.animate {\\r\\n  -webkit-animation: animatezoom 0.6s;\\r\\n  animation: animatezoom 0.6s;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes animatezoom {\\r\\n  from {\\r\\n    -webkit-transform: scale(0);\\r\\n  }\\r\\n  to {\\r\\n    -webkit-transform: scale(1);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes animatezoom {\\r\\n  from {\\r\\n    transform: scale(0);\\r\\n  }\\r\\n  to {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Change styles for span and cancel button on extra small screens */\\r\\n@media screen and (max-width: 300px) {\\r\\n  span.psw {\\r\\n    display: block;\\r\\n    float: none;\\r\\n  }\\r\\n  .cancelbtn {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 960px) {\\r\\n  .modal-content {\\r\\n    background-color: #fefefe;\\r\\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\\r\\n    border: 1px solid #888;\\r\\n    width: 70%; /* Could be more or less, depending on screen size */\\r\\n  }\\r\\n}\\r\\n\\r\\n.ring {\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.fighter-in-fight {\\r\\n  display: flex;\\r\\n}\\r\\n.kick {\\r\\n  border-radius: 50%;\\r\\n  width: 90px;\\r\\n  height: 90px;\\r\\n  padding: 0;\\r\\n  background: #cb4e4e;\\r\\n  color: #fff;\\r\\n  box-shadow: 0 6px #ab3c3c;\\r\\n  display: inline-block;\\r\\n  margin: 75px 30px;\\r\\n  text-transform: uppercase;\\r\\n  letter-spacing: 1px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.kick:hover {\\r\\n  box-shadow: 0 4px #ab3c3c;\\r\\n  top: 2px;\\r\\n  opacity: 1;\\r\\n}\\r\\n.message {\\r\\n  font-size: 1.5rem;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.ring {\\r\\n  padding: 30px 50px;\\r\\n  border-radius: 20px;\\r\\n  background-color: #ba7cdf;\\r\\n  box-shadow: 4px 11px 0px 0px rgba(0, 0, 0, 0.75);\\r\\n  border: #fefefe 5px solid;\\r\\n}\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n.skills * {\\r\\n  text-transform: uppercase;\\r\\n  text-align: center;\\r\\n}\\r\\n.winner {\\r\\n  font-size: 7rem;\\r\\n  color: #fefefe;\\r\\n  text-transform: uppercase;\\r\\n  animation-name: bounceIn;\\r\\n  animation-duration: 450ms;\\r\\n  animation-timing-function: linear;\\r\\n  animation-fill-mode: forwards;\\r\\n}\\r\\n.winner:nth-child(2) {\\r\\n  animation-delay: 2.75s;\\r\\n}\\r\\n.winner:nth-child(3) {\\r\\n  animation-delay: 3s;\\r\\n}\\r\\n.winner:nth-child(4) {\\r\\n  animation-delay: 3.15s;\\r\\n}\\r\\n\\r\\n@keyframes bounceIn {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n    transform: scale(0.3) translate3d(0, 0, 0);\\r\\n  }\\r\\n  50% {\\r\\n    opacity: 0.9;\\r\\n    transform: scale(1.1);\\r\\n  }\\r\\n  80% {\\r\\n    opacity: 1;\\r\\n    transform: scale(0.89);\\r\\n  }\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n    transform: scale(1) translate3d(0, 0, 0);\\r\\n  }\\r\\n}\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.stats,\\r\\n.play-again,\\r\\n.stats-wrap,\\r\\n.start-game {\\r\\n  border-radius: 0 0 5px 5px;\\r\\n  background: rgb(186, 124, 223);\\r\\n  color: #fff;\\r\\n  box-shadow: 0 6px #ab3c3c;\\r\\n  font-family: inherit;\\r\\n  font-size: inherit;\\r\\n  padding: 25px 80px;\\r\\n  margin: 25px 30px;\\r\\n  text-transform: uppercase;\\r\\n  letter-spacing: 1px;\\r\\n  font-weight: 700;\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\n.start-game {\\r\\n  background: #cb4e4e;\\r\\n}\\r\\n\\r\\n.stats-wrap {\\r\\n  padding: 0;\\r\\n  margin: 75px 30px;\\r\\n  background-color: #ba7cdf;\\r\\n  box-shadow: 4px 11px 0px 0px rgba(0, 0, 0, 0.75);\\r\\n  border: #fefefe 5px solid;\\r\\n  color: #000;\\r\\n  font-family: \\\"Ranga\\\", cursive;\\r\\n  text-transform: uppercase;\\r\\n  letter-spacing: 1px;\\r\\n  font-weight: 700;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.stats-header {\\r\\n  text-align: center;\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.stats-list {\\r\\n  width: 100%;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.stats-item {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 5%;\\r\\n}\\r\\n.stats-list .stats-item:nth-child(even) {\\r\\n  background-color: rgb(149, 93, 182);\\r\\n}\\r\\n.back-to-app {\\r\\n  background-color: rgb(86, 53, 105);\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst app_1 = __importDefault(__webpack_require__(/*! ./ts/app */ \"./src/ts/app.ts\"));\r\n__webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\r\nnew app_1.default();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/styles.css?");

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst view_1 = __importDefault(__webpack_require__(/*! ./view */ \"./src/ts/view.ts\"));\r\nconst fightersView_1 = __importDefault(__webpack_require__(/*! ./fightersView */ \"./src/ts/fightersView.ts\"));\r\nconst fightersService_1 = __webpack_require__(/*! ./services/fightersService */ \"./src/ts/services/fightersService.ts\");\r\nconst fight_1 = __importDefault(__webpack_require__(/*! ./fight */ \"./src/ts/fight.ts\"));\r\nclass App {\r\n    constructor() {\r\n        this.startApp();\r\n    }\r\n    async startApp() {\r\n        try {\r\n            App.loadingElement.style.visibility = \"visible\";\r\n            const fighters = await fightersService_1.fighterService.getFighters();\r\n            console.log(fighters);\r\n            const fightersView = new fightersView_1.default(fighters);\r\n            const fightersElement = fightersView.element;\r\n            const view = new view_1.default();\r\n            const button = view.createElement({\r\n                tagName: \"button\",\r\n                className: \"start-game\"\r\n            });\r\n            button.innerText = \"Start Game\";\r\n            App.rootElement.appendChild(fightersElement);\r\n            App.rootElement.appendChild(button);\r\n            button.addEventListener(\"click\", e => {\r\n                e.preventDefault();\r\n                if (fightersView.fighterToFight.length === 2) {\r\n                    App.rootElement.innerHTML = \"\";\r\n                    const [first, second] = fightersView.fighterToFight;\r\n                    new fight_1.default(first, second);\r\n                }\r\n                else {\r\n                    alert(\"Can choice only 2 fighters!\");\r\n                }\r\n            });\r\n        }\r\n        catch (error) {\r\n            console.warn(error);\r\n            App.rootElement.innerText = \"Failed to load data\";\r\n        }\r\n        finally {\r\n            App.loadingElement.style.visibility = \"hidden\";\r\n        }\r\n    }\r\n}\r\nApp.rootElement = document.getElementById(\"root\");\r\nApp.loadingElement = document.getElementById(\"loading-overlay\"); //asdasda\r\nexports.default = App;\r\n\n\n//# sourceURL=webpack:///./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/fight.ts":
/*!*************************!*\
  !*** ./src/ts/fight.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst fighter_1 = __importDefault(__webpack_require__(/*! ./fighter */ \"./src/ts/fighter.ts\"));\r\nconst fightView_1 = __importDefault(__webpack_require__(/*! ./fightView */ \"./src/ts/fightView.ts\"));\r\nclass Fight extends fightView_1.default {\r\n    constructor(firstFighter, secondFighter) {\r\n        const first = new fighter_1.default(firstFighter);\r\n        const second = new fighter_1.default(secondFighter);\r\n        super(first, second);\r\n        this.fight(first, second, this.message);\r\n    }\r\n    kick(attacker, blocker, message) {\r\n        const damage = attacker.getHitPower() - blocker.getBlockPower();\r\n        blocker.health -= damage > 0 ? damage : 0;\r\n        if (damage > 0) {\r\n            message.innerText = `${attacker.name} hit ${blocker.name} for ${damage.toFixed(2)}`;\r\n        }\r\n        else {\r\n            message.innerText = `${attacker.name} missed`;\r\n        }\r\n        document.querySelector(`#${blocker.name} .health`).innerHTML = `health: ${Math.round(blocker.health)}`; // !!!!\r\n        if (blocker.health <= 0) {\r\n            this.winner(attacker.name);\r\n        }\r\n    }\r\n    fight(first, second, message) {\r\n        const button = document.querySelector(\".kick\");\r\n        button.addEventListener(\"click\", e => {\r\n            this.kick(first, second, message);\r\n            button.disabled = true;\r\n            if (first.health > 0 && second.health > 0) {\r\n                setTimeout(() => {\r\n                    this.kick(second, first, message);\r\n                    button.disabled = false;\r\n                }, 2000);\r\n            }\r\n        });\r\n    }\r\n}\r\nexports.default = Fight;\r\n\n\n//# sourceURL=webpack:///./src/ts/fight.ts?");

/***/ }),

/***/ "./src/ts/fightView.ts":
/*!*****************************!*\
  !*** ./src/ts/fightView.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst view_1 = __importDefault(__webpack_require__(/*! ./view */ \"./src/ts/view.ts\"));\r\nconst app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/ts/app.ts\"));\r\nconst rootElement = document.getElementById(\"root\");\r\nclass FightView extends view_1.default {\r\n    constructor(first, second) {\r\n        super();\r\n        this.ring = this.createElement({ tagName: \"div\", className: \"ring\" });\r\n        this.message = this.createElement({ tagName: \"div\", className: \"message\" });\r\n        this.firstView = this.createFighterToFight(first);\r\n        this.secondView = this.createFighterToFight(second, true);\r\n        this.button = this.createElement({ tagName: \"button\", className: \"kick\" });\r\n        this.button.innerText = \"Kick him\";\r\n        this.ring.append(this.firstView, this.message, this.secondView);\r\n        if (rootElement) {\r\n            rootElement.appendChild(this.ring);\r\n            rootElement.appendChild(this.button);\r\n        }\r\n    }\r\n    createFighterToFight(person, isTransform) {\r\n        const image = this.createElement({\r\n            tagName: \"img\",\r\n            className: \"fighter-image\",\r\n            attributes: {\r\n                src: person.source,\r\n                style: `${isTransform ? \"transform: scale(-1, 1)\" : \"\"}`\r\n            }\r\n        });\r\n        const fighter = this.createElement({\r\n            tagName: `div`,\r\n            className: `fighter-${person.name}`\r\n        });\r\n        const listFirst = this.createSkills(person.name, {\r\n            attack: person.attack,\r\n            health: person.health,\r\n            defense: person.defense\r\n        });\r\n        fighter.append(image, listFirst);\r\n        return fighter;\r\n    }\r\n    createSkills(name, skills) {\r\n        const list = this.createElement({\r\n            tagName: \"ul\",\r\n            className: \"skills\",\r\n            attributes: { id: `${name}` }\r\n        });\r\n        for (let key in skills) {\r\n            let element = this.createElement({\r\n                tagName: \"li\",\r\n                className: `skills-item ${key}`\r\n            });\r\n            element.innerText = `${key}: ${skills[key]}`;\r\n            console.log(list.append(element));\r\n        }\r\n        return list;\r\n    }\r\n    winner(name) {\r\n        const div = this.createElement({ tagName: \"div\", className: \"winner\" });\r\n        const back = this.createElement({\r\n            tagName: \"button\",\r\n            className: \"play-again\"\r\n        });\r\n        back.innerText = `Play Again`;\r\n        div.innerHTML = `${name} winner!`;\r\n        if (rootElement) {\r\n            rootElement.innerHTML = \"\";\r\n            rootElement.append(div, back);\r\n            back.addEventListener(\"click\", () => {\r\n                rootElement.innerHTML = \"\";\r\n                new app_1.default();\r\n            });\r\n        }\r\n    }\r\n}\r\nexports.default = FightView;\r\n\n\n//# sourceURL=webpack:///./src/ts/fightView.ts?");

/***/ }),

/***/ "./src/ts/fighter.ts":
/*!***************************!*\
  !*** ./src/ts/fighter.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Fighter {\r\n    constructor({ _id, name, health, attack, defense, source }) {\r\n        this.name = name;\r\n        this.health = health;\r\n        this.attack = attack;\r\n        this.defense = defense;\r\n        this.source = source;\r\n        this._id = _id;\r\n    }\r\n    getHitPower() {\r\n        const criticalHitChance = Math.random() + 1;\r\n        const power = this.attack * criticalHitChance;\r\n        return power;\r\n    }\r\n    getBlockPower() {\r\n        const dodgeChance = Math.random() + 1;\r\n        const power = this.defense * dodgeChance;\r\n        return power;\r\n    }\r\n}\r\nexports.default = Fighter;\r\n\n\n//# sourceURL=webpack:///./src/ts/fighter.ts?");

/***/ }),

/***/ "./src/ts/fighterView.ts":
/*!*******************************!*\
  !*** ./src/ts/fighterView.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst view_1 = __importDefault(__webpack_require__(/*! ./view */ \"./src/ts/view.ts\"));\r\nclass FighterView extends view_1.default {\r\n    constructor(fighter, handleClick, handleSelect) {\r\n        super();\r\n        this.createFighter(fighter, handleClick, handleSelect);\r\n    }\r\n    createFighter(fighter, handleClick, handleSelect) {\r\n        const { name, source, _id } = fighter;\r\n        const nameElement = this.createName(name);\r\n        const imageElement = this.createImage(source);\r\n        const checkBox = this.createElement({\r\n            tagName: \"input\",\r\n            className: \"choise-fighter\",\r\n            attributes: { type: \"checkbox\", id: `fighter-${_id}`, name: \"check[]\" }\r\n        });\r\n        this.element = this.createElement({\r\n            tagName: \"label\",\r\n            className: \"fighter\",\r\n            attributes: { for: `fighter-${_id}` }\r\n        });\r\n        this.element.append(checkBox, imageElement, nameElement);\r\n        this.element.addEventListener(\"change\", event => {\r\n            const fighterElementId = document.querySelector(`#fighter-${_id}`);\r\n            if (fighterElementId.checked) {\r\n                handleClick(event, fighter);\r\n                this.element.style.backgroundColor = \"#ba7cdf\";\r\n                this.element.style.boxShadow = \"4px 11px 0px 0px rgba(0,0,0,0.75)\";\r\n                this.element.style.border = \"#fefefe 5px solid\";\r\n            }\r\n            else {\r\n                handleSelect(event, fighter);\r\n                this.element.style.backgroundColor = \"\";\r\n                this.element.style.boxShadow = \"\";\r\n                this.element.style.border = \"\";\r\n            }\r\n        }, false);\r\n    }\r\n    createName(name) {\r\n        const nameElement = this.createElement({\r\n            tagName: \"span\",\r\n            className: \"name\"\r\n        });\r\n        nameElement.innerText = name;\r\n        return nameElement;\r\n    }\r\n    createImage(source) {\r\n        const attributes = { src: source };\r\n        const imgElement = this.createElement({\r\n            tagName: \"img\",\r\n            className: \"fighter-image\",\r\n            attributes\r\n        });\r\n        return imgElement;\r\n    }\r\n}\r\nexports.default = FighterView;\r\n\n\n//# sourceURL=webpack:///./src/ts/fighterView.ts?");

/***/ }),

/***/ "./src/ts/fightersView.ts":
/*!********************************!*\
  !*** ./src/ts/fightersView.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst view_1 = __importDefault(__webpack_require__(/*! ./view */ \"./src/ts/view.ts\"));\r\nconst fighterView_1 = __importDefault(__webpack_require__(/*! ./fighterView */ \"./src/ts/fighterView.ts\"));\r\nconst fightersService_1 = __webpack_require__(/*! ./services/fightersService */ \"./src/ts/services/fightersService.ts\");\r\nconst modal = document.querySelector(\".modal\");\r\nconst health = document.querySelector(\".form-health\");\r\nconst power = document.querySelector(\".form-power\");\r\nconst avatar = document.querySelector(\".avatar\");\r\nconst close = document.querySelector(\".close\");\r\nconst modalForm = document.querySelector(\".modal-form\");\r\nclass FightersView extends view_1.default {\r\n    constructor(fighters) {\r\n        super();\r\n        this.fightersDetailsMap = new Map();\r\n        console.log(fighters);\r\n        this.handleClick = this.handleFighterClick.bind(this);\r\n        this.handleSelect = this.handleFighterSelect.bind(this);\r\n        this.fighterToFight = [];\r\n        this.createFighters(fighters);\r\n        modalForm.addEventListener(\"submit\", e => {\r\n            e.preventDefault();\r\n            if (!(e.target instanceof HTMLElement)) {\r\n                return;\r\n            }\r\n            const idx = e.target.dataset.id;\r\n            const oldFighter = this.fightersDetailsMap.get(idx);\r\n            const updatedFighter = {\r\n                ...oldFighter,\r\n                attack: +power.value,\r\n                health: +health.value\r\n            };\r\n            this.fightersDetailsMap.set(idx, updatedFighter);\r\n            const index = this.fighterToFight.findIndex(item => idx === item._id);\r\n            this.fighterToFight.splice(index, 1, updatedFighter);\r\n            this.handleModalClose();\r\n        });\r\n    }\r\n    createFighters(fighters) {\r\n        const fighterElements = fighters.map(fighter => {\r\n            const fighterView = new fighterView_1.default(fighter, this.handleClick, this.handleSelect);\r\n            return fighterView.element;\r\n        });\r\n        this.element = this.createElement({\r\n            tagName: \"div\",\r\n            className: \"fighters\"\r\n        });\r\n        this.element.append(...fighterElements);\r\n    }\r\n    handleModalClose() {\r\n        if (modal) {\r\n            modal.style.display = \"none\";\r\n        }\r\n    }\r\n    openModal(fighterDetails) {\r\n        modal.style.display = \"block\";\r\n        modalForm.setAttribute(\"data-id\", fighterDetails._id);\r\n        avatar.src = fighterDetails.source;\r\n        health.value = fighterDetails.health;\r\n        power.value = fighterDetails.attack;\r\n    }\r\n    async handleFighterClick(event, fighter) {\r\n        let fighterDetails = this.fightersDetailsMap.get(fighter._id);\r\n        if (!fighterDetails) {\r\n            fighterDetails = await fightersService_1.fighterService.getFighterDetails(fighter._id);\r\n            this.fightersDetailsMap.set(fighter._id, fighterDetails);\r\n        }\r\n        this.openModal(fighterDetails);\r\n        if (close) {\r\n            close.addEventListener(\"click\", () => {\r\n                this.handleModalClose();\r\n            });\r\n        }\r\n        this.handleFighterSelect(event, fighterDetails);\r\n    }\r\n    handleFighterSelect(event, fighter) {\r\n        const index = this.fighterToFight.findIndex((item) => item._id === fighter._id);\r\n        if (index === -1) {\r\n            this.fighterToFight.push(fighter);\r\n        }\r\n        else {\r\n            this.fighterToFight.splice(index, 1);\r\n        }\r\n    }\r\n}\r\nexports.default = FightersView;\r\n\n\n//# sourceURL=webpack:///./src/ts/fightersView.ts?");

/***/ }),

/***/ "./src/ts/helpers/apiHelper.ts":
/*!*************************************!*\
  !*** ./src/ts/helpers/apiHelper.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst API_URL = \"https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/\";\r\nfunction callApi(endpoind, method) {\r\n    const url = API_URL + endpoind;\r\n    const options = {\r\n        method\r\n    };\r\n    return fetch(url, options)\r\n        .then(response => response.ok ? response.json() : Promise.reject(Error(\"Failed to load\")))\r\n        .catch(error => {\r\n        throw error;\r\n    });\r\n}\r\nexports.callApi = callApi;\r\n\n\n//# sourceURL=webpack:///./src/ts/helpers/apiHelper.ts?");

/***/ }),

/***/ "./src/ts/services/fightersService.ts":
/*!********************************************!*\
  !*** ./src/ts/services/fightersService.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst apiHelper_1 = __webpack_require__(/*! ../helpers/apiHelper */ \"./src/ts/helpers/apiHelper.ts\");\r\nclass FighterService {\r\n    async getFighters() {\r\n        try {\r\n            const endpoint = \"fighters.json\";\r\n            const apiResult = await apiHelper_1.callApi(endpoint, \"GET\");\r\n            return JSON.parse(atob(apiResult.content));\r\n        }\r\n        catch (error) {\r\n            throw error;\r\n        }\r\n    }\r\n    async getFighterDetails(_id) {\r\n        try {\r\n            const endpoint = `details/fighter/${_id}.json`;\r\n            const apiResult = await apiHelper_1.callApi(endpoint, \"GET\");\r\n            return JSON.parse(atob(apiResult.content));\r\n        }\r\n        catch (error) {\r\n            throw error;\r\n        }\r\n    }\r\n}\r\nexports.fighterService = new FighterService();\r\n\n\n//# sourceURL=webpack:///./src/ts/services/fightersService.ts?");

/***/ }),

/***/ "./src/ts/view.ts":
/*!************************!*\
  !*** ./src/ts/view.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass View {\r\n    constructor() {\r\n        this.element = document.getElementById(\"root\");\r\n    }\r\n    createElement({ tagName, className = \"\", attributes = {} }) {\r\n        const element = document.createElement(tagName);\r\n        const clazz = className.split(' ');\r\n        clazz.forEach((item) => {\r\n            element.classList.add(item);\r\n        });\r\n        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));\r\n        return element;\r\n    }\r\n}\r\nexports.default = View;\r\n\n\n//# sourceURL=webpack:///./src/ts/view.ts?");

/***/ })

/******/ });