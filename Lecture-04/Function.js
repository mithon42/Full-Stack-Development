// function nameOfTheFunction () {
//     console.log('Hello', 'Mithon');
// }
// nameOfTheFunction()

// function nameOfTheFunction(name) {
//     console.log('Hello', name);
// }
// nameOfTheFunction('Mithon')

function nameOfTheFunction(name) {
  if (!name) {
    console.log("Please provide your name");
  } else {
    console.log("Hello", name);
  }
}
nameOfTheFunction("Mithon");
nameOfTheFunction();

// const randomeNumber = Math.round(Math.random() * 10);
// console.log(randomeNumber);

function generateRandomeNumber(min = 1, max) {
  const randomeNumber = Math.floor(Math.random() * min + (max - min));
  return randomeNumber;
}
console.log(generateRandomeNumber(5, 10));

