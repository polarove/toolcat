import { test } from 'vitest'
import { DateTool } from '.'

test('根据语言区域获取当前时间日期字符串', () =>
    console.log(DateTool.getCurrentDatetimeString()))
