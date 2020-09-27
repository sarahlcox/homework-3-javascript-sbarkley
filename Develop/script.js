// Defining Variables
var symbol= "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var upper= "ABCDEFGHIJKLLMNOPQRSTUVWXYZ";
var lower= "abcdefghijklmnopqrstuvwxyz";
var numeric= "1234567890";

// User Prompts
var symbolGen = confirm ("Do you want your password to contain special characters?");
var upperGen = confirm ("Do you want your password to contain uppercase letters?");
var lowerGen = confirm ("Do you want your password to contain lowercase letters?");
var numericGen = confirm ("Do you want your password to contain numbers?");

// define variable for generated password
//generate  return fx and it return a password
function generatePassword(){

  //ask user questions
  //decide how the possible data is stored (userschoice)
  //based on user length get random vals from the userschoice
  //return the final password

  return"";

}

// Function to generate password, user selects how long they would like password to be





// Assignment Code
var generateBtn = document.querySelector("#generate");

//1. display fx
function mult1(x,y){
  console.log(x*y)
}

mult1(2,3)  //6
mult1(321321,42112);

//2. return fx toss the data to do an action
function mult2(x,y){
  return x*y;
}
var result= mult2(3,4);
console.log(result);
//catch the data a: store it into a var or b: console.log


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
