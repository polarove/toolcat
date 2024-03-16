import { isString, isSymbol } from '@vue/shared'
import VoidUtil from '../void'

export default class StrUtil {
  // private static readonly illegalInput =
  //   'the required parameter is not a string, this will fail in production'

  /**
   * to judge whether the value is empty
   *
   * @example '   ' => false
   * @example '   f' => false
   * @example null => true
   * @example Symbol('d') => false
   * @param val
   * @return boolean
   */
  static isEmpty = (val: unknown): boolean => {
    if (isString(val)) return val.length === 0
    else if (isSymbol(val) && val.description)
      return val.description.length === 0
    else return VoidUtil.isVoid(val)
  }

  /**
   * to judge where the value is NOT empty
   *
   * @example '   ' => true
   * @example '   f' => true
   * @param val
   * @return boolean
   */
  static isNotEmpty = (val: unknown): boolean => {
    return !this.isEmpty(val)
  }

  /**
   * to judge whether the value is exact empty
   *
   * @example '   ' => true
   * @example '   f' => false
   * @example null => true
   * @example Symbol('d') => false
   * @param val
   * @return boolean
   */
  static isBlank = (val: unknown): boolean => {
    if (isString(val)) return val.trim().length === 0
    else if (isSymbol(val) && val.description)
      return val.description.trim().length === 0
    else return VoidUtil.isVoid(val)
  }

  /**
   * to judge where the value is NOT exact empty
   *
   * @example '   ' => false
   * @example '   f' => true
   * @param val
   * @return boolean
   */
  static isNotBlank = (val: unknown): boolean => {
    return !this.isBlank(val)
  }

  /**
   * insert a string into another string
   *
   * @param source
   * @param at
   * @param plugin
   * @return boolean
   */
  static insert = (source: string, at: number, plugin: string): string => {
    return source.slice(0, at).concat(plugin).concat(source.slice(at))
  }
}
