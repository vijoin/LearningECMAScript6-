// #default parameters on a function... and template literals (uses backticks ``)
const newFunction = function (name = "victor", age = 36, country = "VE") {
  console.log(
    `Hello, my name is ${name}, I'm ${age} years old and I'm from ${country}`
  );
};

newFunction();
newFunction("jose", 63, "EV");

// #Multiline
let multiline = `This is a multi
line string`;
console.log(multiline);

// #Destructuring
person = { name: "Victor", age: 36, country: "VE" };
let { name, age, country } = person;
console.log(name, age, country);

// #Spread operator
let team1 = ["Maria", "Luis", "Carlos"];
let team2 = ["Jose", "Raul", "Miguel"];
let team3 = ["David", ...team1, ...team2];
console.log(team3);

// #Let
{
  var globalVar = "myVar";
}
{
  let blockLet = "myLet";
  console.log(blockLet); // let can only be accessed from its scope
}
console.log(globalVar);
console.log(blockLet); // error: "ReferenceError: blockLet is not defined"

// #Const
const myConst = "a";
myConst = "b"; // error: "TypeError: Assignment to constant variable."

// # Object params, Shorter way to declare an object and its properties with same variable names
let name = "victor";
let age = 36;

// before
obj = { name: name, age, age };

//es6
obj2 = { name, age };
console.log(obj2);

// # Arrow Functions

const names = [
  { name: "victor", age: "36" },
  { name: "carlos", age: "25" },
  { name: "juan", age: "28" },
];

//before
let listOfNames = names.map(function (item) {
  return item.name;
});

//es6
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
listOfNames = names.map((item) => item.name);

listOfNames2 = names.map((item) => {
  // do somenthing
  return something;
});

const arrFn = (a, b) => a + b;

const arrowFn = (name, age) => {
  // do something
  return [name, age + 1];
};

const arrFn2 = () => "hello " + "world";

// # Promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Basic structure
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
