/* eslint-env jest */
'use strict'

const opacity = require('../lib/index')

describe('Hexadecimal Color Validation', () => {
  test('Should throw error when type is not string', () => {
    const error = Error('Invalid hexadecimal color value')
    expect(() => opacity(0, 0.5)).toThrow(error)
  })

  test('Should throw error when hexadecimal color is invalid', () => {
    const error = Error('Invalid hexadecimal color value')
    expect(() => opacity('', 0.5)).toThrow(error)
    expect(() => opacity('invalid', 0.5)).toThrow(error)
    expect(() => opacity('#', 0.5)).toThrow(error)
    expect(() => opacity('#00', 0.5)).toThrow(error)
    expect(() => opacity('#0000', 0.5)).toThrow(error)
    expect(() => opacity('#0000000', 0.5)).toThrow(error)
  })
})

describe('Opacity Validation', () => {
  test('Should throw error when opacity is not of type number', () => {
    const error = Error('Opacity should be float between 0 - 1')
    expect(() => opacity('#FFFFFF', '')).toThrow(error)
  })

  test('Should throw error when opacity is greater than 1', () => {
    const error = Error('Opacity should be float between 0 - 1')
    expect(() => opacity('#FFFFFF', 1.1)).toThrow(error)
  })

  test('Should throw error when opacity is smaller than 0', () => {
    const error = Error('Opacity should be float between 0 - 1')
    expect(() => opacity('#FFFFFF', -0.1)).toThrow(error)
  })
})

describe('Opacity should be applied correctly to hexadecimal color value', () => {
  test('Opacity value of 0 should return translucent hexadecimal color value', () => {
    expect(opacity('#FFFFFF', 0)).toBe('#FFFFFF00')
  })

  test('Opacity value of 1 should return unmodified hexadecimal color value', () => {
    expect(opacity('#FFFFFF', 1)).toBe('#FFFFFFFF')
  })

  test('Opacity values between 0 and 1 should return hexadecimal color value with opacity applied', () => {
    expect(opacity('#FFFFFF', 0.05)).toBe('#FFFFFF0D')
    expect(opacity('#FFFFFF', 0.1)).toBe('#FFFFFF1A')
    expect(opacity('#FFFFFF', 0.2)).toBe('#FFFFFF33')
    expect(opacity('#FFFFFF', 0.3)).toBe('#FFFFFF4D')
    expect(opacity('#FFFFFF', 0.4)).toBe('#FFFFFF66')
    expect(opacity('#FFFFFF', 0.5)).toBe('#FFFFFF80')
    expect(opacity('#FFFFFF', 0.6)).toBe('#FFFFFF99')
    expect(opacity('#FFFFFF', 0.7)).toBe('#FFFFFFB3')
    expect(opacity('#FFFFFF', 0.8)).toBe('#FFFFFFCC')
    expect(opacity('#FFFFFF', 0.9)).toBe('#FFFFFFE6')
  })

  test('Opacity should be applied to three value hexadecimal color values', () => {
    expect(opacity('#FFF', 0.5)).toBe('#FFFFFF80')
  })

  test('Hex values should be converted to upper case', () => {
    expect(opacity('#ffffff', 1)).toBe('#FFFFFFFF')
  })
})
