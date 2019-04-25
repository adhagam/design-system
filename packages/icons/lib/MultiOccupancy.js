'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgMultiOccupancy = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgMultiOccupancy = function SvgMultiOccupancy(_ref) {
  var size = _ref.size,
    props = (0, _objectWithoutProperties2.default)(_ref, ['size'])
  return _react.default.createElement(
    _Svg.default,
    (0, _extends2.default)(
      {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'currentcolor'
      },
      props
    ),
    _react.default.createElement('path', {
      d:
        'M21.237 11.713h2.262v1.747h-2.262v2.268H19.49V13.46h-2.27v-1.747h2.27V9.445h1.747v2.268zm-10.87-7.412a1.601 1.601 0 1 1-3.202 0 1.601 1.601 0 0 1 3.203 0zM5.252 5.904a1.356 1.356 0 1 1-2.71 0 1.356 1.356 0 0 1 2.71 0zm-.555 6.467v.058l1.355 1.356-.617.616v5.548c0 .555-.431 1.047-.986 1.047H3.28c-.555 0-.986-.492-.986-1.047v-5.543L1 13.112V9.354c0-.801.74-1.54 1.54-1.54h2.218c-.062.06-.062.184-.062.307v4.25zM14.93 5.904a1.356 1.356 0 1 1-2.71 0 1.356 1.356 0 0 1 2.71 0zm.125 1.908c1.477 0 1.477 1.541 1.477 1.541v3.696l-1.353 1.354v5.543c0 .555-.432 1.047-.986 1.047h-1.17c-.495 0-.987-.492-.987-1.047v-5.543l-.677-.677 1.356-1.356V8.12v-.308h2.34zM10.37 6.581c1.48 0 1.478 1.54 1.476 1.54v4.128l-1.478 1.478v6.221c0 .616-.308 1.293-.924 1.293H8.15c-.554 0-1.17-.677-1.17-1.293V13.85v-.123l-.123-.123L5.44 12.25V8.12c0-.124.307-1.54 1.847-1.54h3.082z'
    })
  )
}

exports.SvgMultiOccupancy = SvgMultiOccupancy
SvgMultiOccupancy.isIcon = true
SvgMultiOccupancy.defaultProps = {
  size: 24
}
var _default = SvgMultiOccupancy
exports.default = _default
