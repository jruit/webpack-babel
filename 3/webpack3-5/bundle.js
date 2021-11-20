/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sky_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _flower_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


console.log(_sky_jpg__WEBPACK_IMPORTED_MODULE_0__.default);
console.log(_flower_png__WEBPACK_IMPORTED_MODULE_1__.default);

var dom1 = `<img src='${_sky_jpg__WEBPACK_IMPORTED_MODULE_0__.default}' />`;
var dom2 = `<img src='${_flower_png__WEBPACK_IMPORTED_MODULE_1__.default}' />`;

window.onload = function () {
  document.getElementById('img1').innerHTML = dom1;
  document.getElementById('img2').innerHTML = dom2;
}



/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,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");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c7bf899839c31f83b38185c45a2b6a5e.png");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;