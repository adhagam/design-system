'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgPets = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgPets = function SvgPets(_ref) {
  var size = _ref.size,
    props = (0, _objectWithoutProperties2.default)(_ref, ['size'])
  return _react.default.createElement(
    _Svg.default,
    (0, _extends2.default)(
      {
        viewBox: '0 0 24 24',
        height: size,
        width: size,
        fill: 'currentcolor'
      },
      props
    ),
    _react.default.createElement('path', {
      d:
        'M4.5 11.5C3.1 11.5 2 10.4 2 9s1.1-2.5 2.5-2.5S7 7.6 7 9s-1.1 2.5-2.5 2.5zm4.5-4C7.6 7.5 6.5 6.4 6.5 5S7.6 2.5 9 2.5s2.5 1.1 2.5 2.5S10.4 7.5 9 7.5zm6 0c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm4.5 4c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S22 7.6 22 9s-1.1 2.5-2.5 2.5zm-2.2 2.9c1.3 1.3 2.9 2.8 2.6 4.8-.3 1-1 2-2.3 2.3-.7.1-3.1-.4-5.5-.4h-.2c-2.5 0-4.8.6-5.5.4-1.3-.3-2-1.3-2.3-2.3-.3-2 1.3-3.5 2.6-4.8.9-1 1.6-1.9 2.5-2.9.5-.5 1.1-1.1 1.8-1.3.1 0 .2-.1.3-.1.2-.1.4-.1.7-.1h.8c.1 0 .2.1.3.1.7.2 1.3.8 1.8 1.3.8 1.1 1.6 1.9 2.4 3z'
    })
  )
}

exports.SvgPets = SvgPets
SvgPets.isIcon = true
SvgPets.defaultProps = {
  size: 24
}
var _default = SvgPets
exports.default = _default
