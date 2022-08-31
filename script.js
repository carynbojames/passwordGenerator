// STEP 1: Return HTML to start the button
// document.querySelector returns the first element that matches the specified selector
// Deefine variable "generateBtn" to return selector id generate
// OBS: This line can go at the top or bottom
// QUESTION: Why reference the id vs class
var generateBtn = document.querySelector("#generate");


// STEP 3: writePassword function
var writePassword = function() {

  // STEP 3A: User selected criteria. User selects and the answers are stored as variables
  // User selects password length
  var selectLength = function() {
    passwordLength = window.prompt("Select password length. Choose a number greater than 7 and less than 128.");
    // If the user entry meets the criteria, then the value is logged
    if (passwordLength > 7 && passwordLength < 128) {
      console.log("User Select Length: " + passwordLength)
    // If the user entry does NOT meet the criteria, then the function is repeated
    } else (selectLength());
   }
  // Calls the function to execute
  selectLength();

  // User selects if the password will have lower case characters
  var selectLower = function() {
    passwordLower = window.prompt("Select if the password includes lowercase letters. Enter 'yes' or 'no'.")
    if (passwordLower == "yes" || passwordLower == "no") {
      return console.log("User Select Lowercase: " + passwordLower);
    } else (selectLower());
  }
  selectLower();
  // QUESTION: "return" vs no "return"
  // OBS: If I had var in front of passwordLength prmpt, message that passwordLower not defined

  // User selects if the password will have upper case characters
  var selectUpper = function() {
    passwordUpper = window.prompt("Select if the password includes upper letters. Enter 'yes' or 'no'.")
    if (passwordUpper == "yes" || passwordUpper === "no") {
      console.log("User Select Uppercase: " + passwordUpper);
    } else (selectUpper());
  }
  selectUpper();

  // User selects if the password will have numbers
  var selectNumber = function() {
    passwordNumber = window.prompt("Select if the password includes numbers. Enter 'yes' or 'no'.")
    if (passwordNumber == "yes" || passwordNumber == "no") {
      console.log("User Select Number: " + passwordNumber);
  } else (selectNumber()); 
  }
  selectNumber();

  // User selects if the password will have special characters
  var selectSpecial = function() {
    passwordSpecial = window.prompt("Select if the password includes special characters. Enter 'yes' or 'no'.")
    if (passwordSpecial == "yes" || passwordSpecial == "no") {
      console.log("User Select Special: " + passwordSpecial);
    } else (selectSpecial());
  }
  selectSpecial(); 

  // STEP 3B: Auto-generate the different types of characters in the password
  // Select random letter - lower
  function randomLower() {
    var lowerString = "abcdefghijklmnopqrstuvwxyz"
    return lowerString[Math.floor(Math.random() * lowerString.length)]
  }
  // BUILD: Test that the code creates a random value
  // console.log("Lower String Random: " + randomLower());

  // BUILD: Test that the code incorporates the entire string. 
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

  // NOTE: The code works w/o var in front "passwordCharacter"
  var passwordCharacter = function() {
    // Create an array for the different character types
    var passwordArray = ["Upper", "Lower", "Number", "Special"];
    // Randomly select the position in the array 
    passwordArrayPosition = Math.floor(Math.random() * passwordArray.length)
    passwordCharacterType = passwordArray[passwordArrayPosition]; 
    console.log("Character Type: " + passwordCharacterType);
  

    if (passwordLower == "yes" && passwordCharacterType == "Lower") {
      characterNext = randomLower();
      password = password.concat(characterNext);
      console.log("Next Character: " + characterNext);
      // console.log("Password: " + characterNext);
    } else if (passwordUpper == "yes" && passwordCharacterType == "Upper") {
      characterNext = randomUpper();
      password = password.concat(characterNext);
      console.log("Next Character: " + characterNext);
      // console.log("Password: " + characterNext);
    } else if (passwordNumber == "yes" && passwordCharacterType == "Number") {
      characterNext = randomNumber;
      password = password.concat(characterNext);
      console.log("Next Character: " + characterNext);
      // console.log("Password: " + characterNext);
    } else if (passwordSpecial == "yes" && passwordCharacterType == "Special") {
      characterNext = randomSpecial();
      password = password.concat(characterNext);
      console.log("Next Character: " + characterNext);
      // console.log("Password: " + characterNext);
    } // Reselect a random position in the array until one of the conditions above is true
      else { 
        passwordCharacter(); 
    }
  }

  for (var i = 0; i < passwordLength; i++) {
    passwordCharacter()
    console.log("Password: " + password);
  }

  // Write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  console.log("User Password Length: " + passwordLength);
  console.log("Password Length: " + password.length); 

}

// STEP 2: "Generate Password" button calls writePassword function
 generateBtn.addEventListener("click", writePassword);
// NOTE: addEventListener makes the generateBtn a button
// NOTE: "click" activtes the variable writePassword
// OBS: This line of code does not work if before the writePassword function
