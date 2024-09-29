import { expect, test } from 'vitest'
import { VoidTool } from '.'

test('判断是否为空或undefined', () => {
    expect(VoidTool.isVoid(2)).toBe(false)
})

test('判断是否不为空或undefined', () => {
    expect(VoidTool.isNotVoid(2)).toBe(true)
})
