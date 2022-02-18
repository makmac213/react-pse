"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backend = _axios.default.create({
  baseURL: "http://phisix-api.appspot.com"
});

backend.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log("Axios interceptor error: ", error); // [400, 401, 403, 404, 500] use history.push
});
var _default = backend;
exports.default = _default;