// const students = ['mithon', 'likhon', 'mim', 'joy', 'adu'];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i], students[i].toUpperCase());
// }

const AllStudentNames = [
  "mithon",
  "likhon",
  "mim",
  "jui",
  "akhi",
  "taslima",
  "tuli",
];
for (let i = 0; i < AllStudentNames.length; i++) {
  console.log(AllStudentNames[i], "->", AllStudentNames[i].toUpperCase());
}

// const number = [1, 2, 3, 4, 5];
// const bools = [true, false, true, true, false];
// const nulls = [null, null, null];
// const undefined = [undefined, undefined, undefined];
// const arrayOfArray = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [6, 7, 8],
//   [9, 10, 11],
// ];
// const mixedData = [true, null, "name", 12, [1, 2, 3], false, undefined];

/**
 * CRUD ->
 * C - Create
 * R - Reate
 * U - Update
 * D - Delete
 */

// store attributes useing array
const student1 = {
  fastName: "mithon",
  lastName: "ali",
  email: "mithon@gmail.com",
  age: 22,
  attend: true,
};
const student2 = {
  fastName: "likhon",
  lastName: "ali",
  email: "likhon@gmail.com",
  age: 22,
  attend: true,
};
const student3 = {
  fastName: "mim",
  lastName: "ali",
  email: "mim@gmail.com",
  age: 22,
  attend: true,
};

const AllStudents = [student1, student2, student3];

for (let i = 0; i < AllStudents.length; i++) {
  sendEmail(AllStudents[i].email);
}

function sendEmail(email) {
  console.log("Sending Email ->", email);
}
