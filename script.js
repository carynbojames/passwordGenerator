// Assignment Code

// STEP 1: 
// document.querySelector returns the first element that matches the specified selector
// Triggers the button 
var generateBtn = document.querySelector("#generate");



// STEP 2: User selects password criteria
var writePassword = function() {
  var passwordLength = window.prompt("Select password length. Choose a number greater than 7 and less than 128.");
  // ACTION: Right now this just passes it forward. It doesn't return it to the main screen. 
  if (!passwordLength) {
    return;
  }
  // Validates if user entry meets the criteria
  if (passwordLength > 7 && passwordLength < 128) {
    console.log("Password Length: " + passwordLength)
  // Restarts the code to select a different value 
  } else (passwordLength);

  var passwordLower = window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.");
  if (passwordLower == "yes" || passwordLower == "no") {
    console.log("Password Lowercase: " + passwordLower);
  } else (passwordLower);

  var passwordUpper = window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.");
  if (passwordUpper == "yes" || passwordUpper == "no") {
    console.log("Password Uppercase: " + passwordUpper);
  } else (passwordUpper);
}


// Create an array with the conditions
// Randomly select the position in the array 
// Execute the logic based on the selection from the array
// Select random number
// Select random letter
// Select a special character
// Create an array for the different options + add each new value
// Repeat for the length of the number chosen


// Write password to the #password input
// function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
// The click activates the variable and/or function
generateBtn.addEventListener("click", writePassword);
//generateBtn.addEventListener("click", passwordUpper);
// When placed at the beginning, the button doesn't work