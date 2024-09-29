export class VoidTool {
    /**
     * @description 判断一个值是否为 null 或 undefined
     * @param val
     * @returns boolean
     */
    static isVoid = (val: unknown): boolean => {
        return val == null || val == undefined
    }

    /**
     * @description 判断一个值是否为 null 或 undefined
     * @param val
     * @returns Promise<boolean>
     */
    static isVoidAsync = async (val: unknown): Promise<boolean> => {
        return val == null || val == undefined
            ? Promise.resolve(true)
            : Promise.reject(false)
    }

    /**
     * @description 判断一个值是否不为 null 或 undefined
     * @param val
     * @returns boolean
     */
    static isNotVoid = (val: unknown): boolean => {
        return !this.isVoid(val)
    }

    /**
     * @description 判断一个值是否不为 null 或 undefined
     * @param val
     * @returns Promise<boolean>
     */
    static isNotVoidAsync = async (val: unknown): Promise<boolean> => {
        return this.isVoidAsync(val)
    }
}
