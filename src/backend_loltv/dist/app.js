"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _awilixExpress = require("awilix-express");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./api/routes"));

var _configuration = _interopRequireDefault(require("./configuration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const container = (0, _configuration.default)();
app.use((0, _awilixExpress.scopePerRequest)(container));
app.use('/api/', _routes.default);
var _default = app;
exports.default = _default;