import Debugger from '../../src/debugger'
import VoidUtil from '../void'
import { expect, test } from 'vitest'

test(Debugger.print(VoidUtil.name, 'isNull'), () => {
  expect(VoidUtil.isNull('  ')).toBe(false)
})

test(Debugger.print(VoidUtil.name, 'isUndefined'), () => {
  expect(VoidUtil.isUndefined(null)).toBe(false)
})

test(Debugger.print(VoidUtil.name, 'isNull'), () => {
  expect(VoidUtil.isNull(undefined)).toBe(false)
})

test(Debugger.print(VoidUtil.name, 'isVoid'), () => {
  expect(VoidUtil.isVoid(undefined)).toBe(true)
})
