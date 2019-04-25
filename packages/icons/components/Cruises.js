import React from 'react'
import Svg from './Svg'
export const SvgCruises = ({ size, ...props }) => (
  <Svg
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill="currentcolor"
    {...props}
  >
    <path d="M19.2 20.2c-1.3 0-2.5-.5-3.6-1.2-2.2 1.5-5 1.5-7.2 0-1.1.7-2.3 1.2-3.6 1.2H3V22h1.8c1.3 0 2.4-.4 3.6-.9 2.2 1.2 5 1.2 7.2 0 1.2.5 2.3.9 3.6.9H21v-1.8h-1.8zM4.8 18.4c1.4 0 2.7-.8 3.6-1.8.9 1 2.2 1.8 3.6 1.8s2.7-.8 3.6-1.8c.9 1 2.2 1.8 3.6 1.8l1.7-6.1c.1-.3.1-.5-.1-.7-.1-.2-.3-.4-.5-.5l-1.1-.4V6.5c0-1-.8-1.8-1.8-1.8h-2.7V2H9.3v2.7H6.6c-1 0-1.8.8-1.8 1.8v4.2l-1.2.4c-.3.1-.5.3-.5.5-.1.1-.1.5-.1.7l1.8 6.1zM6.6 6.5h10.8v3.6L12 8.4l-5.4 1.8V6.5z" />
  </Svg>
)
SvgCruises.isIcon = true
SvgCruises.defaultProps = {
  size: 24
}
export default SvgCruises
