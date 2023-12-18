const userDetails = {
  name: "John Doe",
  age: 14,
  verified: false,
};
const newUser = userDetails;
//   newUser.name="shivam"
console.log(newUser);
console.log(userDetails);

//3 methods for cloning
let clone1 = { ...userDetails };
console.log(clone1);
let clone2 = Object.assign({}, userDetails);
console.log(clone2);

let clone3 = JSON.parse(JSON.stringify(userDetails));
console.log(clone3);

//let clone4  - lodash
