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
    expect(() => opacity('#ffffff', '')).toThrow(error)
  })

  test('Should throw error when opacity is greater than 1', () => {
    const error = Error('Opacity should be float between 0 - 1')
    expect(() => opacity('#ffffff', 1.1)).toThrow(error)
  })

  test('Should throw error when opacity is smaller than 0', () => {
    const error = Error('Opacity should be float between 0 - 1')
    expect(() => opacity('#ffffff', -0.1)).toThrow(error)
  })
})

describe('Opacity should be applied correctly to hexadecimal color value', () => {
  test('Opacity value of 0 should return translucent hexadecimal color value', () => {
    expect(opacity('#ffffff', 0)).toBe('#ffffff00')
  })

  test('Opacity value of 1 should return unmodified hexadecimal color value', () => {
    expect(opacity('#ffffff', 1)).toBe('#ffffff')
  })

  test('Opacity values between 0 and 1 should return hexadecimal color value with opacity applied', () => {
    expect(opacity('#ffffff', 0.05)).toBe('#ffffff0d')
    expect(opacity('#ffffff', 0.1)).toBe('#ffffff1a')
    expect(opacity('#ffffff', 0.2)).toBe('#ffffff33')
    expect(opacity('#ffffff', 0.3)).toBe('#ffffff4d')
    expect(opacity('#ffffff', 0.4)).toBe('#ffffff66')
    expect(opacity('#ffffff', 0.5)).toBe('#ffffff80')
    expect(opacity('#ffffff', 0.6)).toBe('#ffffff99')
    expect(opacity('#ffffff', 0.7)).toBe('#ffffffb3')
    expect(opacity('#ffffff', 0.8)).toBe('#ffffffcc')
    expect(opacity('#ffffff', 0.9)).toBe('#ffffffe6')
  })

  test('Opacity should be applied to three value hexadecimal color values', () => {
    expect(opacity('#fff', 0.5)).toBe('#ffffff80')
  })
})
