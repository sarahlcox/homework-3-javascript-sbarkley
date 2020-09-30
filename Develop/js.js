var userPassword="";// Assignment Code
// document.querySelector("#generate").addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);

var lowercaseBank= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseBank= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericBank =["1","2","3","4","5","6","7","8","9","0"];
var specialBank =  ["!","?","@","#","$","%","&","+","-",".",":","=","^","~"];


function generatePassword () {
    var password;
    var passwordBank=[];

    var howManyChars = prompt('how many characters do you want? (8-128)');
    if (parseInt(howManyChars) <8 || parseInt(howManyChars) > 128 || howManyChars === NaN){

    }
    // ask the user which type of characters they want? 
    var lowercase = confirm("would you like lowercase letters?")
    var uppercase = confirm("would you like uppercase letters?")
    var numbers = confirm("would you like numbers?")
    var special = confirm("would you like special characters?")

    if (lowercase || uppercase || numbers || special) {
        if (lowercase){
            for (var i=0; i< lowercaseBank.length; i++){
                passwordBank.push(lowercaseBank[i]);
            }
        // } change to above
        // if (uppercase) passwordBank += uppercaseBank;
        // if (numbers) passwordBank += numericBank;
        // if (numbers) passwordBank += specialBank;

        console.log(passwordBank);
        console.log(passwordBank.length);
        for (var i=0; i < howManyChars; i++){
            var randomIndex = Math.floor(Math.random() * ((passwordBank.length-1) - 0) + 0);
            // var randomIndex = Math.floor(Math.random(passwordBank.length));
            userPassword += passwordBank[randomIndex];
            console.log(randomIndex);


        }
        console.log(userPassword);

    }


    return userPassword;
}