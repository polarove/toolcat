export interface IValidateUtil {
  reg: RegExp
  is: (email: string) => boolean
  isNot: (email: string) => boolean
}

export default class ValidateUtil implements IValidateUtil {
  reg: RegExp

  constructor(reg: RegExp | string, flags?: string) {
    this.reg = new RegExp(reg, flags)
  }

  is = (str: string): boolean => this.reg.test(str)

  isNot = (str: string): boolean => !this.is(str)
}
