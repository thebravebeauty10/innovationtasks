while (true) {
    let choice = prompt("Choose option:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit");
    if (choice === "5") {
        break;
    }

    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");

    if (isNaN(num1) || isNaN(num2)) {
        continue;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (choice) {
        case "1":
            alert("Result: " + (num1 + num2));
            break;
        case "2":
            alert("Result: " + (num1 - num2));
            break;
        case "3":
            alert("Result: " + (num1 * num2));
            break;
        case "4":
            if (num2 !== 0) {
                alert("Result: " + (num1 / num2));
            } else {
                alert("Cannot divide by zero");
            }
            break;
        default:
            alert("Invalid option");
    }
}