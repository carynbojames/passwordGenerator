// Assignment Code

// STEP 1: 
// document.querySelector returns the first element that matches the specified selector
// Triggers the button 
var generateBtn = document.querySelector("#generate");


// STEP 2: User selects password criteria
var writePassword = function() {
  var passwordLength = function() {
    window.prompt("Select password length. Choose a number greater than 7 and less than 128.");
    // Validates if user entry meets the criteria
    if (passwordLength > 7 && passwordLength < 128) {
      console.log("Password Length: " + passwordLength)
    // Restarts the code to select a different value 
    //} else (passwordLength);
    } 
  passwordLength();
  // ACTION: Right now this just passes it forward. It doesn't return it to the main screen. 
  //if (!passwordLength) {
  //  return;

  //var passwordLower = function() {
    //window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.");
    //if (passwordLower == "yes" || passwordLower == "no") {
    //  console.log("Password Lowercase: " + passwordLower);
    //} else (passwordLower);
    //}

    //var passwordUpper = function() { 
    //  window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.");
    //  if (passwordUpper == "yes" || passwordUpper == "no") {
    //    console.log("Password Uppercase: " + passwordUpper);
    //} else (passwordUpper);
    //}
  }
}  


  // Numeric
  // Special Character

// Lower, Upper, Number, Special

// Create an array with the conditions
// Randomly select the position in the array 
// Execute the logic based on the selection from the array
// Select random letter - upper
function selectUpper() {
  var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperString[Math.floor(Math.random() * upperString.length)]
}
console.log("Upper String Random: " + selectUpper());

var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log("Upper String First: " + upperString[0]);
console.log("Upper String Last: " + upperString[25]);
console.log("Upper String Length: " + upperString.length);

// Select random letter - lower
function selectLower() {
  var lowerString = "abcdefghijklmnopqrstuvwxyz"
  return lowerString[Math.floor(Math.random() * lowerString.length)]
}
console.log("Lower String Random: " + selectLower());

var lowerString = "abcdefghijklmnopqrstuvwxyz"
console.log("Lower String First: " + lowerString[0]);
console.log("Lower String Last: " + lowerString[25]);
console.log("Lower String Length: " + lowerString.length);

// Select random number
var selectNumber = Math.floor(Math.random() * 10);
console.log("Random Number: " + selectNumber);

// Select a special character
function selectSpecial() {
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return special[Math.floor(Math.random() * special.length)]
}
console.log("Special Random: " + selectSpecial());

var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
console.log("Special First: " + special[0]);
console.log("Special Last: " + special[29]);
console.log("Special Length: " + special.length);

// Create an array for the different options 
var passwordCharacter = function() {
  var passwordArray = ["Upper", "Lower", "Number", "Special"];
  console.log(passwordArray);
  console.log("PasswordArray Length: " + passwordArray.length); 
  var passwordXXXX = Math.floor(Math.random() * passwordArray.length)
  return passwordCharacter = passwordArray[passwordXXXX]; 
}
passwordCharacter();
console.log("Character Type: " + passwordCharacter)

  


if (passwordCharacter == "Upper") {
  console.log(selectUpper());
} else if (passwordCharacter == "Lower") {
  console.log(selectLower());
} else if (passwordCharacter == "Number") {
  console.log(selectNumber);
} else if (passwordCharacter == "Special") {
  console.log(selectSpecial());
}


// Repeat for the length of the number chosen
//for (var i = 0; i < upperString.length; i++) {
//  password = password.push(password[i]);
//}


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