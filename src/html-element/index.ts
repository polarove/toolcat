import VoidUtil from '../void'

export async function findElementById(id: string): Promise<HTMLElement>
export async function findElementById(
  id: string,
  timeout?: number
): Promise<HTMLElement>

export async function findElementById(id: string, timeout?: number) {
  return new Promise((resolve, reject) => {
    let el = null
    if (timeout)
      setTimeout(() => {
        el = document.getElementById(id)
      }, timeout)
    else el = document.getElementById(id)
    if (VoidUtil.isVoid(el)) reject(`Element with id: ${id} is missing`)
    else resolve(el)
  })
}
