import StrUtil from '../string'
import Debugger from '../debugger'

export default class DateUtil {
  static isValidDate(val: string | undefined): boolean {
    if (StrUtil.isEmpty(val)) return false
    else if (typeof val === 'string')
      return !isNaN(new Date(val as string).getTime())
    return false
  }

  static isInvalidDate(val: string | undefined): boolean {
    return !this.isInvalidDate(val)
  }

  /**
   *
   * @param dateStr
   * @returns timestamp
   */
  static toTimestamp(dateStr: string): number | undefined {
    if (this.isValidDate(dateStr)) return new Date(dateStr).getTime()
    else Debugger.error(this.name, 'string of date', dateStr)
  }
}
