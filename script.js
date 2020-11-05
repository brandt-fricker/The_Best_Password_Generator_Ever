// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Write password to the #password input
function writePassword() {
  //  var password = generatePassword();
  var password = "";
  var nums = '123456789';
  var specialChars = '~!@#$%^&*()_+'
  var letters = 'abcdefghijklmnopqrstuvwxyz';

  var upperLetters = letters.toUpperCase();

  var passLength = prompt("How long would you like you password to be?")
  console.log(passLength)
  var includeSpecial = confirm("Would you like to include special characters?");
  if (includeSpecial) {
    var all = nums + specialChars + letters + upperLetters;

  } else {
    var all = nums + letters + upperLetters;
  }

  var allLength = all.length;

  for (var i = 0; i < passLength; i++) {
    password += all.charAt(Math.floor(Math.random() * allLength))
  }

  var passwordText = document.querySelector("#password");



  generateBtn.textContent = 'Password Generated'
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
