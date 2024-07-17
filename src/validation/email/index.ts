import ValidateUtil from '..'

export default class EmailUtil extends ValidateUtil {
  constructor(
    afterDot: { min: number; max: number } = { min: 1, max: 5 },
    repeat: { min: number; max: number } = { min: 1, max: 12 },
    flags?: string
  ) {
    super(
      `^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{${afterDot.min},${afterDot.max}}){${repeat.min},${repeat.max}})$`,
      flags
    )
  }
}
