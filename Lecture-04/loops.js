for (let index = 1; index <= 10; index++) {
  console.log(index, "Welcome");
}

for (let i = 1; i <= 11; i++) {
  // it's a new js file,
  // we can write any valid js code here.
  // every code weitten inside this will execute multipule times
  console.log(`${i} Welcomes`);
}

// There are total three types of loop available in JS

while (true) {
  let nam = Math.ceil(Math.random() * 100);
  console.log("mithon", nam);

  if (nam === 99) break;
}

do {
  console.log("It will run at least once");
} while (false);
