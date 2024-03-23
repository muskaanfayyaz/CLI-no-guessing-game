#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for number for guessing number
// 3) compare user input with computer generated number
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to number guessing game");
const numbers = await inquirer.prompt([
    {
        name: "user guessed number",
        type: "number",
        message: "Please Guess the number between 1-10 : "
    }
]);
if (numbers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number");
}
else {
    console.log("You guessed wrong number");
}
