// (1)var, let, const
// var firstName = "Anik Ahmed";
// console.log(firstName);
// firstName = "Ishan Ahamed";
// console.log(firstName);

// let example
// we can re-assagin same value
let lastName = "Ahamed";
console.log(lastName);
lastName = "hossain";
console.log(lastName);

// const eexample
// we can't re-assagin same value
const firstName = "Anik";
console.log(firstName);
// firstName = "anikahamed";
// console.log(firstName);

// (2) Arrow Fanction
// example
function showText(text) {
  console.log(text);
}
showText("javaScript For ReactJS");

// example
const showTheText = (text) => {
  console.log(text);
};
showTheText("Arrow For JavaScript");

// Fancton without parameter
const showTheText2 = () => {
  console.log("I love javaScript Programming");
};
showTheText2();

// example
const showResult = (number) => {
  return number * 2;
};
showResult(2);
console.log(showResult(2));

// example
const showResult2 = (number) => number * 2;
console.log(showResult2(2));

// SPREAD opratores
const num1 = [1, 2, 3, 4];
console.log(num1);
// Using spread oprator
const num2 = [...num1, 5, 6, 7, 8];
console.log(num2);

// object example

const user1 = {
  fName: "Anik",
  lName: "Ahmed",
};
console.log(user1);

const user2 = {
  ...user1,
  Age: 32,
  Hight: "6.5",
};
console.log(user2);

// another example
const getNumbers = (...number) => {
  console.log(number[1]);
};
getNumbers(1, 2, 3, 4, 5);

// Dstruction
// array example
const num6 = [1, 2, 3, 4];

const [n1, n2, n3] = num6;
console.log(n1);
console.log(n2);
console.log(n3);

// object example
const user6 = {
  fNAME1: "Anik",
  lName1: "Ahmed",
  Age1: 32,
};

const { Age1, fNAME1 } = user6;

console.log(Age1);
console.log(fNAME1);

// (5) Array MAP
const num3 = [2, 4, 6, 7, 8];
num3.map((num) => {
  console.log(num * 2);
});

// (6) Filter method
const age1 = [32, 34, 45, 56, 17, 18];

const isVoter = (vAge) => vAge >= 18;

const voterList = age1.filter(isVoter);
console.log(voterList);

//  Find Method
const age2 = [22, 33, 45, 67, 75, 80];

const checkPerson = (pAge) => pAge > 33;

const person = age2.find(checkPerson);

console.log(person);

const age3 = [22, 33, 45, 67, 75, 80];

const checkPerson2 = (pAge) => pAge === 33;

const person2 = age3.find(checkPerson2);

console.log(person2);

// Array MAP
const num10 = [23, 45, 57, 46, 90, 78];

num10.map((num1) => {
  console.log(num1 * 2);
});

// Array Reduce

const number1 = [23, 34, 22, 45, 67, 89];
function getTotal1(first, next) {
  return first + next;
}

const total = number1.reduce(getTotal1);
console.log(total);

// secon example with arrow function
const num11 = [23, 34, 22, 45, 67, 89];
const getTotal = num11.reduce((first, next) => first + next, 0);
console.log(getTotal);

// another example
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, current) => acc + current, 0);

console.log(sum); // Output: 10

// javaScript Classes

class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    return 2023 - this.year;
  }
}
const myCar = new car("BMW", "2023");
console.log(myCar);
console.log(myCar.age());
myCar.age();

// SECOND EXAMPLE
class person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const anik = new person1("AnikAhmed", "32");

console.log(anik);
