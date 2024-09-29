var __defProp$3 = Object.defineProperty
var __defNormalProp$3 = (obj, key, value) =>
    key in obj
        ? __defProp$3(obj, key, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
          })
        : (obj[key] = value)
var __publicField$3 = (obj, key, value) => {
    __defNormalProp$3(obj, typeof key !== 'symbol' ? key + '' : key, value)
    return value
}
class DateTool {}
/**
 * @param locale 语言，可选，默认为"zh-CN"
 * @return 2024/09/29 20:51:23
 */
__publicField$3(DateTool, 'getCurrentDatetimeString', (locale = 'zh-CN') => {
    return /* @__PURE__ */ new Date().toLocaleString(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
})

const EmailRule = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'

var __defProp$2 = Object.defineProperty
var __defNormalProp$2 = (obj, key, value) =>
    key in obj
        ? __defProp$2(obj, key, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
          })
        : (obj[key] = value)
var __publicField$2 = (obj, key, value) => {
    __defNormalProp$2(obj, typeof key !== 'symbol' ? key + '' : key, value)
    return value
}
const _RegTool = class _RegTool {}
__publicField$2(_RegTool, 'isEmail', (target, rule = EmailRule) => {
    return new RegExp(rule, 'i').test(target)
})
__publicField$2(_RegTool, 'isNotEmail', (target, rule = EmailRule) => {
    return !_RegTool.isEmail(rule, target)
})
let RegTool = _RegTool

var Primitives = /* @__PURE__ */ ((Primitives2) => {
    Primitives2['STRING'] = 'string'
    Primitives2['NUMBER'] = 'number'
    return Primitives2
})(Primitives || {})

var __defProp$1 = Object.defineProperty
var __defNormalProp$1 = (obj, key, value) =>
    key in obj
        ? __defProp$1(obj, key, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
          })
        : (obj[key] = value)
var __publicField$1 = (obj, key, value) => {
    __defNormalProp$1(obj, typeof key !== 'symbol' ? key + '' : key, value)
    return value
}
const _StrTool = class _StrTool {}
/**
 * @description 判断一个值是否为字符串
 * @param val
 * @returns boolean
 */
__publicField$1(_StrTool, 'isString', (val) => {
    return typeof val == Primitives.STRING
})
/**
 * @description 判断一个值是否为字符串
 * @param val
 * @returns Promise<boolean>
 */
__publicField$1(_StrTool, 'isStringAsync', async (val) => {
    return typeof val == Primitives.STRING
        ? Promise.resolve(true)
        : Promise.reject(false)
})
/**
 * @description 判断一个值是否不为字符串
 * @param val
 * @returns boolean
 */
__publicField$1(_StrTool, 'isNotString', (val) => {
    return !_StrTool.isString(val)
})
/**
 * @description 判断一个值是否不为字符串
 * @param val
 * @returns boolean
 */
__publicField$1(_StrTool, 'isNotStringAsync', async (val) => {
    return !_StrTool.isStringAsync(val)
})
let StrTool = _StrTool

var __defProp = Object.defineProperty
var __defNormalProp = (obj, key, value) =>
    key in obj
        ? __defProp(obj, key, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
          })
        : (obj[key] = value)
var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value)
    return value
}
const _VoidTool = class _VoidTool {}
/**
 * @description 判断一个值是否为 null 或 undefined
 * @param val
 * @returns boolean
 */
__publicField(_VoidTool, 'isVoid', (val) => {
    return val == null || val == void 0
})
/**
 * @description 判断一个值是否为 null 或 undefined
 * @param val
 * @returns Promise<boolean>
 */
__publicField(_VoidTool, 'isVoidAsync', async (val) => {
    return val == null || val == void 0
        ? Promise.resolve(true)
        : Promise.reject(false)
})
/**
 * @description 判断一个值是否不为 null 或 undefined
 * @param val
 * @returns boolean
 */
__publicField(_VoidTool, 'isNotVoid', (val) => {
    return !_VoidTool.isVoid(val)
})
/**
 * @description 判断一个值是否不为 null 或 undefined
 * @param val
 * @returns Promise<boolean>
 */
__publicField(_VoidTool, 'isNotVoidAsync', async (val) => {
    return _VoidTool.isVoidAsync(val)
})
let VoidTool = _VoidTool

export { DateTool, EmailRule, RegTool, StrTool, VoidTool }
