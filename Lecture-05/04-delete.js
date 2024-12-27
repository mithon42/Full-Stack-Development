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

// Splicee -> Mutable
// const index = arr.findIndex((item) => item.id === 4);
// const arr1 = arr.splice(index, 1);
// console.log(arr);

// filter -> immutable
const arr2 = arr.filter((item) => item.id !== 4);
console.log(arr);
console.log(arr2);
