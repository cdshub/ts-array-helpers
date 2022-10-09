export const sumArray = (items: number[]) => {
  let sum = 0;
  for (const item of items) {
    sum += item * 1;
  }
  return sum;
};

export const arrayCombine = <T>(items: T[], fieldName: string): { [K: string]: T[] } => {
  const results: { [K: string]: T[] } = {};
  if (!items || items.length == 0) {
    return results;
  }
  for (const item of items) {
    const key = item[fieldName] ?? '';
    if (!results[key]) {
      results[key] = [];
    }
    results[key].push(item);
  }
  return results;
};

export const arraySingleCombine = <T>(items: T[], fieldName: string): { [K: string]: T } => {
  const results: { [K: string]: T } = {};
  if (!items || items.length == 0) {
    return results;
  }
  for (const item of items) {
    results[item[fieldName] ?? ''] = item;
  }
  return results;
};