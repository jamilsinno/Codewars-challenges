function first(arr, n) {
  // return arr;
  if (n === 0) return [];
  if (n === null || !n) return [arr[0]];
  return arr.slice(0,n);
}