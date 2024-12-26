const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
  { id: 6, value: 60 },
  { id: 7, value: 70 },
  { id: 8, value: 80 },
  { id: 9, value: 90 },
  { id: 10, value: 100 },
];

const obj2 = arr[2];
obj2.value = 300;

// const index = arr.findIndex(function (v) {
//   return v.id === 4;
// });
// arr[index].value = 403;
// console.log(arr);

const obj = arr.find(function (v) {
  return v.id === 4;
});
obj.value = 400;
console.log(obj);
console.log(arr);

const a = { a: 10 },
b = { a: 10 };
const c = a;
console.log(a === c);
