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

// Create arrays for user choice
var symbol= ['!','?','@','#','$','%','&','+','-','.',':','=','^','~'];
var upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric= [1,2,3,4,5,6,7,8,9,0];

// user selects how long they would like password to be
// ask user questions
// If user doesnt choose one selection need to alert to pick at least one
//if symbolGen is true, what do we do?
    //store it in userschoice.
     //decide how the possible data is stored (userschoice: [],{}=>
      // [] b/c we have a .length to determine how much is in the userschoice bc it will vary)

//     for(var i=0;i<userLength;i++){
//     var index=(Math.floor(Math.random() * ((userschoice.length-1) - 0) + 0);
// generate return function and it returns a password
    //after all the series of questions are answered, what do we do?
    //generate a random password using userschoice (need to know how to call random, forloops)
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //Math.floor(Math.random() * (max - min) + min);
    //based on user length (parseInt) get random vals from the userschoice
    //return the final password
    //     console.log(userschoice[index]);
//     finalpw+=userschoice[index];
//     //finalpw=finalpw+userschoice[index]
//     }

//   return finalpw;

