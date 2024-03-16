type Description = string

export default class Debugger {
  static expect = (position: string, expect: Description, result: any) => {
    return `[${position}]: ${'expecting ' + expect}, ${'got ' + result}`
  }

  static print = (position: string, error: Description) => {
    return `[${position}]: ${error}`
  }

  static error = (position: string, expect: Description, result: any) => {
    console.error(this.expect(position, expect, result))
  }

  static warn = (position: string, expect: Description, result: any) => {
    console.warn(this.expect(position, expect, result))
  }
}
