// Exercise 1: Age Checker
// Ask the user to enter their age. If they are 18 or older, display "You are an adult." Otherwise, display "You are not an adult."

let age = prompt("what is your age?");
if(age > 18){
  console.log("You are an adult.")
}else{
console.log("You are not an adult.")
}





// Exercise 2: Simple Comparison
// Write a program that prompts the user to enter two numbers and displays whether the first number is greater, less than, or equal to the second number.
// Note: make sure you have the correct types!

let numberOne = prompt("Enter one number")
let numberTwo = prompt("Enter second number")
if(numberOne > numberTwo){
  console.log("Your first number is greater than the second number")
}else if(numberOne < numberTwo){
  console.log("Your first number is less than your second number")
}else if(numberOne == numberTwo){
  console.log("Your first number is equal to your second number")
}

// Exercise 3: Even or Odd
// Create a program that asks the user for an integer and then prints whether the number is even or odd. (Google how to check this!)

let number = prompt("Enter a number")
if(number % 2 == 0){
  console.log("number is even")
}else{
  console.log("number is odd")
}


// Exercise 4: Day of the Week
// Prompt the user to enter a day of the week (e.g., "Monday"). Display a message that says whether it's a weekday or the weekend.

let weekDay = prompt("enter a day of the week")
if(weekDay == "monday" , "tuesday", "wednesday", "thursday", "friday"){
  console.log("that is a weekday")
}else{
  console.log("that is not a weekday")
}




// Exercise 5: Age Group Classifier
// Prompt the user to enter their age and categorize them into different age groups:
// - 0-12: Child
// - 13-19: Teenager
// - 20-64: Adult
// - 65+: Senior Citizen





// Exercise 6: Rock, Paper, Scissors Game
// Create a simple rock, paper, scissors game. Prompt the user to enter their choice (rock, paper, or scissors) and then randomly generate the computer's choice. Determine the winner and display the result.





