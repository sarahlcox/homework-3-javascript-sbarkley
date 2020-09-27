// Defining Variables
var symbol= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upper= "ABCDEFGHIJKLLMNOPQRSTUVWXYZ"
var lower= "abcdefghijklmnopqrstuvwxyz"
var numeric= "1234567890"

// User Prompts
var symbolGen = confirm ("Do you want your password to contain special characters?")
var upperGen = confirm ("Do you want your password to contain uppercase letters?")
var lowerGen = confirm ("Do you want your password to contain lowercase letters?")
var numericGen = confirm ("Do you want your password to contain numbers?")

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
