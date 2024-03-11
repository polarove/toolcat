import Debugger from '../debugger'
import StrUtil from '../string'
import { isString } from '@vue/shared'
import { expect, test } from 'vitest'

test(Debugger.print(StrUtil.name, 'isString'), () => {
  expect(isString(' d')).toBe(true)
  expect(isString(2)).toBe(false)
  expect(isString(null)).toBe(false)
  expect(isString(undefined)).toBe(false)
})

test(Debugger.print(StrUtil.name, 'isBlank'), () => {
  expect(StrUtil.isBlank('  ')).toBe(true)
  expect(StrUtil.isBlank(' f ')).toBe(false)
  expect(StrUtil.isBlank(null)).toBe(true)
})

test(Debugger.print(StrUtil.name, 'isNotBlank'), () => {
  expect(StrUtil.isNotBlank(' ')).toBe(false)
  expect(StrUtil.isNotBlank(' d ')).toBe(true)
  expect(StrUtil.isNotBlank('/./ ')).toBe(true)
  expect(StrUtil.isNotBlank(null)).toBe(false)
})

test(Debugger.print(StrUtil.name, 'isEmpty'), () => {
  expect(StrUtil.isEmpty('  ')).toBe(false)
  expect(StrUtil.isEmpty(' f ')).toBe(false)
  expect(StrUtil.isEmpty(null)).toBe(true)
})

test(Debugger.print(StrUtil.name, 'isNotEmpty'), () => {
  expect(StrUtil.isNotEmpty(' ')).toBe(true)
  expect(StrUtil.isNotEmpty(' d ')).toBe(true)
  expect(StrUtil.isNotEmpty('/./ ')).toBe(true)
  expect(StrUtil.isNotEmpty(null)).toBe(false)
})
