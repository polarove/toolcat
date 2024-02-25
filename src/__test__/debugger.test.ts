import Debuger from '../debugger'
import { test } from 'vitest'

test(Debuger.format('Debugger', 'Test Debugger'), () => {
  Debuger.info('Debug')
  Debuger.error('Debug')
  Debuger.warn('Debugd')
  Debuger.log('Debug')
})
