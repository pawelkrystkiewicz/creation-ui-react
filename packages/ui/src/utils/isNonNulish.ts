/**
 * Checks if a value is present (not null or undefined).
 *
 * This utility is specifically designed for form field validation where
 * falsy values like 0, '', and false are considered valid selections,
 * but null and undefined represent the absence of a value.
 *
 * Unlike a simple truthiness check (!!value), this function treats
 * all non-nullish values as "having a value", which is crucial for
 * form controls that can legitimately have falsy but meaningful values.
 *
 * @param value - The value to check for presence
 * @returns true if value is not null and not undefined, false otherwise
 *
 * @example
 * ```typescript
 * isNonNulish(0)         // true  - zero is a valid value
 * isNonNulish('')        // true  - empty string is a valid value
 * isNonNulish(false)     // true  - false is a valid boolean value
 * isNonNulish(null)      // false - null represents no value
 * isNonNulish(undefined) // false - undefined represents no value
 * isNonNulish('hello')   // true  - non-empty string has value
 * isNonNulish([])        // true  - empty array still has value (it's an array)
 * isNonNulish({})        // true  - empty object still has value (it's an object)
 * ```
 */
export const isNonNulish = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined
}