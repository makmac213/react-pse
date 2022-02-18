"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _xDataGrid = require("@mui/x-data-grid");

var _stocks = require("../../services/stocks");

var _QuickSearchToolbar = _interopRequireDefault(require("./QuickSearchToolbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var StocksDataTable = function StocksDataTable() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      stocks = _useState2[0],
      setStocks = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      searchText = _useState4[0],
      setSearchText = _useState4[1];

  var _useState5 = (0, _react.useState)(stocks),
      _useState6 = _slicedToArray(_useState5, 2),
      rows = _useState6[0],
      setRows = _useState6[1];

  var getPrice = function getPrice(params) {
    var amount = params.row.price.amount;
    return amount.toFixed(2);
  };

  var columns = [{
    field: 'id',
    headerAlign: 'center',
    headerName: 'Symbol',
    valueGetter: function valueGetter(params) {
      return "".concat(params.id);
    }
  }, {
    field: 'name',
    headerAlign: 'center',
    headerName: 'Company name',
    width: 200
  }, {
    align: 'right',
    field: 'price',
    headerAlign: 'center',
    headerName: 'Price',
    valueGetter: getPrice
  }, {
    align: 'right',
    field: 'percent_change',
    headerAlign: 'center',
    headerName: 'Change',
    width: 200,
    valueGetter: function valueGetter(params) {
      return "".concat(params.row.percent_change, "%");
    }
  }, {
    align: 'right',
    field: 'volume',
    headerAlign: 'center',
    headerName: 'Volume',
    width: 200
  }];

  var initData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _stocks.getStocks)();

            case 2:
              data = _context.sent;

              if (data) {
                setStocks(data.stock);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function initData() {
      return _ref.apply(this, arguments);
    };
  }();

  if (stocks.length === 0) {
    initData();
  }

  var escapeRegExp = function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  };

  var requestSearch = function requestSearch(searchValue) {
    setSearchText(searchValue);
    var searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    var filteredRows = stocks.filter(function (row) {
      return Object.keys(row).some(function (field) {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  (0, _react.useEffect)(function () {
    setRows(stocks);
  }, [stocks]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: 400,
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, {
    components: {
      Toolbar: _QuickSearchToolbar.default
    },
    rows: rows,
    columns: columns,
    filterMode: "server",
    pageSize: 10,
    rowsPerPageOptions: [10, 20, 30],
    getRowId: function getRowId(row) {
      return row.symbol;
    },
    componentsProps: {
      toolbar: {
        value: searchText,
        onChange: function onChange(event) {
          return requestSearch(event.target.value);
        },
        clearSearch: function clearSearch() {
          return requestSearch('');
        }
      }
    }
  }));
};

var _default = StocksDataTable;
exports.default = _default;