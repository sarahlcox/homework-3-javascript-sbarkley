// Create arrays for user choice
var symbol= ['!','?','@','#','$','%','&','+','-','.',':','=','^','~'];
var upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric= [1,2,3,4,5,6,7,8,9,0];

// User Prompt variables
var symbolGen;
var upperGen;
var lowerGen;
var numericGen;
// var userLength;
var userschoice=[];
var finalpw;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// define variable for generated password
//generate return function and it returns a password
function generatePassword(){
  //ask for length, prompt returns out a string, you will need to convert this into a number
  var userLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
if (userLength <= 7 || userLength => 129) {
      userLength = parseInt(prompt("You must choose between 8 and 128"));
    } else {
  // ask user questions
  symbolGen = confirm ("Do you want your password to contain special characters?");
  upperGen = confirm ("Do you want your password to contain uppercase letters?");
  lowerGen = confirm ("Do you want your password to contain lowercase letters?");
  numericGen = confirm ("Do you want your password to contain numbers?");
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

  //if symbolGen is true, what do we do?
    //store it in userschoice.
     //decide how the possible data is stored (userschoice: [],{}=>
      // [] b/c we have a .length to determine how much is in the userschoice bc it will vary)
  //after all the series of questions are answered, what do we do?
    //generate a random password using userschoice (need to know how to call random, forloops)
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //Math.floor(Math.random() * (max - min) + min);
    //based on user length (parseInt) get random vals from the userschoice
    //return the final password

//     for(var i=0;i<userLength;i++){
//     var index=(Math.floor(Math.random() * ((userschoice.length-1) - 0) + 0);

//     console.log(userschoice[index]);
//     finalpw+=userschoice[index];
//     //finalpw=finalpw+userschoice[index]
//     }

//   return finalpw;

// }

// Function to generate password, user selects how long they would like password to be
