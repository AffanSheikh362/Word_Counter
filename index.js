#! /usr/bin/env node 
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count words :",
    },
]);
let num = answer.Sentence.trim().split(" ");
console.log(num.length);
