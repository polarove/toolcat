export default class VoidUtil {
  /**
   * to judge if the value is null
   *
   * @param val
   * @return boolean
   */
  static isNull = (val: unknown): val is null => {
    return val === null
  }

  /**
   * to judge if the value is undefined
   *
   * @param val
   * @return boolean
   */
  static isUndefined = (val: unknown): val is undefined => {
    return val === undefined
  }

  /**
   * to judge if the value is null or undefined
   *
   * @param val
   * @return boolean
   */
  static isVoid = (val: unknown): boolean => {
    return val == null
  }

  /**
   * to judge if the value is null or undefined
   *
   * @param val
   * @return boolean
   */
  static isNotVoid = (val: unknown): boolean => {
    return !this.isVoid(val)
  }
}
