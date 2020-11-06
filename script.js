// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Write password to the #password input
function writePassword() {

  var goodInfo = alert("This password generator can generate a password of  both lower case and upper case letters, numbers and special characters when prompted")
  
  var password = "";
  var nums = '123456789123456789';
  var specialChars = "!@#$^&%*()+=-[]/{}|:<>?,.";
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var upperLetters = letters.toUpperCase();

  var passLength = prompt("Enter a number for how long you would like your password to be. It is recommended that the length be no less than 8 and no more than 128")

  while (passLength < 8 || passLength > 128 || (passLength % 2 !== 1 && passLength % 2 !== 0)) {
    var checker = prompt("Quit being cheeky and pick a number between 8 and 128")
    if (checker >= 8 && checker <= 128) {
      passLength = checker;
      break;
    }
  }

  var all = '';
  var includeLowers = confirm("Would you like to include lower case letters? \nSelect Ok to enable lower case letters\nSelect cancel to continue without lower case letters");

  var includeUppers = confirm("Would you like to include upper case letters? \nSelect Ok to enable upper case letters\nSelect cancel to continue without upper case letters");

  var includeNumbers = confirm("Would you like to include numbers? \nSelect Ok to enable numbers\nSelect cancel to continue without numbers");

  var includeSpecial = confirm("Would you like to include special characters? \nSelect Ok to enable special characters\nSelect cancel to continue without special characters");
  if (includeSpecial && includeNumbers && includeLowers && includeUppers) {
    all = nums + letters + upperLetters + specialChars
  } else if (includeNumbers && includeLowers && includeSpecial) {
    all = nums + letters + specialChars;
  } else if (includeNumbers && includeUppers && includeSpecial) {
    all = nums + upperLetters + specialChars;
  } else if (includeNumbers && includeSpecial) {
    all = specialChars + nums;
  } else if (includeLowers && includeUppers && includeSpecial) {
    all = letters + upperLetters + specialChars
  } else if (includeLowers && includeSpecial) {
    all = letters + specialChars;
  } else if (includeUppers && includeSpecial) {
    all = upperLetters + specialChars;
  } else if (includeSpecial) {
    all = specialChars
  } else if (includeNumbers && includeLowers && includeUppers) {
    all = nums + letters + upperLetters
  } else if (includeNumbers && includeLowers) {
    all = nums + letters;
  } else if (includeNumbers && includeUppers) {
    all = nums + upperLetters;
  } else if (includeNumbers) {
    all = nums;
  } else if (includeUppers && includeLowers) {
    all = letters + upperLetters;
  } else if (includeUppers) {
    all = upperLetters
  } else if (includeLowers) {
    all = letters;
  } else {
    alert("Looks like you don't really need a password");
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
