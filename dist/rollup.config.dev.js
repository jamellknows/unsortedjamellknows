"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rollupPluginNodeResolve = _interopRequireDefault(require("rollup-plugin-node-resolve"));

var _rollupPluginCommonjs = _interopRequireDefault(require("rollup-plugin-commonjs"));

var _rollupPluginBabel = _interopRequireDefault(require("rollup-plugin-babel"));

var _package = _interopRequireDefault(require("./package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  input: "src/index.js",
  // your entry point
  output: {
    name: "unsortedBinarySearch",
    // package name
    file: _package["default"].browser,
    format: "umd"
  },
  plugins: [(0, _rollupPluginNodeResolve["default"])(), (0, _rollupPluginCommonjs["default"])(), (0, _rollupPluginBabel["default"])({
    exclude: ["node_modules/**"]
  })]
}, {
  input: "src/index.js",
  // your entry point
  output: [{
    file: _package["default"].main,
    format: "cjs"
  }, {
    file: _package["default"].module,
    format: "es"
  }],
  plugins: [(0, _rollupPluginBabel["default"])({
    exclude: ["node_modules/**"]
  })]
}];
exports["default"] = _default;