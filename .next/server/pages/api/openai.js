module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/openai.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/openai.js":
/*!*****************************!*\
  !*** ./pages/api/openai.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst OpenAI = __webpack_require__(/*! openai-api */ \"openai-api\");\n\nconst openai = new OpenAI('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');\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  let prompt = `Question: ${req.body.name}\\n\\nAnswer:\\n`;\n  const gptResponse = await openai.complete({\n    engine: 'curie:ft-personal-2022-10-02-01-41-08',\n    prompt: prompt,\n    maxTokens: 256,\n    temperature: 0.6,\n    topP: 1,\n    presencePenalty: 0,\n    frequencyPenalty: 0.1,\n    bestOf: 1,\n    n: 1,\n    stop: [\"\\\\n\", \"END\"]\n  });\n  res.status(200).json({\n    text: `${gptResponse.data.choices[0].text}`\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvb3BlbmFpLmpzP2U5MzgiXSwibmFtZXMiOlsiT3BlbkFJIiwicmVxdWlyZSIsIm9wZW5haSIsInJlcSIsInJlcyIsInByb21wdCIsImJvZHkiLCJuYW1lIiwiZ3B0UmVzcG9uc2UiLCJjb21wbGV0ZSIsImVuZ2luZSIsIm1heFRva2VucyIsInRlbXBlcmF0dXJlIiwidG9wUCIsInByZXNlbmNlUGVuYWx0eSIsImZyZXF1ZW5jeVBlbmFsdHkiLCJiZXN0T2YiLCJuIiwic3RvcCIsInN0YXR1cyIsImpzb24iLCJ0ZXh0IiwiZGF0YSIsImNob2ljZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRixNQUFKLENBQVcscURBQVgsQ0FBZjtBQUllLHNFQUFPRyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUMsTUFBTSxHQUFJLGFBQVlGLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxJQUFLLGVBQXhDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLE1BQU1OLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQjtBQUN4Q0MsVUFBTSxFQUFFLHVDQURnQztBQUV4Q0wsVUFBTSxFQUFFQSxNQUZnQztBQUd4Q00sYUFBUyxFQUFFLEdBSDZCO0FBSXhDQyxlQUFXLEVBQUUsR0FKMkI7QUFLeENDLFFBQUksRUFBRSxDQUxrQztBQU14Q0MsbUJBQWUsRUFBRSxDQU51QjtBQU94Q0Msb0JBQWdCLEVBQUUsR0FQc0I7QUFReENDLFVBQU0sRUFBRSxDQVJnQztBQVN4Q0MsS0FBQyxFQUFFLENBVHFDO0FBVXhDQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQVZrQyxHQUFoQixDQUExQjtBQWFBZCxLQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxRQUFJLEVBQUcsR0FBRWIsV0FBVyxDQUFDYyxJQUFaLENBQWlCQyxPQUFqQixDQUF5QixDQUF6QixFQUE0QkYsSUFBSztBQUEzQyxHQUFyQjtBQUNELENBaEJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL29wZW5haS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9wZW5BSSA9IHJlcXVpcmUoJ29wZW5haS1hcGknKTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoJ3NrLXdiZFcyQVVrTkZtWVZPYWtydWNFVDNCbGJrRkpubEJpSHk1RHVvSElHSDFMY1NDNCcpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCBwcm9tcHQgPSBgUXVlc3Rpb246ICR7cmVxLmJvZHkubmFtZX1cXG5cXG5BbnN3ZXI6XFxuYDtcbiAgY29uc3QgZ3B0UmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY29tcGxldGUoe1xuICAgIGVuZ2luZTogJ2N1cmllOmZ0LXBlcnNvbmFsLTIwMjItMTAtMDItMDEtNDEtMDgnLFxuICAgIHByb21wdDogcHJvbXB0LFxuICAgIG1heFRva2VuczogMjU2LFxuICAgIHRlbXBlcmF0dXJlOiAwLjYsXG4gICAgdG9wUDogMSxcbiAgICBwcmVzZW5jZVBlbmFsdHk6IDAsXG4gICAgZnJlcXVlbmN5UGVuYWx0eTogMC4xLFxuICAgIGJlc3RPZjogMSxcbiAgICBuOiAxLFxuICAgIHN0b3A6IFtcIlxcXFxuXCIsIFwiRU5EXCJdXG59KTtcbiAgXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0ZXh0OiBgJHtncHRSZXNwb25zZS5kYXRhLmNob2ljZXNbMF0udGV4dH1gfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/openai.js\n");

/***/ }),

/***/ "openai-api":
/*!*****************************!*\
  !*** external "openai-api" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"openai-api\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvcGVuYWktYXBpXCI/OWE4OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJvcGVuYWktYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3BlbmFpLWFwaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///openai-api\n");

/***/ })

/******/ });