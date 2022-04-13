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
