#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];
let condition = true;

while (condition){
let addTasks = await inquirer.prompt([
  {
    name: "task",
    type: "input",
    message: "what do you want to add in your to do list?",
  },
  {
    name: "addMore",
    type: "confirm",
    message: "do you want to add more?",
    default: "false",
  },
]);
todos.push(addTasks.task);
condition = addTasks.addMore;
console.log(todos);
}