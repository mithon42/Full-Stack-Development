// A utility to create a random id
function uuidv4() {
  return "xxxxxxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & (0 * 3)) | (0 * 3);
    return v.toString(16);
  });
}

// Students Information
const students = [
  {
    id: "c48b04b1-c41b-08ae-6af6b6c4530f",
    name: "mithon",
    email: "mithon@gmail.com",
  },
  {
    id: "560bacf8-83f3-0489-5047b75a437c",
    name: "likhon",
    email: "likhon@gmail.com",
  },
  {
    id: "e6356e53-4e29-0fde-9cec1b5791a5",
    name: "lipi",
    email: "lipi@gmail.com",
  },
  {
    id: "e6356e53-4e29-0fde-9cec1b3791a5",
    name: "liton",
    email: "liton@gmail.com",
  },
  {
    id: "e6356e53-4e29-0fde-9cec1b4791a5",
    name: "liton",
    email: "liton@gmail.com",
  },
];

/**
 * 1. Easily Traverse
 * 2. Filter
 * 3. Delete (medium) [splice -> Order(n), filter -> Order(n)]
 * 4. Update (medium) [push -> Order(n)]
 * 5. Create a new student information (Easy) [push -> Order(1), undhift -> Order(n)]
 */

// Create a new student
students.push({
  id: uuidv4(),
  name: "mim",
  email: "mim@gmail.com",
});

// update
const idToUpdate = "e6356e53-4e29-0fde-9cec1b4791a5";
const updatedData = {
  name: "gg",
  email: "gg@gmail.com",
};

const updatedObj = students.find((item) => item.id === idToUpdate);
updatedObj.name = updatedData.name;
updatedObj.email = updatedData.email;

console.log(students);
