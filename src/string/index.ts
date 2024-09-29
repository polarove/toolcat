import { Primitives } from '../enum'

export class StrTool {
    /**
     * @description 判断一个值是否为字符串
     * @param val
     * @returns boolean
     */
    static isString = (val: unknown): val is string => {
        return typeof val == Primitives.STRING
    }

    /**
     * @description 判断一个值是否为字符串
     * @param val
     * @returns Promise<boolean>
     */
    static isStringAsync = async (val: unknown): Promise<boolean> => {
        return typeof val == Primitives.STRING
            ? Promise.resolve(true)
            : Promise.reject(false)
    }

    /**
     * @description 判断一个值是否不为字符串
     * @param val
     * @returns boolean
     */
    static isNotString = (val: unknown): boolean => {
        return !this.isString(val)
    }

    /**
     * @description 判断一个值是否不为字符串
     * @param val
     * @returns boolean
     */
    static isNotStringAsync = async (val: unknown): Promise<boolean> => {
        return !this.isStringAsync(val)
    }

    /**
     * @description 去除所有空格后，判断其是否为空字符串
     * @param val
     * @returns boolean
     */
    static isEmtpy = (val: unknown): boolean => {
        if (this.isString(val)) {
            return val.trim().length <= 0
        } else return true
    }

    /**
     * @description 去除所有空格后，判断其是否为空字符串
     * @param val
     * @returns boolean
     */
    static isNotEmpty = (val: unknown): boolean => {
        return !this.isEmtpy(val)
    }

    /**
     * @description 去除所有空格后，判断其是否为空字符串
     * @param val
     * @returns boolean
     */
    static isEmtpyAsync = async (val: unknown): Promise<boolean> => {
        if (this.isString(val)) {
            return val.trim().length > 0
                ? Promise.reject(false)
                : Promise.resolve(true)
        }
        return Promise.resolve(true)
    }

    /**
     * @description 去除所有空格后，判断其是否为空字符串
     * @param val
     * @returns boolean
     */
    static isNotEmptyAsync = async (val: unknown): Promise<boolean> => {
        return !this.isEmtpy(val)
    }

    /**
     * @description 保留所有空格后，判断其是否为空字符串
     * @param val
     * @returns boolean
     */
    static isBlank = (val: unknown): boolean => {
        if (this.isString(val)) {
            return val.length <= 0
        } else return true
    }

    /**
     * @description 保留所有空格后，判断其是否为空字符串
     * @param val
     * @returns boolean
     */
    static isNotBlank = (val: unknown): boolean => {
        return !this.isEmtpy(val)
    }

    /**
     * @description 保留所有空格后，判断其是否为空字符串
     * @param val
     * @returns boolean
     */
    static isBlankAsync = async (val: unknown): Promise<boolean> => {
        if (this.isString(val)) {
            return val.length > 0
                ? Promise.reject(false)
                : Promise.resolve(true)
        }
        return Promise.resolve(true)
    }

    /**
     * @description 保留所有空格后，判断其是否为空字符串
     * @param val
     * @returns boolean
     */
    static isNotBlankAsync = async (val: unknown): Promise<boolean> => {
        return !this.isEmtpy(val)
    }
}
