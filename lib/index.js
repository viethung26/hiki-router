"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Route = exports.default = exports.RouterContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RouterContext = _react.default.createContext("");

exports.RouterContext = RouterContext;

var Router =
/*#__PURE__*/
function (_Component) {
  _inherits(Router, _Component);

  function Router(props) {
    var _this;

    _classCallCheck(this, Router);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Router).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setPath", function (path) {
      window.history.pushState({}, "", path);

      _this.setState({
        path: path
      });
    });

    _this.state = {
      path: '/'
    };
    return _this;
  }

  _createClass(Router, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("popstate", function () {
        _this2.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      window.removeEventListener("popstate", function () {
        _this3.forceUpdate();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(RouterContext.Provider, {
        value: this.setPath
      }, _react.default.Children.map(this.props.children, function (child) {
        return _react.default.cloneElement(child);
      }));
    }
  }]);

  return Router;
}(_react.Component);

exports.default = Router;

var Route =
/*#__PURE__*/
function (_Component2) {
  _inherits(Route, _Component2);

  function Route() {
    _classCallCheck(this, Route);

    return _possibleConstructorReturn(this, _getPrototypeOf(Route).apply(this, arguments));
  }

  _createClass(Route, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pathName = _this$props.pathName,
          component = _this$props.component;
      return pathName === window.location.pathname && component;
    }
  }]);

  return Route;
}(_react.Component);

exports.Route = Route;

var Link =
/*#__PURE__*/
function (_Component3) {
  _inherits(Link, _Component3);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, _getPrototypeOf(Link).apply(this, arguments));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react.default.createElement(RouterContext.Consumer, null, function (setPath) {
        return _react.default.createElement("button", {
          onClick: function onClick() {
            return setPath(_this4.props.to);
          }
        }, "Link ", _this4.props.children);
      });
    }
  }]);

  return Link;
}(_react.Component);

exports.Link = Link;