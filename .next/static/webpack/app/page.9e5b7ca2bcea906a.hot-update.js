"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Users.jsx":
/*!**********************************!*\
  !*** ./app/components/Users.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Users(param) {\n    let { users } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between\",\n                    onClick: ()=>{\n                        alert(user.id);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"font-bold\",\n                                    children: [\n                                        user.id,\n                                        \" \",\n                                        user.first_name,\n                                        \" \",\n                                        user.last_name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/russ/Desktop/seo-app-users/app/components/Users.jsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 4\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-slate-100\",\n                                    children: [\n                                        \"E-mail: \",\n                                        user.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/russ/Desktop/seo-app-users/app/components/Users.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 4\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/russ/Desktop/seo-app-users/app/components/Users.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 2\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: user.avatar,\n                            alt: user.first_name,\n                            className: \"rounded-full w-20\"\n                        }, void 0, false, {\n                            fileName: \"/Users/russ/Desktop/seo-app-users/app/components/Users.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 2\n                        }, this)\n                    ]\n                }, user.id, true, {\n                    fileName: \"/Users/russ/Desktop/seo-app-users/app/components/Users.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 2\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/russ/Desktop/seo-app-users/app/components/Users.jsx\",\n                lineNumber: 8,\n                columnNumber: 2\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/russ/Desktop/seo-app-users/app/components/Users.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1VzZXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUM0QjtBQUU1QixTQUFTQyxNQUFNLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDtJQUNiLHFCQUNFLDhEQUFDQztrQkFDRUQsTUFBTUUsR0FBRyxDQUFDLENBQUNDLHFCQUNqQiw4REFBQ0wsa0RBQUlBOzBCQUVMLDRFQUFDTTtvQkFFREMsV0FBVTtvQkFDVkMsU0FBUzt3QkFDUEMsTUFBTUosS0FBS0ssRUFBRTtvQkFDZjs7c0NBRUEsOERBQUNDOzs4Q0FDQyw4REFBQ0M7b0NBQUdMLFdBQVU7O3dDQUNYRixLQUFLSyxFQUFFO3dDQUFDO3dDQUFFTCxLQUFLUSxVQUFVO3dDQUFDO3dDQUFFUixLQUFLUyxTQUFTOzs7Ozs7OzhDQUU3Qyw4REFBQ0M7b0NBQUVSLFdBQVU7O3dDQUFpQjt3Q0FBU0YsS0FBS1csS0FBSzs7Ozs7Ozs7Ozs7OztzQ0FFbkQsOERBQUNDOzRCQUNDQyxLQUFLYixLQUFLYyxNQUFNOzRCQUNoQkMsS0FBS2YsS0FBS1EsVUFBVTs0QkFDcEJOLFdBQVU7Ozs7Ozs7bUJBZlBGLEtBQUtLLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQXdCYjtLQS9CU1Q7QUFpQ1QsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVXNlcnMuanN4PzdmYjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIFVzZXJzKHsgdXNlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcbiA8TGluaz5cbiBcbiA8bGlcbiBrZXk9e3VzZXIuaWR9XG4gY2xhc3NOYW1lPVwiYmctc2xhdGUtNDAwIG1iLTIgcC00IHJvdW5kZWQtbWQgdGV4dC1ibGFjayBmbGV4IGp1c3RpZnktYmV0d2VlblwiXG4gb25DbGljaz17KCkgPT4ge1xuICAgYWxlcnQodXNlci5pZCk7XG4gfX1cbj5cbiA8ZGl2PlxuICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICB7dXNlci5pZH0ge3VzZXIuZmlyc3RfbmFtZX0ge3VzZXIubGFzdF9uYW1lfVxuICAgPC9oNT5cbiAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMTAwXCI+RS1tYWlsOiB7dXNlci5lbWFpbH08L3A+XG4gPC9kaXY+XG4gPGltZ1xuICAgc3JjPXt1c2VyLmF2YXRhcn1cbiAgIGFsdD17dXNlci5maXJzdF9uYW1lfVxuICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHctMjBcIlxuIC8+XG48L2xpPlxuIFxuIDwvTGluaz5cbiAgICAgICAgXG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiJdLCJuYW1lcyI6WyJMaW5rIiwiVXNlcnMiLCJ1c2VycyIsInVsIiwibWFwIiwidXNlciIsImxpIiwiY2xhc3NOYW1lIiwib25DbGljayIsImFsZXJ0IiwiaWQiLCJkaXYiLCJoNSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwIiwiZW1haWwiLCJpbWciLCJzcmMiLCJhdmF0YXIiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Users.jsx\n"));

/***/ })

});