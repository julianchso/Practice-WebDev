// user = {
//   name: "John",
//   surname: "Smith",
// };

// user.name = "Pete";
// console.log(user.name);
// delete user.name;
// console.log(user.name);

// function isEmpty(obj) {
//   for (key in obj) {
//     return false;
//   }
//   return true;
// }

// let schedule = {};
// console.log(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// function sumSalaries(salaries) {
//   sum = 0
//   for (key in salaries) {
//     sum += salaries[key];
//   }
//   return sum;
// }

// console.log(sumSalaries(salaries));

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] = obj[key] * 2;
    }
  }
  return obj;
}

console.log(multiplyNumeric(menu));
