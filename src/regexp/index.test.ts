import { expect, test } from 'vitest'
import { RegTool } from '.'

test('判断是否为有效邮箱', () => {
    expect(RegTool.isEmail('asfa')).toBe(false)
})

test('判断是否不为有效邮箱', () => {
    expect(RegTool.isNotEmail('asfa')).toBe(true)
})
