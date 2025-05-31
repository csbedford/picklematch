/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/supabaseClient */ \"(pages-dir-node)/./lib/supabaseClient.js\");\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children })=>{\n    const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const current = _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.getSession().then({\n                \"AuthProvider.useEffect.current\": ({ data })=>{\n                    setSession(data.session);\n                    setLoading(false);\n                }\n            }[\"AuthProvider.useEffect.current\"]);\n            const { data: listener } = _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange({\n                \"AuthProvider.useEffect\": (_event, session)=>{\n                    setSession(session);\n                }\n            }[\"AuthProvider.useEffect\"]);\n            return ({\n                \"AuthProvider.useEffect\": ()=>listener.subscription.unsubscribe()\n            })[\"AuthProvider.useEffect\"];\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const loadProfile = {\n                \"AuthProvider.useEffect.loadProfile\": async ()=>{\n                    if (session?.user) {\n                        const { data, error } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from('users').select('*').eq('id', session.user.id).maybeSingle();\n                        if (!error) setProfile(data);\n                    } else {\n                        setProfile(null);\n                    }\n                }\n            }[\"AuthProvider.useEffect.loadProfile\"];\n            loadProfile();\n        }\n    }[\"AuthProvider.useEffect\"], [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            session,\n            profile,\n            loading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/chris/Picklematch/context/AuthContext.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUU7QUFDdEI7QUFFakQsTUFBTUssNEJBQWNMLG9EQUFhQTtBQUUxQixNQUFNTSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0E7a0NBQUM7WUFDUixNQUFNWSxVQUFVVix5REFBUUEsQ0FBQ1csSUFBSSxDQUFDQyxVQUFVLEdBQUdDLElBQUk7a0RBQUMsQ0FBQyxFQUFFQyxJQUFJLEVBQUU7b0JBQ3ZEVCxXQUFXUyxLQUFLVixPQUFPO29CQUN2QkssV0FBVztnQkFDYjs7WUFFQSxNQUFNLEVBQUVLLE1BQU1DLFFBQVEsRUFBRSxHQUFHZix5REFBUUEsQ0FBQ1csSUFBSSxDQUFDSyxpQkFBaUI7MENBQUMsQ0FBQ0MsUUFBUWI7b0JBQ2xFQyxXQUFXRDtnQkFDYjs7WUFDQTswQ0FBTyxJQUFNVyxTQUFTRyxZQUFZLENBQUNDLFdBQVc7O1FBQ2hEO2lDQUFHLEVBQUU7SUFFTHJCLGdEQUFTQTtrQ0FBQztZQUNSLE1BQU1zQjtzREFBYztvQkFDbEIsSUFBSWhCLFNBQVNpQixNQUFNO3dCQUNqQixNQUFNLEVBQUVQLElBQUksRUFBRVEsS0FBSyxFQUFFLEdBQUcsTUFBTXRCLHlEQUFRQSxDQUNuQ3VCLElBQUksQ0FBQyxTQUNMQyxNQUFNLENBQUMsS0FDUEMsRUFBRSxDQUFDLE1BQU1yQixRQUFRaUIsSUFBSSxDQUFDSyxFQUFFLEVBQ3hCQyxXQUFXO3dCQUNkLElBQUksQ0FBQ0wsT0FBT2YsV0FBV087b0JBQ3pCLE9BQU87d0JBQ0xQLFdBQVc7b0JBQ2I7Z0JBQ0Y7O1lBQ0FhO1FBQ0Y7aUNBQUc7UUFBQ2hCO0tBQVE7SUFFWixxQkFDRSw4REFBQ0gsWUFBWTJCLFFBQVE7UUFBQ0MsT0FBTztZQUFFekI7WUFBU0U7WUFBU0U7UUFBUTtrQkFDdERMOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTTJCLFVBQVUsSUFBTWpDLGlEQUFVQSxDQUFDSSxhQUFhIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXMvUGlja2xlbWF0Y2gvY29udGV4dC9BdXRoQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9saWIvc3VwYWJhc2VDbGllbnQnO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdXBhYmFzZS5hdXRoLmdldFNlc3Npb24oKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgc2V0U2Vzc2lvbihkYXRhLnNlc3Npb24pO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGRhdGE6IGxpc3RlbmVyIH0gPSBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKChfZXZlbnQsIHNlc3Npb24pID0+IHtcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IGxpc3RlbmVyLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkUHJvZmlsZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgLmZyb20oJ3VzZXJzJylcbiAgICAgICAgICAuc2VsZWN0KCcqJylcbiAgICAgICAgICAuZXEoJ2lkJywgc2Vzc2lvbi51c2VyLmlkKVxuICAgICAgICAgIC5tYXliZVNpbmdsZSgpO1xuICAgICAgICBpZiAoIWVycm9yKSBzZXRQcm9maWxlKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UHJvZmlsZShudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxvYWRQcm9maWxlKCk7XG4gIH0sIFtzZXNzaW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2Vzc2lvbiwgcHJvZmlsZSwgbG9hZGluZyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3VwYWJhc2UiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY3VycmVudCIsImF1dGgiLCJnZXRTZXNzaW9uIiwidGhlbiIsImRhdGEiLCJsaXN0ZW5lciIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiX2V2ZW50Iiwic3Vic2NyaXB0aW9uIiwidW5zdWJzY3JpYmUiLCJsb2FkUHJvZmlsZSIsInVzZXIiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJlcSIsImlkIiwibWF5YmVTaW5nbGUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/AuthContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/ssr */ \"@supabase/ssr\");\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createBrowserClient)(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9zdXBhYmFzZUNsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFN0MsTUFBTUMsV0FBV0Qsa0VBQW1CQSxDQUN6Q0UsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0IsRUFDcENGLFFBQVFDLEdBQUcsQ0FBQ0UsNkJBQTZCLEVBQ3pDIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXMvUGlja2xlbWF0Y2gvbGliL3N1cGFiYXNlQ2xpZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3NyJztcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQnJvd3NlckNsaWVudChcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWVxuKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVCcm93c2VyQ2xpZW50Iiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/supabaseClient.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"(pages-dir-node)/./context/AuthContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/chris/Picklematch/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/chris/Picklematch/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUN1QjtBQUV0RCxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCw4REFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2NocmlzL1BpY2tsZW1hdGNoL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/ssr":
/*!********************************!*\
  !*** external "@supabase/ssr" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/ssr");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();