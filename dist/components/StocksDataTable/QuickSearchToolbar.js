"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _system = require("@mui/system");

var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));

var _Clear = _interopRequireDefault(require("@mui/icons-material/Clear"));

var _excluded = ["clearSearch", "onChange", "value"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var QuickSearchToolbar = function QuickSearchToolbar(_ref) {
  var clearSearch = _ref.clearSearch,
      onChange = _ref.onChange,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      p: 0.5,
      pb: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    variant: "standard",
    value: value,
    onChange: onChange,
    placeholder: "Search",
    InputProps: {
      startAdornment: /*#__PURE__*/_react.default.createElement(_Search.default, {
        fontSize: "small"
      }),
      endAdornment: /*#__PURE__*/_react.default.createElement(_material.IconButton, {
        title: "Clear",
        "aria-label": "Clear",
        size: "small",
        style: {
          visibility: value ? 'visible' : 'hidden'
        },
        onClick: clearSearch
      }, /*#__PURE__*/_react.default.createElement(_Clear.default, {
        fontSize: "small"
      }))
    },
    sx: {
      width: {
        xs: 1,
        sm: 'auto'
      },
      m: function m(theme) {
        return theme.spacing(1, 0.5, 1.5);
      },
      '& .MuiSvgIcon-root': {
        mr: 0.5
      },
      '& .MuiInput-underline:before': {
        borderBottom: 1,
        borderColor: 'divider'
      }
    }
  }));
};

var _default = QuickSearchToolbar;
exports.default = _default;