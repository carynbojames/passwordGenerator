// STEP 1: 
// document.querySelector returns the first element that matches the specified selector
// Triggers the button 
var generateBtn = document.querySelector("#generate");

var writePassword = function() {

  // User selects password length
  var selectLength = function() {
    passwordLength = window.prompt("Select password length. Choose a number greater than 7 and less than 128.");
    // If the user entry meets the criteria, then the value is logged
    if (passwordLength > 7 && passwordLength < 128) {
      console.log("Password Length: " + passwordLength)
    // If the user entry does NOT meet the criteria, then the function is repeated
    } else (selectLength());
    }
  // Calls the function to execute
  selectLength();

  // User selects if the password will have lower case characters
  var selectLower = function() {
    passwordLower = window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.")
    if (passwordLower == "yes" || passwordLower == "no") {
      return console.log("Password Lowercase: " + passwordLower);
    } else (selectLower());
    }
  selectLower();
  // QUESTION: "return" vs no "return"
  // selectLower alternative code
  // var passwordLower = window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.");

  // User selects if the password wil have upper case characters
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
  // console.log("Lower String Random: " + randomLower());

  // var lowerString = "abcdefghijklmnopqrstuvwxyz"
  // console.log("Lower String First: " + lowerString[0]);
  // console.log("Lower String Last: " + lowerString[25]);
  // console.log("Lower String Length: " + lowerString.length);

  // Select random letter - upper
  function randomUpper() {
    var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return upperString[Math.floor(Math.random() * upperString.length)]
  }
  // console.log("Upper String Random: " + randomUpper());

  // var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // console.log("Upper String First: " + upperString[0]);
  // console.log("Upper String Last: " + upperString[25]);
  // console.log("Upper String Length: " + upperString.length);

  // Select random number
  var randomNumber = Math.floor(Math.random() * 10);
  // console.log("Random Number: " + randomNumber);

  // Select a special character
  function randomSpecial() {
    var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return special[Math.floor(Math.random() * special.length)]
  }
  // console.log("Special Random: " + randomSpecial());

  // var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // console.log("Special First: " + special[0]);
  // console.log("Special Last: " + special[29]);
  // console.log("Special Length: " + special.length);

  //Define password as an empty string
  var password = "";

  var passwordCharacter = function() {
    // Create an array for the different character types
    var passwordArray = ["Upper", "Lower", "Number", "Special"];
    // Randomly select the position in the array 
    passwordArrayPosition = Math.floor(Math.random() * passwordArray.length)
    passwordCharacterType = passwordArray[passwordArrayPosition]; 
    console.log("Character Type: " + passwordCharacterType);
  
    //  ACTION: Add conditional statement. If Upper == True && 
    if (passwordLower == "yes" && passwordCharacterType == "Lower") {
      characterNext = randomLower();
      password = password.concat(characterNext);
      console.log("Next Character: " + characterNext);
      //console.log("Password: " + characterNext);
    } else if (passwordUpper == "yes" && passwordCharacterType == "Upper") {
      characterNext = randomUpper();
      password = password.concat(characterNext);
      console.log("Next Character: " + characterNext);
      //console.log("Password: " + characterNext);
    } else if (passwordNumber == "yes" && passwordCharacterType == "Number") {
      characterNext = randomNumber;
      password = password.concat(characterNext);
      console.log("Next Character: " + characterNext);
      //console.log("Password: " + characterNext);
    } else if (passwordSpecial == "yes" && passwordCharacterType == "Special") {
      characterNext = randomSpecial();
      password = password.concat(characterNext);
      console.log("Next Character: " + characterNext);
      //console.log("Password: " + characterNext);
    } // Reselect a random position in the array until one of the conditions above is true
      else { 
        passwordCharacter(); 
    }
  }

  for (var i = 0; i < passwordLength; i++) {
    passwordCharacter()
    console.log("Password: " + password);
  }

  console.log("User Password Length: " + passwordLength);
  console.log("Password Length: " + password.length); 

}


  // console.log("Password Length Check: " + passwordLength); 
  // console.log("Password Lower Check: " + passwordLower); 
  // console.log("Password Upper Check: " + passwordUpper); 
  // console.log("Password Number Check: " + passwordNumber); 
  // console.log("Password Special Check: " + passwordSpecial); 
  

// Write password to the #password input
// function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

// Add event listener to generate button
// The click activates the variable and/or function; 
generateBtn.addEventListener("click", writePassword);