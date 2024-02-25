import StrUtil from '../string'
import Debugger from '../debugger'

export function isValidDate(val: string | undefined): boolean {
  if (StrUtil.isEmpty(val)) return false
  else if (typeof val === 'string')
    return !isNaN(new Date(val as string).getTime())
  return false
}

export function isInvalidDate(val: string | undefined): boolean {
  return !isInvalidDate(val)
}

export function toTimestamp(dateStr: string | undefined): number | undefined {
  const datetime = new Date(dateStr as string).getTime()
  if (!isNaN(datetime)) return datetime
  else Debugger.error('toTimestamp', 'invalid date string', dateStr)
}

export function typeOf(val: any | undefined): string {
  if (isValidDate(val)) return 'date'
  else return typeof val
}
