/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tmin-height: 100vh;\r\n\tpadding: 2rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tbackground: linear-gradient(135deg, #0f172a, #1e3a8a);\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tcolor: #ffffff;\r\n}\r\n\r\nmain {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tmax-width: 680px;\r\n\tpadding: 2rem;\r\n\tbackground-color: rgba(255, 255, 255, 0.1);\r\n\tborder: 1px solid rgba(255, 255, 255, 0.2);\r\n\tborder-radius: 20px;\r\n\tbox-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n\r\n#location {\r\n\twidth: 100%;\r\n\tmin-width: 0;\r\n\tpadding: 12px 56px 12px 16px;\r\n\tborder: 1px solid rgba(255, 255, 255, 0.3);\r\n\tborder-radius: 8px;\r\n\tbackground-color: rgba(255, 255, 255, 0.15);\r\n\tcolor: #ffffff;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n#location::placeholder {\r\n\tcolor: #cbd5e1;\r\n}\r\n\r\n#location:focus-visible,\r\n#weather-form .search-button:focus-visible {\r\n\toutline: 2px solid #93c5fd;\r\n\toutline-offset: 1px;\r\n}\r\n\r\n.search-field {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n}\r\n\r\n#weather-form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 10px;\r\n\tmargin: 24px 0;\r\n}\r\n\r\n#weather-form .search-button {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tright: 6px;\r\n\ttransform: translateY(-50%);\r\n\r\n\tdisplay: grid;\r\n\tplace-items: center;\r\n\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tpadding: 0;\r\n\r\n\tborder: none;\r\n\tborder-radius: 6px;\r\n\tbackground-color: transparent;\r\n\tcolor: #ffffff;\r\n\tcursor: pointer;\r\n}\r\n\r\n#weather-form .search-button:hover {\r\n\tbackground-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n#weather-form label {\r\n\talign-self: flex-start;\r\n\tfont-weight: 500;\r\n}\r\n\r\n#weather-display:not(:empty) {\r\n\tmargin-top: 24px;\r\n}\r\n\r\n.weather-condition {\r\n\tmargin: 0;\r\n\tfont-size: 1.1rem;\r\n\tcolor: #dbeafe;\r\n}\r\n\r\n.weather-summary {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tgap: 16px;\r\n\tpadding: 20px 0 18px;\r\n\tborder-top: 1px solid rgba(255, 255, 255, 0.12);\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, 0.12);\r\n}\r\n\r\n.weather-summary-text {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 12px;\r\n\tmin-width: 0;\r\n}\r\n\r\n.weather-location {\r\n\tmargin: 0;\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 600;\r\n\toverflow-wrap: anywhere;\r\n}\r\n\r\n.weather-temperature {\r\n\tmargin: 0;\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1;\r\n}\r\n\r\n.weather-summary-icon {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-shrink: 0;\r\n}\r\n\r\n.weather-details {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(2, minmax(0, 1fr));\r\n\tgap: 12px;\r\n\tmargin-top: 18px;\r\n}\r\n\r\n.weather-card {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 10px;\r\n\tpadding: 18px;\r\n\tborder: 1px solid rgba(255, 255, 255, 0.08);\r\n\tborder-radius: 14px;\r\n\tbackground-color: rgba(255, 255 ,255, 0.08);\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.weather-card-label {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 8px;\r\n\tfont-size: 0.95rem;\r\n\tcolor: #cbd5e1;\r\n}\r\n\r\n.weather-card svg {\r\n\tflex-shrink: 0;\r\n\tcolor: #93c5fd;\r\n}\r\n\r\n.weather-card-value {\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n}\r\n\r\n.units-card {\r\n\twidth: 100%;\r\n\tfont: inherit;\r\n\ttext-align: left;\r\n\tcursor: pointer;\r\n}\r\n\r\n.units-card:hover {\r\n\tbackground-color: rgba(255, 255, 255, 0.12);\r\n}\r\n\r\n.units-card:focus-visible {\r\n\toutline: 2px solid #93c5fd;\r\n\toutline-offset: 3px;\r\n}\r\n\r\n#weather-error {\r\n\tmargin: 16px 0;\r\n\tpadding: 16px;\r\n\tbackground-color: rgba(239, 68, 68, 0.15);\r\n\tborder: 1px solid rgba(239, 68, 68, 0.4);\r\n\tborder-radius: 8px;\r\n\tcolor: #fecaca;\r\n\tfont-size: 0.95rem;\r\n}\r\n\r\n#weather-error[hidden] {\r\n\tdisplay: none;\r\n}\r\n\r\n#weather-loading {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 10px;\r\n\tmargin: 16px 0;\r\n\tcolor: #bfdbfe;\r\n\tfont-size: 0.95rem;\r\n}\r\n\r\n#weather-loading[hidden] {\r\n\tdisplay: none;\r\n}\r\n\r\n#weather-loading svg {\r\n\tflex-shrink: 0;\r\n\tanimation: weather-spin 1s linear infinite;\r\n}\r\n\r\n.weather-empty {\r\n\tmargin: 0;\r\n\tpadding: 24px 16px;\r\n\tborder: 1px dashed rgba(255, 255, 255, 0.25);\r\n\tborder-radius: 12px;\r\n\tcolor: #cbd5e1;\r\n\ttext-align: center;\r\n\tfont-size: 0.95rem;\r\n}\r\n\r\n@keyframes weather-spin {\r\n\tto {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n#weather-form .search-button:disabled {\r\n\topacity: 0.5;\r\n\tcursor: not-allowed;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\tbody {\r\n\t\tpadding: 1rem;\r\n\t}\r\n\r\n\tmain {\r\n\t\tpadding: 1.5rem;\r\n\t}\r\n}\r\n\r\n@media (max-width: 480px) {\r\n\t.weather-summary {\r\n\t\talign-items: flex-start;\r\n\t}\r\n\r\n\t.weather-temperature {\r\n\t\tfont-size: 1.5rem;\r\n\t}\r\n\r\n\t.weather-details {\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n\r\n\t.weather-card-value {\r\n\t\tfont-size: 1.1rem;\r\n\t}\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n\t#weather-loading svg {\r\n\t\tanimation: none;\r\n\t}\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/createElement.mjs"
/*!********************************************************!*\
  !*** ./node_modules/lucide/dist/esm/createElement.mjs ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createElement)\n/* harmony export */ });\n/* harmony import */ var _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultAttributes.mjs */ \"./node_modules/lucide/dist/esm/defaultAttributes.mjs\");\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\n\n\nconst createSVGElement = ([tag, attrs, children]) => {\n  const element = document.createElementNS(\"http://www.w3.org/2000/svg\", tag);\n  Object.keys(attrs).forEach((name) => {\n    element.setAttribute(name, String(attrs[name]));\n  });\n  if (children?.length) {\n    children.forEach((child) => {\n      const childElement = createSVGElement(child);\n      element.appendChild(childElement);\n    });\n  }\n  return element;\n};\nconst createElement = (iconNode, customAttrs = {}) => {\n  const tag = \"svg\";\n  const attrs = {\n    ..._defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ...customAttrs\n  };\n  return createSVGElement([tag, attrs, iconNode]);\n};\n\n\n//# sourceMappingURL=createElement.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/createElement.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/defaultAttributes.mjs"
/*!************************************************************!*\
  !*** ./node_modules/lucide/dist/esm/defaultAttributes.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ defaultAttributes)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst defaultAttributes = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: 24,\n  height: 24,\n  viewBox: \"0 0 24 24\",\n  fill: \"none\",\n  stroke: \"currentColor\",\n  \"stroke-width\": 2,\n  \"stroke-linecap\": \"round\",\n  \"stroke-linejoin\": \"round\"\n};\n\n\n//# sourceMappingURL=defaultAttributes.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/defaultAttributes.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/cloud-rain.mjs"
/*!***********************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/cloud-rain.mjs ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CloudRain)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst CloudRain = [\n  [\"path\", { d: \"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\" }],\n  [\"path\", { d: \"M16 14v6\" }],\n  [\"path\", { d: \"M8 14v6\" }],\n  [\"path\", { d: \"M12 16v6\" }]\n];\n\n\n//# sourceMappingURL=cloud-rain.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/cloud-rain.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/cloud-snow.mjs"
/*!***********************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/cloud-snow.mjs ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CloudSnow)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst CloudSnow = [\n  [\"path\", { d: \"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\" }],\n  [\"path\", { d: \"M8 15h.01\" }],\n  [\"path\", { d: \"M8 19h.01\" }],\n  [\"path\", { d: \"M12 17h.01\" }],\n  [\"path\", { d: \"M12 21h.01\" }],\n  [\"path\", { d: \"M16 15h.01\" }],\n  [\"path\", { d: \"M16 19h.01\" }]\n];\n\n\n//# sourceMappingURL=cloud-snow.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/cloud-snow.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/cloud-sun.mjs"
/*!**********************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/cloud-sun.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CloudSun)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst CloudSun = [\n  [\"path\", { d: \"M12 2v2\" }],\n  [\"path\", { d: \"m4.93 4.93 1.41 1.41\" }],\n  [\"path\", { d: \"M20 12h2\" }],\n  [\"path\", { d: \"m19.07 4.93-1.41 1.41\" }],\n  [\"path\", { d: \"M15.947 12.65a4 4 0 0 0-5.925-4.128\" }],\n  [\"path\", { d: \"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z\" }]\n];\n\n\n//# sourceMappingURL=cloud-sun.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/cloud-sun.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/cloud.mjs"
/*!******************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/cloud.mjs ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cloud)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst Cloud = [[\"path\", { d: \"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\" }]];\n\n\n//# sourceMappingURL=cloud.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/cloud.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/droplets.mjs"
/*!*********************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/droplets.mjs ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Droplets)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst Droplets = [\n  [\n    \"path\",\n    {\n      d: \"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z\"\n    }\n  ],\n  [\n    \"path\",\n    {\n      d: \"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\"\n    }\n  ]\n];\n\n\n//# sourceMappingURL=droplets.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/droplets.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/loader-circle.mjs"
/*!**************************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/loader-circle.mjs ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoaderCircle)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst LoaderCircle = [[\"path\", { d: \"M21 12a9 9 0 1 1-6.219-8.56\" }]];\n\n\n//# sourceMappingURL=loader-circle.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/loader-circle.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/refresh-ccw.mjs"
/*!************************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/refresh-ccw.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RefreshCcw)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst RefreshCcw = [\n  [\"path\", { d: \"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" }],\n  [\"path\", { d: \"M3 3v5h5\" }],\n  [\"path\", { d: \"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16\" }],\n  [\"path\", { d: \"M16 16h5v5\" }]\n];\n\n\n//# sourceMappingURL=refresh-ccw.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/refresh-ccw.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/search.mjs"
/*!*******************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/search.mjs ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Search)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst Search = [\n  [\"path\", { d: \"m21 21-4.34-4.34\" }],\n  [\"circle\", { cx: \"11\", cy: \"11\", r: \"8\" }]\n];\n\n\n//# sourceMappingURL=search.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/search.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/sun.mjs"
/*!****************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/sun.mjs ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sun)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst Sun = [\n  [\"circle\", { cx: \"12\", cy: \"12\", r: \"4\" }],\n  [\"path\", { d: \"M12 2v2\" }],\n  [\"path\", { d: \"M12 20v2\" }],\n  [\"path\", { d: \"m4.93 4.93 1.41 1.41\" }],\n  [\"path\", { d: \"m17.66 17.66 1.41 1.41\" }],\n  [\"path\", { d: \"M2 12h2\" }],\n  [\"path\", { d: \"M20 12h2\" }],\n  [\"path\", { d: \"m6.34 17.66-1.41 1.41\" }],\n  [\"path\", { d: \"m19.07 4.93-1.41 1.41\" }]\n];\n\n\n//# sourceMappingURL=sun.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/sun.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/thermometer.mjs"
/*!************************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/thermometer.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Thermometer)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst Thermometer = [[\"path\", { d: \"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z\" }]];\n\n\n//# sourceMappingURL=thermometer.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/thermometer.mjs?\n}");

/***/ },

/***/ "./node_modules/lucide/dist/esm/icons/wind.mjs"
/*!*****************************************************!*\
  !*** ./node_modules/lucide/dist/esm/icons/wind.mjs ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wind)\n/* harmony export */ });\n/**\n * @license lucide v1.70.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */\n\nconst Wind = [\n  [\"path\", { d: \"M12.8 19.6A2 2 0 1 0 14 16H2\" }],\n  [\"path\", { d: \"M17.5 8a2.5 2.5 0 1 1 2 4H2\" }],\n  [\"path\", { d: \"M9.8 4.4A2 2 0 1 1 11 8H2\" }]\n];\n\n\n//# sourceMappingURL=wind.mjs.map\n\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/lucide/dist/esm/icons/wind.mjs?\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderWeather: () => (/* binding */ renderWeather)\n/* harmony export */ });\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/createElement.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/cloud-rain.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/cloud-snow.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/cloud-sun.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/cloud.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/droplets.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/refresh-ccw.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/sun.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/thermometer.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/wind.mjs\");\n\r\n\r\nfunction fahrenheitToCelsius(fahrenheit) {\r\n\treturn (fahrenheit - 32) * (5 / 9);\r\n}\r\n\r\nfunction formatTemperature(fahrenheit, unit) {\r\n\tconst value = unit === \"C\" ? fahrenheitToCelsius(fahrenheit) : fahrenheit;\r\n\r\n\treturn `${value.toFixed(1)}°${unit}`;\r\n}\r\n\r\nfunction createWeatherCard(label, value, icon) {\r\n\tconst card = document.createElement(\"div\");\r\n\tcard.classList.add(\"weather-card\");\r\n\r\n\tconst labelElement = document.createElement(\"span\");\r\n\tlabelElement.classList.add(\"weather-card-label\");\r\n\tlabelElement.textContent = label;\r\n\r\n\tif (icon) {\r\n\t\tconst iconElement = (0,lucide__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(icon, {\r\n\t\t\t\"aria-hidden\": \"true\",\r\n\t\t\twidth: 18,\r\n\t\t\theight: 18,\r\n\t\t});\r\n\r\n\t\tlabelElement.prepend(iconElement);\r\n\t}\r\n\r\n\tconst valueElement = document.createElement(\"span\");\r\n\tvalueElement.classList.add(\"weather-card-value\");\r\n\tvalueElement.textContent = value;\r\n\r\n\tcard.append(labelElement, valueElement);\r\n\r\n\treturn card;\r\n}\r\n\r\nfunction createUnitsCard(unit) {\r\n\tconst button = document.createElement(\"button\");\r\n\tbutton.type = \"button\";\r\n\tbutton.classList.add(\"weather-card\", \"units-card\");\r\n\tbutton.setAttribute(\"aria-label\", \"Toggle temperature units\");\r\n\r\n\tconst labelElement = document.createElement(\"span\");\r\n\tlabelElement.classList.add(\"weather-card-label\");\r\n\r\n\tconst iconElement = (0,lucide__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lucide__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\r\n\t\t\"aria-hidden\": \"true\",\r\n\t\twidth: 18,\r\n\t\theight: 18,\r\n\t});\r\n\r\n\tlabelElement.append(iconElement, \"Units\");\r\n\r\n\tconst valueElement = document.createElement(\"span\");\r\n\tvalueElement.classList.add(\"weather-card-value\");\r\n\tvalueElement.textContent = unit === \"F\" ? \"°F / °C\" : \"°C / °F\";\r\n\r\n\tbutton.append(labelElement, valueElement);\r\n\r\n\treturn button;\r\n}\r\n\r\nfunction getWeatherAppearance(condition) {\r\n\tconst description = (condition ?? \"\").toLowerCase();\r\n\r\n\tif (description.includes(\"snow\")) {\r\n\t\treturn {\r\n\t\t\ticon: lucide__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n\t\t\tcolor: \"#bae6fd\",\r\n\t\t};\r\n\t}\r\n\r\n\tif (description.includes(\"rain\")) {\r\n\t\treturn {\r\n\t\t\ticon: lucide__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\t\t\tcolor: \"#60a5fa\",\r\n\t\t};\r\n\t}\r\n\r\n\tif (description.includes(\"partially cloudy\")) {\r\n\t\treturn {\r\n\t\t\ticon: lucide__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n\t\t\tcolor: \"#fbbf24\",\r\n\t\t};\r\n\t}\r\n\r\n\tif (description.includes(\"cloud\") || description.includes(\"overcast\")) {\r\n\t\treturn {\r\n\t\t\ticon: lucide__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n\t\t\tcolor: \"#94a3b8\",\r\n\t\t};\r\n\t}\r\n\r\n\tif (description.includes(\"clear\") || description.includes(\"sunny\")) {\r\n\t\treturn {\r\n\t\t\ticon: lucide__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n\t\t\tcolor: \"#fbbf24\",\r\n\t\t}\r\n\t}\r\n\r\n\treturn {\r\n\t\ticon: lucide__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n\t\tcolor: \"#fbbf24\",\r\n\t};\r\n}\r\n\r\nfunction renderWeather(weather, unit = \"F\") {\r\n\tconst weatherDisplay = document.querySelector(\"#weather-display\");\r\n\r\n\tconst summary = document.createElement(\"div\");\r\n\tsummary.classList.add(\"weather-summary\");\r\n\r\n\tconst summaryText = document.createElement(\"div\");\r\n\tsummaryText.classList.add(\"weather-summary-text\");\r\n\r\n\tconst location = document.createElement(\"h2\");\r\n\tlocation.classList.add(\"weather-location\");\r\n\tlocation.textContent = weather.location;\r\n\r\n\tconst temperature = document.createElement(\"p\");\r\n\ttemperature.classList.add(\"weather-temperature\");\r\n\ttemperature.textContent = formatTemperature(weather.temperature, unit);\r\n\r\n\tconst condition = document.createElement(\"p\");\r\n\tcondition.classList.add(\"weather-condition\");\r\n\tcondition.textContent = weather.condition;\r\n\r\n\tsummaryText.append(location, temperature, condition);\r\n\r\n\tconst summaryIcon = document.createElement(\"div\");\r\n\tsummaryIcon.classList.add(\"weather-summary-icon\");\r\n\r\n\tconst appearance = getWeatherAppearance(weather.condition);\r\n\r\n\tconst conditionIcon = (0,lucide__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(appearance.icon, {\r\n\t\t\"aria-hidden\": \"true\",\r\n\t\twidth: 42,\r\n\t\theight: 42,\r\n\t});\r\n\r\n\tsummaryIcon.style.color = appearance.color;\r\n\r\n\tsummaryIcon.append(conditionIcon);\r\n\r\n\tsummary.append(summaryText, summaryIcon);\r\n\r\n\tconst details = document.createElement(\"div\");\r\n\tdetails.classList.add(\"weather-details\");\r\n\r\n\tconst feelsLike = createWeatherCard(\"Feels Like\", formatTemperature(weather.feelsLike, unit), lucide__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\n\r\n\tconst humidity = createWeatherCard(\"Humidity\", `${weather.humidity}%`, lucide__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n\r\n\tconst windSpeed = createWeatherCard(\"Wind Speed\", `${weather.windSpeed} mph`, lucide__WEBPACK_IMPORTED_MODULE_9__[\"default\"])\r\n\r\n\tconst units = createUnitsCard(unit);\r\n\r\n\tdetails.append(feelsLike, humidity, windSpeed, units);\r\n\r\n\tweatherDisplay.replaceChildren(summary, details);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-weather-app/./src/dom.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ \"./src/weather.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/createElement.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/loader-circle.mjs\");\n/* harmony import */ var lucide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide */ \"./node_modules/lucide/dist/esm/icons/search.mjs\");\n\r\n\r\n\r\n\r\n\r\nconst form = document.querySelector(\"#weather-form\");\r\nconst locationInput = document.querySelector(\"#location\");\r\nconst errorDisplay = document.querySelector(\"#weather-error\");\r\nconst searchButton = document.querySelector(\"#search-button\");\r\nconst weatherDisplay = document.querySelector(\"#weather-display\");\r\nconst loadingDisplay = document.querySelector(\"#weather-loading\");\r\n\r\nconst searchIcon = (0,lucide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(lucide__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\r\n\t\"aria-hidden\": \"true\",\r\n\twidth: 20,\r\n\theight: 20,\r\n});\r\n\r\nsearchButton.append(searchIcon);\r\n\r\nconst loadingIcon = (0,lucide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(lucide__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\r\n\t\"aria-hidden\": \"true\",\r\n\twidth: 20,\r\n\theight: 20,\r\n});\r\n\r\nloadingDisplay.prepend(loadingIcon);\r\n\r\nlet currentWeather = null;\r\nlet currentUnit = \"F\";\r\nlet isLoading = false;\r\n\r\nform.addEventListener(\"submit\", async (e) => {\r\n\te.preventDefault();\r\n\r\n\tif (isLoading) return;\r\n\r\n\tconst location = locationInput.value.trim();\r\n\r\n\tif (!location) return;\r\n\r\n\terrorDisplay.textContent = \"\";\r\n\terrorDisplay.hidden = true;\r\n\r\n\tisLoading = true;\r\n\tloadingDisplay.hidden = false;\r\n\tsearchButton.disabled = true;\r\n\r\n\ttry {\r\n\t\tconst data = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_1__.getWeather)(location);\r\n\r\n\t\tcurrentWeather = (0,_weather_js__WEBPACK_IMPORTED_MODULE_1__.processWeatherData)(data);\r\n\r\n\t\t(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderWeather)(currentWeather, currentUnit);\r\n\t} catch (error) {\r\n\t\tconsole.error(\"Unable to retrieve weather:\", error.message);\r\n\r\n\t\terrorDisplay.textContent = \r\n\t\t\terror instanceof TypeError\r\n\t\t\t\t? \"Unable to connect to the weather service. Please check your internet connection and try again.\"\r\n\t\t\t\t: error.message;\r\n\t\t\t\t\r\n\t\terrorDisplay.hidden = false;\r\n\t} finally {\r\n\t\tisLoading = false;\r\n\t\tloadingDisplay.hidden = true;\r\n\t\tsearchButton.disabled = false;\r\n\t}\r\n});\r\n\r\nweatherDisplay.addEventListener(\"click\", (e) => {\r\n\tconst unitsCard = e.target.closest(\".units-card\");\r\n\r\n\tif (!unitsCard || !currentWeather) return;\r\n\r\n\tcurrentUnit = currentUnit === \"F\" ? \"C\" : \"F\";\r\n\t(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderWeather)(currentWeather, currentUnit);\r\n});\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?\n}");

/***/ },

/***/ "./src/weather.js"
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather),\n/* harmony export */   processWeatherData: () => (/* binding */ processWeatherData)\n/* harmony export */ });\n\r\n\r\nasync function getWeather(location) {\r\n\tconst url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=us&include=current&contentType=json`;\r\n\r\n\tconst response = await fetch(url);\r\n\r\n\tif (response.status === 429) {\r\n\t\tthrow new Error(\r\n\t\t\t\"Weather API rate limit reached. Please try again later.\"\r\n\t\t);\r\n\t}\r\n\r\n\tif (response.status === 400) {\r\n\t\tthrow new Error(\r\n\t\t\t\"The weather service couldn't process that request. Check the location and try again.\"\r\n\t\t);\r\n\t}\r\n\r\n\tif (response.status === 401) {\r\n\t\tthrow new Error(\r\n\t\t\t\"Weather service authentication failed. Please try again later.\"\r\n\t\t);\r\n\t}\r\n\r\n\tif (!response.ok) {\r\n\t\tthrow new Error(`Weather request failed: ${response.status}`);\r\n\t}\r\n\r\n\tconst data = await response.json();\r\n\r\n\treturn data;\r\n}\r\n\r\nfunction processWeatherData(data) {\r\n\tconst current = data.currentConditions;\r\n\r\n\tif (!current) {\r\n\t\tthrow new Error(\"Weather data is unavailable for this location.\");\r\n\t}\r\n\r\n\treturn {\r\n\t\tlocation: data.resolvedAddress,\r\n\t\ttemperature: current.temp,\r\n\t\tfeelsLike: current.feelslike,\r\n\t\tcondition: current.conditions,\r\n\t\thumidity: current.humidity,\r\n\t\twindSpeed: current.windspeed,\r\n\t};\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-weather-app/./src/weather.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;