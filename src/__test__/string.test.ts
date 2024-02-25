import Debugger from '../../src/debugger'
import StrUtil from '../string'
import { expect, test } from 'vitest'

test(Debugger.format(StrUtil.name, 'isString'), () => {
  expect(StrUtil.isString(' d')).toBe(true)
  expect(StrUtil.isString(2)).toBe(false)
  expect(StrUtil.isString(null)).toBe(false)
  expect(StrUtil.isString(undefined)).toBe(false)
})

test(Debugger.format(StrUtil.name, 'isEmpty'), () => {
  expect(StrUtil.isEmpty('  ')).toBe(true)
  expect(StrUtil.isEmpty(' f ')).toBe(false)
  expect(StrUtil.isEmpty(null)).toBe(true)
})

test(Debugger.format(StrUtil.name, 'isNotEmpty'), () => {
  expect(StrUtil.isNotEmpty(' d ')).toBe(true)
  expect(StrUtil.isNotEmpty('/./ ')).toBe(true)
  expect(StrUtil.isNotEmpty(null)).toBe(false)
})
