import { expect, test } from 'vitest'
import { StrTool } from '.'

test('判断是否为字符串', () => {
    expect(StrTool.isString(2)).toBe(false)
})

test('判断是否不为字符串', () => {
    expect(StrTool.isNotString(2)).toBe(true)
})
