import ValidateUtil from '..'

/**
 *
 * showcase:
 * ^(([a-zA-Z0-9]{5})+(-?)){1,4}$
 *
 * [a-zA-Z0-9] represents all characters
 *
 * {5} represents the number of characters of each group, 5 means it matches exact five characters
 *
 * eg. {1,5} means it matches between 1 to 5 characters
 *
 * -? represents the optional character as a separator
 *
 * {1,4} represents the number of groups including the sperator
 *
 */
export class CodeUtil extends ValidateUtil {
  constructor(reg: RegExp | string, flags?: string) {
    super(reg, flags)
  }
}

export const shortThan = (val: string, max: number) => {
  if (val.length < max) return Promise.resolve(val)
  else return Promise.reject(val)
}
export const shortThanOrEqual = (val: string, max: number) => {
  if (val.length <= max) return Promise.resolve(val)
  else return Promise.reject(val)
}

export const longerThan = (val: string, min: number) => {
  if (val.length > min) return Promise.resolve(val)
  else return Promise.reject(val)
}

export const longerThanOrEqual = (val: string, min: number) => {
  if (val.length >= min) return Promise.resolve(val)
  else return Promise.reject(val)
}

export const lengthBetween = (val: string, min: number, max: number) => {
  if (val.length >= min && val.length <= max) return Promise.resolve(val)
  return Promise.reject(val)
}

export const numbersOnly = (val: string) => {
  if (/^[0-9]+$/.test(val)) return Promise.resolve(val)
  else return Promise.reject(val)
}

export const lettersOnly = (val: string) => {
  if (/^[a-zA-Z]+$/.test(val)) return Promise.resolve(val)
  else return Promise.reject(val)
}

export const fullyCapitalized = (val: string) => {
  if (/^[A-Z]/.test(val)) return Promise.resolve(val)
  else return Promise.reject(val)
}

export const fullyLowercased = (val: string) => {
  if (/^[a-z]/.test(val)) return Promise.resolve(val)
  else return Promise.reject(val)
}

export const lettersAndNumbersOnly = (val: string) => {
  if (/^[a-zA-Z0-9]+$/.test(val)) return Promise.resolve(val)
  else return Promise.reject(val)
}
