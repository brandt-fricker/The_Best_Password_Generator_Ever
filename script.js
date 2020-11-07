// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Write password to the #password input
function writePassword() {

    var goodInfo = alert("This password generator can generate a password of  both lower case and upper case letters, numbers and special characters when prompted")
  //  var password = generatePassword();
  var password = "";
  var nums = '123456789012345678901234';

  var specialChars =  "!'@#$^&%*()+=-[]/{}|:<>?,.";
  
  var letters = 'abcdefghijklmnopqrstuvwxyz';

  var upperLetters = letters.toUpperCase();

  var passLength = prompt("Enter a number for how long you would like your password to be. It is recommended that the length be no less than 8 and no more than 128")
  
  while(passLength<8 || passLength>128 || (passLength%2!==1 && passLength%2!==0) ){
    var checker= prompt("Quit being cheeky and pick a number between 8 and 128")
    if(checker>=8 && checker<=128){
      passLength = checker;
      break;
    }
  }
  
  var all='';
var includeLowers=confirm("Would you like to include lower case letters? \nSelect Ok to enable lower case letters\nSelect cancel to continue without lower case letters");

 var includeUppers=confirm("Would you like to include upper case letters? \nSelect Ok to enable upper case letters\nSelect cancel to continue without upper case letters");

var includeNumbers=confirm("Would you like to include numbers? \nSelect Ok to enable numbers\nSelect cancel to continue without numbers");

  var includeSpecial = confirm("Would you like to include special characters? \nSelect Ok to enable special characters\nSelect cancel to continue without special characters");

if(includeLowers){
  all += letters;
}if(includeUppers){
  all+= upperLetters
}if(includeNumbers){
  all += nums
}if(includeSpecial){
  all += specialChars
}else{
  alert("Looks like you don't really need a password!")
}

  var allLength = all.length;

  for (var i = 0; i < passLength; i++) {
    password += all.charAt(Math.floor(Math.random() * allLength))
}
console.log(password)
  
  var passwordText = document.querySelector("#password");

  generateBtn.textContent = 'Password Generated'
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
