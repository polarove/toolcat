import { isString, isSymbol, isArray, isObject } from '@vue/shared';

var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$5 = (obj, key, value) => {
  __defNormalProp$5(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _VoidUtil = class _VoidUtil {
};
/**
 * to judge if the value is null
 *
 * @param val
 * @return boolean
 */
__publicField$5(_VoidUtil, "isNull", (val) => {
  return val === null;
});
/**
 * to judge if the value is undefined
 *
 * @param val
 * @return boolean
 */
__publicField$5(_VoidUtil, "isUndefined", (val) => {
  return val === void 0;
});
/**
 * to judge if the value is null or undefined
 *
 * @param val
 * @return boolean
 */
__publicField$5(_VoidUtil, "isVoid", (val) => {
  return val == null;
});
/**
 * to judge if the value is null or undefined
 *
 * @param val
 * @return boolean
 */
__publicField$5(_VoidUtil, "isNotVoid", (val) => {
  return !_VoidUtil.isVoid(val);
});
let VoidUtil = _VoidUtil;

var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => {
  __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _StrUtil = class _StrUtil {
};
/**
 * to judge whether the value is empty
 *
 * @example '   ' => false
 * @example '   f' => false
 * @example null => true
 * @example Symbol('d') => false
 * @param val
 * @return boolean
 */
__publicField$4(_StrUtil, "isEmpty", (val) => {
  if (isString(val))
    return val.length === 0;
  else if (isSymbol(val) && val.description)
    return val.description.length === 0;
  else
    return VoidUtil.isVoid(val);
});
/**
 * to judge where the value is NOT empty
 *
 * @example '   ' => true
 * @example '   f' => true
 * @param val
 * @return boolean
 */
__publicField$4(_StrUtil, "isNotEmpty", (val) => {
  return !_StrUtil.isEmpty(val);
});
/**
 * to judge whether the value is exact empty
 *
 * @example '   ' => true
 * @example '   f' => false
 * @example null => true
 * @example Symbol('d') => false
 * @param val
 * @return boolean
 */
__publicField$4(_StrUtil, "isBlank", (val) => {
  if (isString(val))
    return val.trim().length === 0;
  else if (isSymbol(val) && val.description)
    return val.description.trim().length === 0;
  else
    return VoidUtil.isVoid(val);
});
/**
 * to judge where the value is NOT exact empty
 *
 * @example '   ' => false
 * @example '   f' => true
 * @param val
 * @return boolean
 */
__publicField$4(_StrUtil, "isNotBlank", (val) => {
  return !_StrUtil.isBlank(val);
});
/**
 * insert a string into another string
 *
 * @param source
 * @param at
 * @param plugin
 * @return boolean
 */
__publicField$4(_StrUtil, "insert", (source, at, plugin) => {
  return source.slice(0, at).concat(plugin).concat(source.slice(at));
});
let StrUtil = _StrUtil;

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => {
  __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _Debugger = class _Debugger {
};
__publicField$3(_Debugger, "expect", (position, expect, result) => {
  return `[${position}]: ${"expecting " + expect}, ${"got " + result}`;
});
__publicField$3(_Debugger, "print", (position, error) => {
  return `[${position}]: ${error}`;
});
__publicField$3(_Debugger, "error", (position, expect, result) => {
  console.error(_Debugger.expect(position, expect, result));
});
__publicField$3(_Debugger, "warn", (position, expect, result) => {
  console.warn(_Debugger.expect(position, expect, result));
});
let Debugger = _Debugger;

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class DateUtil {
  static isValidDate(val) {
    if (StrUtil.isEmpty(val))
      return false;
    else if (typeof val === "string")
      return !isNaN(new Date(val).getTime());
    return false;
  }
  static isInvalidDate(val) {
    return !this.isInvalidDate(val);
  }
  /**
   *
   * @param dateStr
   * @returns timestamp
   */
  static toTimestamp(dateStr) {
    if (this.isValidDate(dateStr))
      return new Date(dateStr).getTime();
    else
      Debugger.error(this.name, this.expect, dateStr);
  }
}
__publicField$2(DateUtil, "expect", "expecting a string of date");

var DATE_FORMAT = /* @__PURE__ */ ((DATE_FORMAT2) => {
  DATE_FORMAT2["YEAR"] = "YYYY-MM-DD HH:mm:ss";
  DATE_FORMAT2["DAY"] = "DD [\u5929] HH:mm:ss";
  DATE_FORMAT2["HOUR"] = "HH:mm:ss";
  return DATE_FORMAT2;
})(DATE_FORMAT || {});
var TIMEZONE = /* @__PURE__ */ ((TIMEZONE2) => {
  TIMEZONE2["DEFAULT"] = "Asia/Shanghai";
  TIMEZONE2["SHANGHAI"] = "Asia/Shanghai";
  return TIMEZONE2;
})(TIMEZONE || {});
var TIME_CATEGORY = /* @__PURE__ */ ((TIME_CATEGORY2) => {
  TIME_CATEGORY2["DAY"] = "day";
  TIME_CATEGORY2["HOUR"] = "hour";
  TIME_CATEGORY2["MINUTE"] = "minute";
  TIME_CATEGORY2["SECOND"] = "second";
  return TIME_CATEGORY2;
})(TIME_CATEGORY || {});

var UNICODE = /* @__PURE__ */ ((UNICODE2) => {
  UNICODE2["BLANK_SPACE"] = " ";
  return UNICODE2;
})(UNICODE || {});

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _ListUtil = class _ListUtil {
};
__publicField$1(_ListUtil, "expect", "a list");
/**
 * to judge whether the value is an empty list
 *
 * @example [null,undefined] => false
 * @example [] => true
 * @param val
 */
__publicField$1(_ListUtil, "isEmpty", (val) => {
  if (isArray(val))
    return val.length === 0;
  else
    return VoidUtil.isVoid(val);
});
/**
 * to judge whether the value is NOT an empty list
 *
 * @example [null,undefined] => true
 * @example [] => false
 * @param val
 */
__publicField$1(_ListUtil, "isNotEmpty", (val) => {
  return !_ListUtil.isEmpty(val);
});
/**
 * to judge whether each element in the list is either null or undefined,
 * or it is null or undefined
 *
 * @example [null,undefined] => true
 * @example [null, 1] => false
 * @example null => true
 * @example undefined => true
 * @param val
 */
__publicField$1(_ListUtil, "isEveryVoid", (val) => {
  if (isArray(val))
    return val.every((item) => VoidUtil.isVoid(item)) || _ListUtil.isEmpty(val);
  else
    Debugger.warn(_ListUtil.name, _ListUtil.expect, val);
});
/**
 * to judge whether each element in the list is neither null or undefined
 *
 * @example [null,undefined] => false
 * @example [null, 1] => true
 * @param val
 */
__publicField$1(_ListUtil, "isNotEveryVoid", (val) => {
  if (isArray(val))
    return !_ListUtil.isEveryVoid(val);
  else
    Debugger.warn(_ListUtil.name, _ListUtil.expect, val);
});
/**
 * to judge whether the list has any null or undefined element
 *
 * @example [null,undefined] => true
 * @example [null, 1] => true
 * @example ['d', 1] => false
 * @param val
 */
__publicField$1(_ListUtil, "hasVoidElement", (list) => {
  if (isArray(list))
    return list.some((item) => VoidUtil.isVoid(item));
  else
    Debugger.warn(_ListUtil.name, _ListUtil.expect, list);
});
let ListUtil = _ListUtil;

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _ObjUtil = class _ObjUtil {
};
__publicField(_ObjUtil, "expect", "an object");
__publicField(_ObjUtil, "isSymbol", (object) => {
  return isSymbol(object);
});
/**
 * to judge whether the object is a empty object: {}
 * @example {} => true
 * @example {a:2} => false
 * @param object
 */
__publicField(_ObjUtil, "isEmpty", (object) => {
  if (isObject(object))
    return ListUtil.isEmpty(Reflect.ownKeys(object));
  else
    return VoidUtil.isVoid(object);
});
/**
 * to judge whether the object is NOT a empty object: {}
 * @example {} => false
 * @example {a:2} => true
 * @param object
 * @return boolean
 */
__publicField(_ObjUtil, "isNotEmpty", (object) => {
  return !_ObjUtil.isEmpty(object);
});
/**
 * sort keys of an object
 * @example { a:null, b:2 } => [ 'b', 'a' ]
 * @param object
 * @return string[]
 */
__publicField(_ObjUtil, "sortKeys", (object, order) => {
  let res = [];
  if (isObject(object)) {
    const withoutValue = Object.keys(object).filter(
      (key) => VoidUtil.isVoid(object[key])
    );
    const withValue = Object.keys(object).filter(
      (key) => VoidUtil.isNotVoid(object[key])
    ).sort((a, b) => a.length - b.length);
    res = order ? withoutValue.concat(withValue) : withValue.concat(withoutValue);
  } else
    Debugger.warn(_ObjUtil.name, _ObjUtil.expect, object);
  return res;
});

export { DATE_FORMAT, TIMEZONE, TIME_CATEGORY, UNICODE };
