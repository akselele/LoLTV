"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 5500;

_app.default.listen(port, () => {
  console.log(`Core service listening on port ${port}`);
});