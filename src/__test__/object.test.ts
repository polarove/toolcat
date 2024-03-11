import Debugger from '../debugger'
import ObjUtil from '../object'
import { isObject } from '@vue/shared'
import { expect, test } from 'vitest'

test(Debugger.print(ObjUtil.name, 'isObject'), () => {
  expect(isObject(' d')).toBe(false)
  expect(isObject(2)).toBe(false)
  expect(isObject(null)).toBe(false)
  expect(isObject(undefined)).toBe(false)
})

test(Debugger.print(`${ObjUtil.name}.isEmpty`, '{} shall be true'), () => {
  expect(ObjUtil.isEmpty({})).toBe(true)
})

test(
  Debugger.print(
    `${ObjUtil.name}.isEmpty`,
    '<illegal input> null shall be  true'
  ),
  () => {
    expect(ObjUtil.isEmpty(null)).toBe(true)
  }
)

test(Debugger.print(`${ObjUtil.name}.isNotEmpty`, '{} shall be false'), () => {
  expect(ObjUtil.isNotEmpty({})).toBe(false)
})

test(
  Debugger.print(
    `${ObjUtil.name}.isNotEmpty`,
    '<illegal input> null shall be false'
  ),
  () => {
    expect(ObjUtil.isNotEmpty(null)).toBe(false)
  }
)

test(
  Debugger.print(
    `${ObjUtil.name}.isNotEmpty`,
    '<illegal input> undefined shall be false'
  ),
  () => {
    expect(ObjUtil.isNotEmpty(undefined)).toBe(false)
  }
)
