// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = function() {
  var passwordEntry = window.prompt("Select password length. Choose a number greater than 7 and less than 128.");
  if (passwordEntry >= 7 && passwordEntry < 128) {
    var passwordLengthValue =  passwordEntry;
    console.log("Password Length: " + passwordLengthValue)
  } else (passwordLength());
}
passwordLength();

var passwordLower = function() {
  var passwordLowerSelect = window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.");
  if (passwordLowerSelect == "yes" || passwordLowerSelect == "no") {
    console.log("Password Lowercase: " + passwordLowerSelect);
  } else (passwordLower());
}
passwordLower();

var passwordUpper = function() {
  var passwordUpperSelect = window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.");
  if (passwordUpperSelect == "yes" || passwordUpperSelect == "no") {
    console.log("Password Lowercase: " + passwordUpperSelect);
  } else (passwordUpper());
}
passwordUpper();


// Create an array with the conditions
// Randomly select the position in the array 
// Execute the logic based on the selection from the array
// Select random number
// Select random letter
// Select a special character
// Create an array for the different options + add each new value
// Repeat for the length of the number chosen


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
