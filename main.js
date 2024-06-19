#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
console.log(" simple calculator ");
var answers = await inquirer_1.default.prompt([
    { message: "enter first number", type: "number", name: "first number" },
    { message: "enter second number", type: "number", name: "second number" },
    {
        message: "select an operator",
        type: "list",
        name: " operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    }
]);
if (answers.operator == "addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator == "subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator == "multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator == "division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("invalid input");
}
