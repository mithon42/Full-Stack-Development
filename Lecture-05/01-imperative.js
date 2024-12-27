const numbers = [1, 2, 3, 4, 5, 6, 100];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

numbers.forEach(function (value) {
  if (value % 2 === 0) {
    console.log(value);
  }
});

numbers.forEach((value) => {
  if (value % 2 === 1) {
    console.log(value);
  }
});

let sum = 0;
numbers.forEach((val) => {
  sum += val;
});
console.log(sum);

let smm = 0;
numbers.forEach((value, index, array) => {
  if (index <= array.length) {
    smm += value;
  }
});
console.log(smm);
