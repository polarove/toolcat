import ListUtil from '../list'
import { isObject } from '@vue/shared'
import VoidUtil from '../void'
import { isSymbol } from '@vue/shared'
import Debugger from '../debugger'

export default class ObjUtil {
  private static readonly expect = 'an object'

  static isSymbol = (object: unknown): object is symbol => {
    return isSymbol(object)
  }

  /**
   * to judge whether the object is a empty object: {}
   * @example {} => true
   * @example {a:2} => false
   * @param object
   */
  static isEmpty = (object: object | unknown): boolean => {
    if (isObject(object)) return ListUtil.isEmpty(Reflect.ownKeys(object))
    else return VoidUtil.isVoid(object)
  }

  /**
   * to judge whether the object is NOT a empty object: {}
   * @example {} => false
   * @example {a:2} => true
   * @param object
   * @return boolean
   */
  static isNotEmpty = (object: object | unknown): boolean => {
    return !this.isEmpty(object)
  }

  /**
   * Pure
   *
   * sort keys of an object
   * @example { a:null, b:2 } => [ 'b', 'a' ]
   * @param object
   * @return string[]
   */
  static extractKeys = (
    object: object | unknown,
    order?: boolean
  ): string[] => {
    let res: string[] = []
    let keysWithValue: string[] = []
    let keysWithoutValue: string[] = []
    if (isObject(object)) {
      Object.keys(object).filter((key: string) => {
        if (VoidUtil.isVoid(object[key as keyof object]))
          keysWithoutValue.push(key)
        else keysWithValue.push(key)
      })

      res = order
        ? keysWithoutValue.concat(keysWithValue)
        : keysWithValue.concat(keysWithoutValue)
    } else Debugger.warn(this.name, this.expect, object)
    return res
  }
}
