// Inquirer

import inquirer from "inquirer"


let answer = await inquirer.prompt([{
    name: "name",
    type: "input",
    message: "Enter your name: "
},
{
    name: "age",
    type: "number",
    message: "Enter your age: "
},
{
    name: "course",
    type: "list",
    message: "Choose your course",
    choices: ["Python","JS","TS","Html","Css"]
}])

console.log(answer.name);
console.log(answer.age);
console.log(answer.course);


