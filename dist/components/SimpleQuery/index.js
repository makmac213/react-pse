"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _stocks = require("../../services/stocks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SimpleQuery = function SimpleQuery() {
  var _stock$price;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      symbol = _useState2[0],
      setSymbol = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      stock = _useState4[0],
      setStock = _useState4[1];

  var handleChange = function handleChange(event) {
    setSymbol(event.target.value);
  };

  var handleClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _stocks.getStock)(symbol);

            case 2:
              data = _context.sent;

              if (data) {
                setStock(data.stock[0]);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      border: '1px solid #000000',
      padding: '10px 10px 10px 10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    fullWidth: true,
    onChange: handleChange,
    placeholder: "Symbol",
    size: "small",
    variant: "outlined"
  })), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    fullWidth: true,
    variant: "contained",
    onClick: handleClick
  }, "Get")), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4
  }, "Name"), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, stock === null || stock === void 0 ? void 0 : stock.name), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4
  }, "Price"), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, stock === null || stock === void 0 ? void 0 : (_stock$price = stock.price) === null || _stock$price === void 0 ? void 0 : _stock$price.amount), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4
  }, "% Change"), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, stock === null || stock === void 0 ? void 0 : stock.percent_change), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4
  }, "Volume"), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, stock === null || stock === void 0 ? void 0 : stock.volume)));
};

var _default = SimpleQuery;
exports.default = _default;