import ListUtil from '../list'
import { isObject } from '@vue/shared'
import VoidUtil from '../void'
import { isSymbol } from '@vue/shared'
import Debugger from '../debugger'

export default class ObjUtil {
  private static readonly expect = 'expecting an object'

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
   * sort keys of an object
   * @example { a:null, b:2 } => [ b, a ]
   * @param object
   * @return string[]
   */
  static sortKeys = (object: object | unknown, order?: boolean): string[] => {
    let res: string[] = []
    if (isObject(object)) {
      const withoutValue = Object.keys(object).filter((key: string) =>
        VoidUtil.isVoid(object[key as keyof object])
      )

      const withValue = Object.keys(object)
        .filter((key: string) =>
          VoidUtil.isNotVoid(object[key as keyof object])
        )
        .sort((a, b) => a.length - b.length)

      res = order
        ? withoutValue.concat(withValue)
        : withValue.concat(withoutValue)
    } else Debugger.warn(this.name, this.expect, object)
    return res
  }
}
