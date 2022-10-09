type Key = string | number | symbol;

/**
 * Prepend value into array.
 */
export const prepend = <T>(array: T[], value: T) =>
  array ? (array.unshift(value), array) : [value];

/**
 * Group items by common key and return an map of items grouped by key.
 */
export const groupMap = <T>(array: T[], key: keyof T) =>
  array.reduce(
    (entryMap, item) =>
      entryMap.set(item[key], [...(entryMap.get(item[key]) || []), item]),
    new Map(),
  );
/**
 * Group items by common key and return an array of groups.
 */
export const group = <T>(array: T[], predicate: (v: T) => string) =>
  array.reduce((acc, value) => {
    (acc[predicate(value)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });

/**
 * Gets the first element of `array`.
 * @example
 *
 * helpArray.head([1, 2, 3])
 * // => 1
 *
 * helpArray.head([])
 * // => undefined
 */
export const head = <T>(array: T[]): T | undefined =>
  array !== null && array.length > 0 ? array[0] : undefined;

/**
 * Gets the last element of `array`.
 * @example
 *
 * helpArray.last([1, 2, 3])
 * // => 3
 */
export const last = <T>(array: T[]): T | undefined => {
  const length = array === null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
};

/**
 * Gets all but the first element of `array`.
 * @example
 *
 * helpArray.tail([1, 2, 3])
 * // => [2, 3]
 */
export const tail = <T>(array: T[]): T[] => {
  const length = array === null ? 0 : array.length;
  if (!length) return [];
  const [, ...result] = array;
  return result;
};

/**
 * Sort array by a category.
 */
export const sortBy = <T extends Record<Key, any>>(
  array: T[],
  p: keyof T,
): T[] =>
  [...array].sort((a, b) => (a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0));

/**
 * Group array in chunks of `size`.
 */
export const toChunks = <T>(array: T[], size = 1): T[][] => {
  if (size < 1) throw new Error('size value should be greater than 1');

  const out: T[][] = [];
  for (let i = 0, end = array.length; i < end; i += size)
    out.push(array.slice(i, i + size));

  return out;
};

/**
 * Converts the elements that don’t have commas or double quotes to strings with comma-separated values.
 */
export const toCSV = <T extends any[]>(array: T[], delimiter = ','): string =>
  array.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join('\n');

/**
 * Remove duplicate items from an array.
 */
export const unDuplicate = <T>(array: T[]) => [...new Set(array)];

/**
 * Get the sum of an array of numbers
 */
export const sum = (array: number[]) =>
  [...array].reduce((total, value) => total + value, 0);

/**
 * Return combine dictionary by a field
 * @param items
 * @param field
 */
export const combine = <T>(items: T[], field: string): { [K: string]: T[] } => {
  const results: { [K: string]: T[] } = {};
  if (!items || items.length == 0) {
    return results;
  }
  for (const item of items) {
    const key = item[field] ?? '';
    if (!results[key]) {
      results[key] = [];
    }
    results[key].push(item);
  }
  return results;
};

/**
 * Returns combine dictionary by a file
 * @param items
 * @param field
 */
export const singleCombine = <T>(items: T[], field: string): { [K: string]: T } => {
  const results: { [K: string]: T } = {};
  if (!items || items.length == 0) {
    return results;
  }
  for (const item of items) {
    results[item[field] ?? ''] = item;
  }
  return results;
};
