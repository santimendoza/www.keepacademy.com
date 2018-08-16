webpackHotUpdate(5,{

/***/ "./components/Header.js/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/cl-0628/Documents/personal/projects/www.keepacademy.com/components/Header.js/Header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    // static async getInitialProps({ req }) {
    //   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    //   return { userAgent };
    // }
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "navbar-brand",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "Navbar"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "navbar-nav mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Home ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "(current)"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Link")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link dropdown-toggle",
        href: "#",
        id: "navbarDropdown",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Dropdown"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Something else here"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link disabled",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Disabled"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "form-inline my-2 my-lg-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        className: "form-control mr-sm-2",
        type: "search",
        placeholder: "Search",
        "aria-label": "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-outline-success my-2 my-sm-0",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Search")))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.7a35ccc26a3cc38c7c84.hot-update.js.map