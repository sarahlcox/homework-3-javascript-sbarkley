// Defining Variables
var symbol= ['!','?','@','#','$','%','&','+','-','.',':','=','^','~'];
var upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric= [1,2,3,4,5,6,7,8,9,0];
// User Prompts
var symbolGen;
var upperGen;
var lowerGen;
var numericGen;
var userLength;
var userschoice=[];
var finalpw;

// define variable for generated password
//generate return function and it returns a password
function generatePassword(){
}
  //ask for length, prompt returns out a string, you will need to convert this into a number
  //parseInt();
  var passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
}

if (!enter) {
  alert("This needs a value");} 
  else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("Criteria Alert! You must choose a number between 8 and 128"));} 
  
  else {
  // ask user questions
  symbolGen = confirm ("Do you want your password to contain special characters?");
  upperGen = confirm ("Do you want your password to contain uppercase letters?");
  lowerGen = confirm ("Do you want your password to contain lowercase letters?");
  numericGen = confirm ("Do you want your password to contain numbers?");
};


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
    for(var i=0;i<userLength;i++){
    var index=(Math.floor(Math.random() * ((userschoice.length-1) - 0) + 0);

    console.log(userschoice[index]);
    finalpw+=userschoice[index];
    //finalpw=finalpw+userschoice[index]
    }

  return finalpw;

}

// Function to generate password, user selects how long they would like password to be





// Assignment Code
var generateBtn = document.querySelector("#generate");

// //1. display fx
// function mult1(x,y){
//   console.log(x*y)
// }

// mult1(2,3)  //6
// mult1(321321,42112);

// //2. return fx toss the data to do an action
// function mult2(x,y){
//   return x*y;
// }
// var result= mult2(3,4);
// console.log(result);
// //catch the data a: store it into a var or b: console.log


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
