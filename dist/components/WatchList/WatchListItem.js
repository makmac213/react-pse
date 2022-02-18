"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _system = require("@mui/system");

var _react = _interopRequireWildcard(require("react"));

var _stocks = require("../../services/stocks");

var _excluded = ["stock"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var WatchListItem = function WatchListItem(_ref) {
  var _data$price;

  var stock = _ref.stock,
      rest = _objectWithoutProperties(_ref, _excluded);

  var idleColor = '#a4b6ef';
  var activeColor = '#596cd5';
  var greenColor = '#00FF00';
  var redColor = '#FF0000';

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(idleColor),
      _useState4 = _slicedToArray(_useState3, 2),
      edgeColor = _useState4[0],
      setEdgeColor = _useState4[1];

  var _useState5 = (0, _react.useState)('#000000'),
      _useState6 = _slicedToArray(_useState5, 2),
      priceColor = _useState6[0],
      setPriceColor = _useState6[1];

  var _useStock = (0, _stocks.useStock)(stock),
      stockData = _useStock.data;

  (0, _react.useEffect)(function () {
    if (stockData) {
      setData(stockData.stock[0]);

      if (stockData.stock[0].percent_change < 0) {
        setPriceColor(redColor);
      } else {
        setPriceColor(greenColor);
      }
    }
  }, [stockData]);

  var handleMouseEnter = function handleMouseEnter() {
    setEdgeColor(activeColor);
  };

  var handleMouseLeave = function handleMouseLeave() {
    setEdgeColor(idleColor);
  };

  return /*#__PURE__*/_react.default.createElement(_material.Card, {
    sx: {
      display: 'flex',
      mb: '10px'
    },
    onMouseEnter: function onMouseEnter() {
      return handleMouseEnter();
    },
    onMouseLeave: function onMouseLeave() {
      return handleMouseLeave();
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      backgroundColor: edgeColor,
      flex: 0.1
    }
  }), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      flex: 3
    }
  }, /*#__PURE__*/_react.default.createElement(_material.CardContent, {
    sx: {
      flex: '1 0 auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    component: "div",
    variant: "h5"
  }, stock.toUpperCase()), /*#__PURE__*/_react.default.createElement(_material.Typography, null, data === null || data === void 0 ? void 0 : data.name))), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      flex: 2,
      color: priceColor
    }
  }, /*#__PURE__*/_react.default.createElement(_material.CardContent, {
    sx: {
      flex: '0 0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    component: "div",
    variant: "h5"
  }, data === null || data === void 0 ? void 0 : (_data$price = data.price) === null || _data$price === void 0 ? void 0 : _data$price.amount), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    component: "div",
    variant: "caption"
  }, data === null || data === void 0 ? void 0 : data.percent_change, "%"))));
};

var _default = WatchListItem;
exports.default = _default;