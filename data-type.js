// primitive data type
let data = 23;
data = false;
data = {
  name: "aru",
  price: 6000,
};
data = [12, 13, 14, 15, 16, 17, 18];
data = undefined;
data = null;
// console.log(typeof data);

// nonprimitive
const price = 50;
const name = "abul";
const isPoor = false;
const student = {
  name: "babul",
  location: "lalbag",
  subject: "CSC",
};
const friend = ["tom", "bob", "jeck", "rock"];

// unfefined not define
let money;
function total(a, b) {
  if (a && b) {
    const sum = a + b;
    return sum;
  }
}
console.log(total(2, 2));
