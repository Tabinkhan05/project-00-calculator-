#! /usr/bin/env node

import inquirer from "inquirer";

console.log(" simple calculator ");

let answers = await inquirer.prompt([
    {message : "enter first number", type : "number", name : "first number"},
    {message : "enter second number", type : "number",name : "second number" },
    {
        message : "select an operator",
        type : "list",
        name : " operator",
        choices : ["addition", "subtraction","multiplication","division"],
        
    }
])


if(answers.operator == "addition"){
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator == "subtraction"){
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator == "multiplication"){
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator == "division"){
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("invalid input")
}