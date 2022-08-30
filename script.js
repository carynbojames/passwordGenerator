// Assignment Code

// STEP 1: 
// document.querySelector returns the first element that matches the specified selector
// Triggers the button 
var generateBtn = document.querySelector("#generate");



// STEP 2: User selects password criteria
var writePassword = function() {
    
  //OPTION 1 for the prompt w/ variable and not a function 
  // var passwordLength = window.prompt("Select password length. Choose a number greater than 7 and less than 128.");
    // Validates if user entry meets the criteria
    // if (passwordLength > 7 && passwordLength < 128) {
      // console.log("Password Length: " + passwordLength)
    // Restarts the code to select a different value 
    // } else (passwordLength);
 
  var selectLength = function() {
    passwordLength = window.prompt("Select password length. Choose a number greater than 7 and less than 128.");
    // Validates if user entry meets the criteria
    if (passwordLength > 7 && passwordLength < 128) {
      console.log("Password Length: " + passwordLength)
    // Restarts the code to select a different value 
    } else (selectLength());
    }
  selectLength();

  // var passwordLower; 
  var selectLower = function() {
    // var passwordLower = window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.");
    passwordLower = window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.")
    if (passwordLower == "yes" || passwordLower == "no") {
      return console.log("Password Lowercase: " + passwordLower);
    } else (selectLower());
    }
  selectLower();

  var selectUpper = function() {
    passwordUpper = window.prompt("Select if the password includes upper letters. Enter 'yes' or 'no'.")
    if (passwordUpper == "yes" || passwordUpper === "no") {
      console.log("Password Upper: " + passwordUpper);
    } else (selectUpper());
  }
  selectUpper();

  var selectNumber = function() {
    passwordNumber = window.prompt("Select if the password includes numbers. Enter 'yes' or 'no'.")
    if (passwordNumber == "yes" || passwordNumber == "no") {
      console.log("Password Number: " + passwordNumber);
  } else (selectNumber()); 
  }
  selectNumber();

  var selectSpecial = function() {
    passwordSpecial = window.prompt("Select if the password includes special characters. Enter 'yes' or 'no'.")
    if (passwordSpecial == "yes" || passwordSpecial == "no") {
      console.log("Password Special: " + passwordSpecial);
    } else (selectSpecial());
  }
  selectSpecial(); 

  // Select random letter - lower
  function randomLower() {
    var lowerString = "abcdefghijklmnopqrstuvwxyz"
    return lowerString[Math.floor(Math.random() * lowerString.length)]
  }
  console.log("Lower String Random: " + randomLower());

  var lowerString = "abcdefghijklmnopqrstuvwxyz"
  console.log("Lower String First: " + lowerString[0]);
  console.log("Lower String Last: " + lowerString[25]);
  console.log("Lower String Length: " + lowerString.length);

  // Select random letter - upper
  function randomUpper() {
    var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return upperString[Math.floor(Math.random() * upperString.length)]
  }
  console.log("Upper String Random: " + randomUpper());

  var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  console.log("Upper String First: " + upperString[0]);
  console.log("Upper String Last: " + upperString[25]);
  console.log("Upper String Length: " + upperString.length);


  // Select random number
  var randomNumber = Math.floor(Math.random() * 10);
  console.log("Random Number: " + randomNumber);

  // Select a special character
  function randomSpecial() {
    var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return special[Math.floor(Math.random() * special.length)]
  }
  console.log("Special Random: " + randomSpecial());

  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  console.log("Special First: " + special[0]);
  console.log("Special Last: " + special[29]);
  console.log("Special Length: " + special.length);

  // Create an array for the different character types
  var passwordCharacter = function() {
    var passwordArray = ["Upper", "Lower", "Number", "Special"];
    console.log(passwordArray);
    console.log("Password Array Length: " + passwordArray.length); 
    // Randomly select the position in the array 
    var passwordPosition = Math.floor(Math.random() * passwordArray.length)
    return passwordCharacter = passwordArray[passwordPosition]; 
    }
    passwordCharacter();
    console.log("Character Type: " + passwordCharacter)


  console.log("Password Length Check: " + passwordLength); 
  console.log("Password Lower Check: " + passwordLower); 
  console.log("Password Upper Check: " + passwordUpper); 
  console.log("Password Number Check: " + passwordNumber); 
  console.log("Password Special Check: " + passwordSpecial); 
  
  //  ACTION: Add conditional statement. If Upper == True && 
  if (passwordLower == "yes" && passwordCharacter == "Lower") {
    console.log("Random Character: " + randomLower()); 
  } else if (passwordUpper == "yes" && passwordCharacter == "Upper") {
    console.log("Random Character: " + randomUpper());
  } else if (passwordNumber == "yes" && passwordCharacter == "Number") {
    console.log("Random Character: " + randomNumber);
  } else if (passwordSpecial == "yes" && passwordCharacter == "Special") {
    console.log("Random Character: " + randomSpecial());
  } // Reselect a random position in the array until one of the conditions above is true
    else {
  passwordCharacter(); 
  }
}

  // ACTION: Right now this just passes it forward. It doesn't return it to the main screen. 
  //if (!passwordLength) {
  //  return;

generateBtn.addEventListener("click", writePassword);

  



 



// for (var i = 0; i < passwordLength.length; i++) {
//   password = password.push(password.length[i])
//   console.log(password);
// }




// Write password to the #password input
// function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
// The click activates the variable and/or function
// OBSERVATION: When placed at the beginning, the button doesn't work