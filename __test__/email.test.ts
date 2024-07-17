import Debugger from '../src/debugger'
import EmailUtil from '../src/validation/email'

import { expect, test } from 'vitest'

test(Debugger.print(EmailUtil.name, 'isEmail'), () => {
  const Email = new EmailUtil()
  expect(Email.is('2asf')).toBe(false)
  expect(Email.is('2asf@')).toBe(false)
  expect(Email.is('2a.sf@')).toBe(false)
  expect(Email.is('2a?896sf@')).toBe(false)
  expect(Email.is('2asf@.')).toBe(false)
  expect(Email.is('2a!sf@q.c')).toBe(false)
  expect(Email.is('2asf@q.c')).toBe(true)
  expect(Email.is('2asf@q.c')).toBe(true)
  expect(Email.is('2_asf@q.c')).toBe(true)
})
