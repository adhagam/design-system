'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgMultiAirline = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgMultiAirline = function SvgMultiAirline(_ref) {
  var size = _ref.size,
    props = (0, _objectWithoutProperties2.default)(_ref, ['size'])
  return _react.default.createElement(
    _Svg.default,
    (0, _extends2.default)(
      {
        height: size,
        width: size,
        viewBox: '0 0 24 24',
        fill: 'currentcolor'
      },
      props
    ),
    _react.default.createElement('path', {
      d:
        'M5 14.167l1.667-5.334H3l-1 1.334H1l.667-2.334L1 5.5h1l1 1.333h3.667L5 1.5h1.333l3.334 5.333h3.666c.534 0 1 .467 1 1s-.466 1-1 1H9.667l-3.334 5.334zm8.667 8.33l1.666-5.334h-3.666l-1 1.334h-1l.666-2.334-.666-2.333h1l1 1.333h3.666L13.667 9.83H15l3.333 5.333H22c.533 0 1 .467 1 1 0 .534-.467 1-1 1h-3.667L15 22.497z'
    })
  )
}

exports.SvgMultiAirline = SvgMultiAirline
SvgMultiAirline.isIcon = true
SvgMultiAirline.defaultProps = {
  size: 24
}
var _default = SvgMultiAirline
exports.default = _default
