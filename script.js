// Assignment Code
var generateBtn = document.querySelector("#generate");
var Uppercase = "ABCDEFGHIJKLMNOQPRSTUVWXYZ"
var Lowercase = "abcdefghijklmnopqrstuvwxyz"
var Numbers = "1234567890"
var Symbol = "~!@#$%^&*()?/<>=_+-;:"




function generatePassword() {
  var allCharacters = ""
  if (userUppercase) {
    allCharacters = allCharacters + Uppercase
  }
  if (userLowercase) {
    allCharacters = allCharacters + Lowercase
  }
  if (userNumbers) {
    allCharacters = allCharacters + Numbers
  }
  if (userSymbol) {
    allCharacters = allCharacters + Symbol
  }
  var visiblePassword = ""
for (var i = 0; i < characterNumber; i++) {
  var randomNumber = Math.floor(Math.random()*allCharacters.length)
  visiblePassword = visiblePassword + allCharacters[randomNumber]
} return visiblePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var characterNumber = prompt ("How many characters should be included?")
var userUppercase = confirm ("Do you want password to include Uppercase Letters?")
var userLowercase = confirm ("Do you want password to include Lowercase Letters?")
var userSymbol = confirm ("Do you want to include special characters?")
var userNumbers = confirm ("Do you want password to include numbers?")


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
