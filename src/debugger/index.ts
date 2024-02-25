type Description = string

export default class Debugger {
  static expect = (position: string, expect: Description, result: any) => {
    return `[${position}]: ${expect}, ${'got ' + result}`
  }

  static formatRequestError = (position: string, error: Description) => {
    return `[${position}]: ${error}`
  }

  static error = (position: string, expect: Description, result?: any) => {
    console.error(this.expect(position, expect, result))
  }

  static warn = (position: string, expect: Description, result?: any) => {
    console.warn(this.expect(position, expect, result))
  }
}
