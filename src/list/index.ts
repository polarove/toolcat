import { isArray } from '@vue/shared'
import VoidUtil from '../void'
import Debugger from '../debugger'

export default class ListUtil {
  private static readonly expect = 'a list'

  /**
   * to judge whether the value is an empty list
   *
   * @example [null,undefined] => false
   * @example [] => true
   * @param val
   */
  static isEmpty = (val: any[] | unknown): boolean => {
    if (isArray(val)) return val.length === 0
    else return VoidUtil.isVoid(val)
  }

  /**
   * to judge whether the value is NOT an empty list
   *
   * @example [null,undefined] => true
   * @example [] => false
   * @param val
   */
  static isNotEmpty = (val: any[] | unknown): boolean => {
    return !this.isEmpty(val)
  }

  /**
   * to judge whether each element in the list is either null or undefined,
   * or it is null or undefined
   *
   * @example [null,undefined] => true
   * @example [null, 1] => false
   * @example null => true
   * @example undefined => true
   * @param val
   */
  static isEveryVoid = (val: any[] | unknown): boolean | undefined => {
    if (isArray(val))
      return val.every((item) => VoidUtil.isVoid(item)) || this.isEmpty(val)
    else Debugger.warn(this.name, this.expect, val)
  }

  /**
   * to judge whether each element in the list is neither null or undefined
   *
   * @example [null,undefined] => false
   * @example [null, 1] => true
   * @param val
   */
  static isNotEveryVoid = (val: any[] | unknown): boolean | undefined => {
    if (isArray(val)) return !this.isEveryVoid(val)
    else Debugger.warn(this.name, this.expect, val)
  }

  /**
   * to judge whether the list has any null or undefined element
   *
   * @example [null,undefined] => true
   * @example [null, 1] => true
   * @example ['d', 1] => false
   * @param val
   */
  static hasVoidElement = (list: any[] | unknown): boolean | undefined => {
    if (isArray(list)) return list.some((item) => VoidUtil.isVoid(item))
    else Debugger.warn(this.name, this.expect, list)
  }
}
