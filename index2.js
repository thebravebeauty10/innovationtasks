let age = 25;
let price = 19.99;
console.log("Type of age:", typeof age);
console.log("Type of price:", typeof price);

let name = "Alice";
let greeting = 'Hello, world!';
console.log("Type of name:", typeof name);
console.log("Type of greeting:", typeof greeting);

let isLoggedIn = true;
let hasPermission = false;
console.log("Type of isLoggedIn:", typeof isLoggedIn);
console.log("Type of hasPermission:", typeof hasPermission);

let selectedCar = null;
console.log("Type of selectedCar:", typeof selectedCar);

let favoriteColor;
console.log("Type of favoriteColor:", typeof favoriteColor);

let person = {
    firstName: "Bob",
    lastName: "Smith"
};
console.log("Type of person:", typeof person);

let numbersArray = [1, 2, 3];
console.log("Type of numbersArray:", typeof numbersArray);

const id = Symbol('id');
let user = {
    [id]: 123
};
console.log("Type of id:", typeof id);
console.log("User ID:", user[id]);

let num1 = 10;
let str1 = "5";
let result1 = num1 + str1;
console.log("Implicit conversion (number + string):", result1, typeof result1);

let num2 = "10";
let num3 = 5;
let result2 = num2 - num3;
console.log("Implicit conversion (string - number):", result2, typeof result2);

let stringNum = "42";
let numberVersion1 = Number(stringNum);
console.log("Explicit conversion (Number()):", numberVersion1, typeof numberVersion1);

let stringFloat = "3.14";
let floatVersion = parseFloat(stringFloat);
console.log("Explicit conversion (parseFloat()):", floatVersion, typeof floatVersion);

let stringInt = "100px";
let intVersion = parseInt(stringInt);
console.log("Explicit conversion (parseInt()):", intVersion, typeof intVersion);

let unaryPlus = +"99";
console.log("Explicit conversion (unary plus):", unaryPlus, typeof unaryPlus);

let someNumber = 789;
let stringVersion1 = String(someNumber);
console.log("Explicit conversion (String()):", stringVersion1, typeof stringVersion1);

let stringVersion2 = someNumber.toString();
console.log("Explicit conversion (.toString()):", stringVersion2, typeof stringVersion2);

let stringVersion3 = "" + 456;
console.log("Explicit conversion (empty string concatenation):", stringVersion3, typeof stringVersion3);