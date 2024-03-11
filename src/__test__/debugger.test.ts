import Debuger from '../debugger'
import { test } from 'vitest'

test(Debuger.print('Debugger', 'Test Debugger'), () => {
  Debuger.error('Test debugger', 'Debug')
  Debuger.warn('Test debugger', 'Debug')
})
