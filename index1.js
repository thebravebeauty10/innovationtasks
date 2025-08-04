const nums = [5, 12, 8, 20, 7];
const filtered = nums.filter(n => n > 10);
const sum = nums.reduce((a, b) => a + b, 0);
const product = nums.reduce((a, b) => a * b, 1);
const slicePortion = nums.slice(1, 4);
const arr2 = [...nums];
arr2.splice(2, 1, 99);
const merged = [...nums, ...[30, 40]];
console.log(filtered, sum, product, slicePortion, arr2, merged);