import Debugger from '../../src/debugger'
import ObjUtil from '../object'
import { expect, test } from 'vitest'

test(Debugger.format(ObjUtil.name, 'isObject'), () => {
  expect(ObjUtil.isObject(' d')).toBe(false)
  expect(ObjUtil.isObject(2)).toBe(false)
  expect(ObjUtil.isObject(null)).toBe(false)
  expect(ObjUtil.isObject(undefined)).toBe(false)
})

test(Debugger.format(`${ObjUtil.name}.isEmpty`, '{} shall be true'), () => {
  expect(ObjUtil.isEmpty({})).toBe(true)
})

test(
  Debugger.format(
    `${ObjUtil.name}.isEmpty`,
    '<illegal input> null shall be  true'
  ),
  () => {
    expect(ObjUtil.isEmpty(null)).toBe(true)
  }
)

test(Debugger.format(`${ObjUtil.name}.isNotEmpty`, '{} shall be false'), () => {
  expect(ObjUtil.isNotEmpty({})).toBe(false)
})

test(
  Debugger.format(
    `${ObjUtil.name}.isNotEmpty`,
    '<illegal input> null shall be false'
  ),
  () => {
    expect(ObjUtil.isNotEmpty(null)).toBe(false)
  }
)

test(
  Debugger.format(
    `${ObjUtil.name}.isNotEmpty`,
    '<illegal input> undefined shall be false'
  ),
  () => {
    expect(ObjUtil.isNotEmpty(undefined)).toBe(false)
  }
)
