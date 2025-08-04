const obj = { a: 10, b: 20, c: { d: 30 } };
const { a, b, c: nested = {}, e = 100 } = obj;
const cloneObj = { ...obj, a: 99, f: 200 };
console.log(a, b, nested, e, cloneObj);