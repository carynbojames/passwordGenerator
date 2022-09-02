## Project Title
Password Generator

## Description
This tool automatically generates a password based on user entered criteria. 
The user can select the length of the password. She can determine if the password will contain lower case letters, upper case letters, numeric values, or special characters. At least one of these attributes must be selected. 

## Instructions
1. Open the link 
2. Select "Generate Password" 
3. Select the length of the password. The value must be greater than 7 and less than 128. 
4. Select if the password will have lower case letters, upper case letter, numeric values, or special characters. The password has to have at least one of these elements selected. If none of these elements are chosen, the prompt for these will loop until at least one of the items are selected. 
5. The program generates an automatic password and enters the value into the 

## Features
* Password Length: If the password length doesn't meet the criteria (>7 and > 128), the prompt screen for password length will pop up again until a value is chosen that meets the requirements. 
* Password Criteria Selection: If at least one of the criteria (lower case, upper case, numeric, symbol) is not selected, the prompt screen for the password will pop up until at least one value is chosen. 
* Auto generate and assign a variable name to the differnt character types
* Create an array of the different character types
* Randomly selects one of the positions from the array and assign it to variable passwordArray
* Compare the variable passwordArray to the user selected criteria. If the character type matches with one of the user selected variables, e.g. (user selected yes for lower and the code randomly generated lower), then the code runs the random generator for that character type. If it doesn't match, then a new random character passwordArray function re-runs until a match occurs. 
* This is repeated until the password character number matches the length selected by the user
* Each new character is added to the password using concat
* There is a console.log that counts the length of the code and the user selected length. This is a way to quickly compare the two without counting the characters in the password. 


## Credits
Support from Sandrine. Help with local and global variable placement. Also help with the correct function placement to get the loop to work. 