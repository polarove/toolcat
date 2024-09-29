import { EmailRule } from './rule'
export class RegTool {
    static isEmail = (target: string, rule: string = EmailRule) => {
        return new RegExp(rule, 'i').test(target)
    }

    static isNotEmail = (target: string, rule: string = EmailRule) => {
        return !this.isEmail(rule, target)
    }
}
