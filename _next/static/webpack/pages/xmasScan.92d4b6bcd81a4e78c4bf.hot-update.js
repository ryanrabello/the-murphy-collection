/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/xmasScan",{

/***/ "./pages/xmasScan.tsx":
/*!****************************!*\
  !*** ./pages/xmasScan.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_rabe796_Projects_learning_star_date_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_rabe796_Projects_learning_star_date_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Head */ \"./components/Head.tsx\");\n/* harmony import */ var _styles_xmasScan_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/xmasScan.module.css */ \"./styles/xmasScan.module.css\");\n/* harmony import */ var _styles_xmasScan_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_xmasScan_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Link */ \"./components/Link.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/rabe796/Projects/learning/star-date/pages/xmasScan.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_rabe796_Projects_learning_star_date_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nfunction InlineLink(_ref) {\n  var href = _ref.href,\n      children = _ref.children,\n      other = (0,_Users_rabe796_Projects_learning_star_date_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, [\"href\", \"children\"]);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", _objectSpread(_objectSpread({}, other), {}, {\n    href: href,\n    target: \"_BLANK\",\n    referrerPolicy: \"no-referrer\",\n    children: children\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_c = InlineLink;\nfunction Home() {\n  _s();\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),\n      query = _useRouter.query;\n\n  var address = query.address;\n  var key = query.key;\n  var tokenID = query.tokenID;\n  var contract = query.contract;\n  var link = \"https://opensea.io/assets/matic/\".concat(contract, \"/\").concat(tokenID);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Head__WEBPACK_IMPORTED_MODULE_6__.CustomHead, {\n        title: \"QR Scan - The Murphy Collection\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_styles_xmasScan_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainWrapper),\n      children: query.address && query.key ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: \"Congrats getting your Murphy NFT!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"You can see your NFT on OpenSea using the button below.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_7__.ExternalLink, {\n            href: link,\n            children: \"View your NFT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_7__.ExternalLink, {\n            className: \"bx--btn--tertiary\",\n            href: \"https://opensea.io/collection/the-murphy-collection\",\n            children: \"View all Murphy NFTs\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: \"Information about your wallet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n            children: \"Wallet Addres\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 15\n          }, this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 46\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n            children: address\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n            children: \"Wallet Private Key (Treat this like a password)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n            children: key\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: \"How to access your wallet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [\"1. Download\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InlineLink, {\n                href: \"https://metamask.io/\",\n                children: \"Meta Mask\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 19\n              }, this), \" \", \"and create an account.\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [\"2. Click \\\"Import Account\\\" in the upper menu of meta mask to add this wallet. Check out this\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InlineLink, {\n                href: \"https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account\",\n                children: [\" \", \"\\\"How to import into Meta Mask\\\" Article\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, this), \".\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [\"3. Log into\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InlineLink, {\n                href: \"https://opensea.io/\",\n                children: \"OpenSea.io\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 19\n              }, this), \" \", \"using the meta mask account associated with the wallet you imported.\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: \"What is an NFT?\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          children: \"Non-fungible token.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"Right, sorry. \\u201CNon-fungible\\u201D more or less means that it\\u2019s unique and can\\u2019t be replaced with something else. For example, a dollar is fungible \\u2014 trade one for another dollar, and you\\u2019ll have exactly the same thing. A one-of-a-kind trading card, however, is non-fungible. If you traded it for a different card, you\\u2019d have something completely different.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Read more about NFTs at this\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InlineLink, {\n            href: \"https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq\",\n            children: \"\\\"NFTs, explained\\\" article\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 15\n          }, this), \" \", \"by the Verge.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \" Unable to load your Murphy wallet.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"InlineLink\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMveG1hc1NjYW4udHN4PzcxMDAiXSwibmFtZXMiOlsiSW5saW5lTGluayIsImhyZWYiLCJjaGlsZHJlbiIsIm90aGVyIiwiSG9tZSIsInVzZVJvdXRlciIsInF1ZXJ5IiwiYWRkcmVzcyIsImtleSIsInRva2VuSUQiLCJjb250cmFjdCIsImxpbmsiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULE9BSTRDO0FBQUEsTUFIMUNDLElBRzBDLFFBSDFDQSxJQUcwQztBQUFBLE1BRjFDQyxRQUUwQyxRQUYxQ0EsUUFFMEM7QUFBQSxNQUR2Q0MsS0FDdUM7O0FBQzFDLHNCQUNFLG1HQUFPQSxLQUFQO0FBQWMsUUFBSSxFQUFFRixJQUFwQjtBQUEwQixVQUFNLEVBQUMsUUFBakM7QUFBMEMsa0JBQWMsRUFBQyxhQUF6RDtBQUFBLGNBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBVlFGLFU7QUFZTSxTQUFTSSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsbUJBQ1hDLHNEQUFTLEVBREU7QUFBQSxNQUNyQkMsS0FEcUIsY0FDckJBLEtBRHFCOztBQUc3QixNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0MsT0FBdEI7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLEtBQUssQ0FBQ0UsR0FBbEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdILEtBQUssQ0FBQ0csT0FBdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdKLEtBQUssQ0FBQ0ksUUFBdkI7QUFFQSxNQUFNQyxJQUFJLDZDQUFzQ0QsUUFBdEMsY0FBa0RELE9BQWxELENBQVY7QUFFQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0UsOERBQUMsd0RBQUQ7QUFBWSxhQUFLLEVBQUU7QUFBbkI7QUFB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IFJlYWN0LCB7IEFuY2hvckhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDdXN0b21IZWFkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMveG1hc1NjYW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlua1wiO1xuXG5mdW5jdGlvbiBJbmxpbmVMaW5rKHtcbiAgaHJlZixcbiAgY2hpbGRyZW4sXG4gIC4uLm90aGVyXG59OiBBbmNob3JIVE1MQXR0cmlidXRlczxIVE1MQW5jaG9yRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8YSB7Li4ub3RoZXJ9IGhyZWY9e2hyZWZ9IHRhcmdldD1cIl9CTEFOS1wiIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBxdWVyeS5hZGRyZXNzO1xuICBjb25zdCBrZXkgPSBxdWVyeS5rZXk7XG4gIGNvbnN0IHRva2VuSUQgPSBxdWVyeS50b2tlbklEO1xuICBjb25zdCBjb250cmFjdCA9IHF1ZXJ5LmNvbnRyYWN0O1xuXG4gIGNvbnN0IGxpbmsgPSBgaHR0cHM6Ly9vcGVuc2VhLmlvL2Fzc2V0cy9tYXRpYy8ke2NvbnRyYWN0fS8ke3Rva2VuSUR9YDtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8Q3VzdG9tSGVhZCB0aXRsZT17XCJRUiBTY2FuIC0gVGhlIE11cnBoeSBDb2xsZWN0aW9uXCJ9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlLm1haW5XcmFwcGVyfT5cbiAgICAgICAge3F1ZXJ5LmFkZHJlc3MgJiYgcXVlcnkua2V5ID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+Q29uZ3JhdHMgZ2V0dGluZyB5b3VyIE11cnBoeSBORlQhPC9oMT5cbiAgICAgICAgICAgIDxwPllvdSBjYW4gc2VlIHlvdXIgTkZUIG9uIE9wZW5TZWEgdXNpbmcgdGhlIGJ1dHRvbiBiZWxvdy48L3A+XG5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGhyZWY9e2xpbmt9PlZpZXcgeW91ciBORlQ8L0V4dGVybmFsTGluaz5cbiAgICAgICAgICAgICAgPEV4dGVybmFsTGlua1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJieC0tYnRuLS10ZXJ0aWFyeVwifVxuICAgICAgICAgICAgICAgIGhyZWY9e1wiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vdGhlLW11cnBoeS1jb2xsZWN0aW9uXCJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWaWV3IGFsbCBNdXJwaHkgTkZUc1xuICAgICAgICAgICAgICA8L0V4dGVybmFsTGluaz5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPGgyPkluZm9ybWF0aW9uIGFib3V0IHlvdXIgd2FsbGV0PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Ryb25nPldhbGxldCBBZGRyZXM8L3N0cm9uZz4gPGJyIC8+XG4gICAgICAgICAgICAgIDxwcmU+e2FkZHJlc3N9PC9wcmU+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5XYWxsZXQgUHJpdmF0ZSBLZXkgKFRyZWF0IHRoaXMgbGlrZSBhIHBhc3N3b3JkKTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHByZT57a2V5fTwvcHJlPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8aDI+SG93IHRvIGFjY2VzcyB5b3VyIHdhbGxldDwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDEuIERvd25sb2Fke1wiIFwifVxuICAgICAgICAgICAgICAgICAgPElubGluZUxpbmsgaHJlZj17XCJodHRwczovL21ldGFtYXNrLmlvL1wifT5cbiAgICAgICAgICAgICAgICAgICAgTWV0YSBNYXNrXG4gICAgICAgICAgICAgICAgICA8L0lubGluZUxpbms+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgYW5kIGNyZWF0ZSBhbiBhY2NvdW50LlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgMi4gQ2xpY2sgXCJJbXBvcnQgQWNjb3VudFwiIGluIHRoZSB1cHBlciBtZW51IG9mIG1ldGEgbWFzayB0b1xuICAgICAgICAgICAgICAgICAgYWRkIHRoaXMgd2FsbGV0LiBDaGVjayBvdXQgdGhpc3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9tZXRhbWFzay56ZW5kZXNrLmNvbS9oYy9lbi11cy9hcnRpY2xlcy8zNjAwMTU0ODkzMzEtSG93LXRvLWltcG9ydC1hbi1BY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgXCJIb3cgdG8gaW1wb3J0IGludG8gTWV0YSBNYXNrXCIgQXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVMaW5rPlxuICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgMy4gTG9nIGludG97XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8SW5saW5lTGluayBocmVmPXtcImh0dHBzOi8vb3BlbnNlYS5pby9cIn0+XG4gICAgICAgICAgICAgICAgICAgIE9wZW5TZWEuaW9cbiAgICAgICAgICAgICAgICAgIDwvSW5saW5lTGluaz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICB1c2luZyB0aGUgbWV0YSBtYXNrIGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIHRoZSB3YWxsZXQgeW91XG4gICAgICAgICAgICAgICAgICBpbXBvcnRlZC5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8aDI+V2hhdCBpcyBhbiBORlQ/PC9oMj5cbiAgICAgICAgICAgIDxoND5Ob24tZnVuZ2libGUgdG9rZW4uPC9oND5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBSaWdodCwgc29ycnkuIOKAnE5vbi1mdW5naWJsZeKAnSBtb3JlIG9yIGxlc3MgbWVhbnMgdGhhdCBpdOKAmXMgdW5pcXVlXG4gICAgICAgICAgICAgIGFuZCBjYW7igJl0IGJlIHJlcGxhY2VkIHdpdGggc29tZXRoaW5nIGVsc2UuIEZvciBleGFtcGxlLCBhIGRvbGxhclxuICAgICAgICAgICAgICBpcyBmdW5naWJsZSDigJQgdHJhZGUgb25lIGZvciBhbm90aGVyIGRvbGxhciwgYW5kIHlvdeKAmWxsIGhhdmVcbiAgICAgICAgICAgICAgZXhhY3RseSB0aGUgc2FtZSB0aGluZy4gQSBvbmUtb2YtYS1raW5kIHRyYWRpbmcgY2FyZCwgaG93ZXZlciwgaXNcbiAgICAgICAgICAgICAgbm9uLWZ1bmdpYmxlLiBJZiB5b3UgdHJhZGVkIGl0IGZvciBhIGRpZmZlcmVudCBjYXJkLCB5b3XigJlkIGhhdmVcbiAgICAgICAgICAgICAgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFJlYWQgbW9yZSBhYm91dCBORlRzIGF0IHRoaXN7XCIgXCJ9XG4gICAgICAgICAgICAgIDxJbmxpbmVMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3LnRoZXZlcmdlLmNvbS8yMjMxMDE4OC9uZnQtZXhwbGFpbmVyLXdoYXQtaXMtYmxvY2tjaGFpbi1jcnlwdG8tYXJ0LWZhcVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgXCJORlRzLCBleHBsYWluZWRcIiBhcnRpY2xlXG4gICAgICAgICAgICAgIDwvSW5saW5lTGluaz57XCIgXCJ9XG4gICAgICAgICAgICAgIGJ5IHRoZSBWZXJnZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD4gVW5hYmxlIHRvIGxvYWQgeW91ciBNdXJwaHkgd2FsbGV0LjwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/xmasScan.tsx\n");

/***/ })

});