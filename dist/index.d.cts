declare class DateTool {
    /**
     * @param locale 语言，可选，默认为"zh-CN"
     * @return 2024/09/29 20:51:23
     */
    static getCurrentDatetimeString: (locale?: string) => string
}

declare class RegTool {
    static isEmail: (target: string, rule?: string) => boolean
    static isNotEmail: (target: string, rule?: string) => boolean
}

declare const EmailRule = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'

declare class StrTool {
    /**
     * @description 判断一个值是否为字符串
     * @param val
     * @returns boolean
     */
    static isString: (val: unknown) => val is string
    /**
     * @description 判断一个值是否为字符串
     * @param val
     * @returns Promise<boolean>
     */
    static isStringAsync: (val: unknown) => Promise<boolean>
    /**
     * @description 判断一个值是否不为字符串
     * @param val
     * @returns boolean
     */
    static isNotString: (val: unknown) => boolean
    /**
     * @description 判断一个值是否不为字符串
     * @param val
     * @returns boolean
     */
    static isNotStringAsync: (val: unknown) => Promise<boolean>
}

declare class VoidTool {
    /**
     * @description 判断一个值是否为 null 或 undefined
     * @param val
     * @returns boolean
     */
    static isVoid: (val: unknown) => boolean
    /**
     * @description 判断一个值是否为 null 或 undefined
     * @param val
     * @returns Promise<boolean>
     */
    static isVoidAsync: (val: unknown) => Promise<boolean>
    /**
     * @description 判断一个值是否不为 null 或 undefined
     * @param val
     * @returns boolean
     */
    static isNotVoid: (val: unknown) => boolean
    /**
     * @description 判断一个值是否不为 null 或 undefined
     * @param val
     * @returns Promise<boolean>
     */
    static isNotVoidAsync: (val: unknown) => Promise<boolean>
}

declare type Voidable<T> = T | null | undefined
declare type Nullable<T> = T | null

export {
    DateTool,
    EmailRule,
    type Nullable,
    RegTool,
    StrTool,
    VoidTool,
    type Voidable
}
