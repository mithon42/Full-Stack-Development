for (let index = 1; index <= 10; index++) {
  console.log(index, "Welcome");
}

for (let i = 1; i <= 100; i++) {
  console.log(i, " Welcome mithon");
}

for (let i = 1; i <= 11; i++) {
  // it's a new js file,
  // we can write any valid js code here.
  // every code weitten inside this will execute multipule times
  console.log(`${i} Welcomes`);
}

/** There are total three types of loop available in JS
 * 1. for (when we know the range)
 * 2. while (when we don't know the range)
 * 3. do while ***
 */

while (true) {
  let namber = Math.ceil(Math.random() * 100);
  console.log("random number", namber);

  if (namber === 99) break;
}

while (true) {
  let nam = Math.ceil(Math.random() * 100);
  console.log("mithon", nam);

  if (nam === 55) break;
}

do {
  console.log("It will run at least once");
} while (false);