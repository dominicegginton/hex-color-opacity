'use strict'

const opacity = (hex, opacity) => {
  if (typeof hex !== 'string' || !/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) throw new Error('Invalid hexadecimal color value')
  if (typeof opacity !== 'number' || opacity > 1 || opacity < 0) throw new Error('Opacity should be float between 0 - 1')
  let color = hex.substring(1)
  if (color.length === 3) color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  if (opacity === 0) color += '00'
  else if (opacity !== 1) color += Math.round(opacity * 255).toString(16)
  return `#${color}`
}

module.exports = opacity
