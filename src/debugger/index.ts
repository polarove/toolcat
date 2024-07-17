export default class Debugger {
  static expect = (position: string, expect: string, result: any) => {
    return `[${position}]: ${'expecting ' + expect}, ${'got ' + result}`
  }

  static print = (position: string, error: string) => {
    return `[${position}]: ${error}`
  }

  static error = (
    position: string,
    expect: string,
    result: any,
    ...optionalParams: any[]
  ) => {
    console.error(this.expect(position, expect, result), ...optionalParams)
  }

  static warn = (
    position: string,
    expect: string,
    result: any,
    ...optionalParams: any[]
  ) => {
    console.warn(this.expect(position, expect, result), ...optionalParams)
  }
}
