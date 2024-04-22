import Debuger from '../src/debugger'
import { test } from 'vitest'

test(Debuger.print('Debugger', 'Test Debugger'), () => {
  Debuger.error('Test debugger', 'a string', 'ppp')
  Debuger.warn('Test debugger', 'a string', 'ppp')
})
