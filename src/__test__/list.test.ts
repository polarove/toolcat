import ListUtil from '../list'
import Debugger from '../../src/debugger'
import { expect, test } from 'vitest'

test(
  Debugger.print(`${ListUtil.name}.isEmpty`, '[] shall be an empty list'),
  () => {
    expect(ListUtil.isEmpty([])).toBe(true)
  }
)

test(
  Debugger.print(
    `${ListUtil.name}.isNotEmpty`,
    '[1, null, 7, undefined] shall NOT be an empty list'
  ),
  () => {
    expect(ListUtil.isNotEmpty([1, null, 7, undefined])).toBe(true)
  }
)

test(
  Debugger.print(
    `${ListUtil.name}.isVoid`,
    '[undefined, null] shall be a void list'
  ),
  () => {
    expect(ListUtil.isEveryVoid([undefined, null])).toBe(true)
  }
)

test(
  Debugger.print(
    `${ListUtil.name}.isNotVoid`,
    ' [1, null, 7, undefined] shall NOT be a void list'
  ),
  () => {
    expect(ListUtil.isNotEveryVoid([undefined, 1, null])).toBe(true)
  }
)

test(
  Debugger.print(
    `${ListUtil.name}.hasVoidElement`,
    ' [1, null, 7, undefined] has void elements'
  ),
  () => {
    expect(ListUtil.hasVoidElement([undefined, 1, null])).toBe(true)
  }
)
