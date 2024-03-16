import { Nullable } from '../types'
import VoidUtil from '../void'

export default class HtmlUtil {
  /**
   *
   * @param id
   * @param timeout
   * @returns Nullable<HTMLElement>
   */
  static async findElementById(
    id: string,
    timeout?: number
  ): Promise<Nullable<HTMLElement>> {
    return new Promise((resolve, reject) => {
      let el: Nullable<HTMLElement> = null
      if (timeout)
        setTimeout(() => {
          el = document.getElementById(id)
        }, timeout)
      else el = document.getElementById(id)
      if (VoidUtil.isVoid(el)) reject(`Element with id: ${id} is missing`)
      else resolve(el)
    })
  }
}
