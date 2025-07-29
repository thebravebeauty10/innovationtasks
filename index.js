var greetingVar = "Hello from var!";
console.log(greetingVar);
greetingVar = "Var has been re-assigned!";
console.log(greetingVar);
var greetingVar = "Var can even be re-declared!";
console.log(greetingVar);

let userName = "Alice";
console.log("User Name (let): " + userName);
userName = "Bob";
console.log("User Name (let) after re-assignment: " + userName);

const PI = 3.14159;
console.log("Value of PI (const): " + PI);

const appName = "My JavaScript App";
console.log("Application Name (const): " + appName);

console.log("This is a general log message.");

console.info("This is an informational message.");

console.warn("This is a warning! Something might be slightly off.");

console.error("This is an error! Something went wrong.");

const users = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 24, city: "London" },
    { name: "Charlie", age: 35, city: "Paris" }
];
console.log("--- User Data (console.table) ---");
console.table(users);

let counter = 0;
console.log("Initial counter:", counter);
counter = counter + 5;
console.log("Counter after adding 5:", counter);
counter *= 2;
console.log("Counter after multiplying by 2:", counter);

var temperature = 25;
console.log("Initial temperature (var):", temperature, "degrees Celsius");
temperature = 30;
console.log("Temperature after change (var):", temperature, "degrees Celsius");

const fixedId = "XYZ123";
console.log("Fixed ID (const):", fixedId);

console.log("--- End of Task 1 ---");