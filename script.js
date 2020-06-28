// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChars = "!@#$%^&*()";
// console.log(symbols);
var letters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters="abcdefghijklmnopqrstuvwxyz".toUpperCase();
// console.log(letters);
// console.log(upperCaseLetters);
var numbers = "0123456789";
// console.log(numbers);



function generatePasswordOptions(){
  var charLength= parseInt(prompt("How many characters would you like your password?"));
  // console.log(charLength);
  if (isNaN(charLength)===true || charLength<8 || charLength>128){
    alert("please enter a number between 8 and 128");
    return;
  }
  var includeSpecialChars = confirm("Would you like to include any special characters?");
  //console.log(specialChars);
  var includeUpperCase = confirm("would you like to include any upper case letters?")
  //console.log(includeUpperCase);
  var includeLowerCase = confirm("would you like to include any lower case letters?")
  // console.log(includeLowerCase);
  var includeNumbers= confirm("Would you like to include numbers?");
  // console.log(includeNumbers);
  if (specialChars===false && includeUpperCase ===false && includeLowerCase===false && includeNumbers===false){
    alert("Please provide a character type");
    return;
  }
var options = {
  length: charLength,
  hasSpecialChars: includeSpecialChars,
  hasLowerCase: includeLowerCase,
  hasUpperCase: includeUpperCase,
  hasNumbers: includeNumbers,
}
// console.log(options);
return options;
}
function generatePassword(){
  var passwordOptions = generatePasswordOptions();
  var passwordString = "";
  var passwordArray = [];

    if (passwordOptions.hasSpecialChars){
      passwordString= passwordString + specialChars;
      // console.log(passwordString);
    } 
    if (passwordOptions.hasLowerCase){
      passwordString= passwordString + letters;
      // console.log(passwordString);
    }
    if (passwordOptions.hasUpperCase){
      passwordString= passwordString + upperCaseLetters;
      // console.log(passwordString);
    }
    if (passwordOptions.hasNumbers){
      passwordString= passwordString + numbers;
      // console.log(passwordString);
    }
    var passwordStringArray = passwordString.split("");
    for (var i=0; i<passwordOptions.length; i++){
      var randomIndex = Math.floor(Math.random()* passwordStringArray.length);
      passwordArray.push(passwordStringArray[randomIndex]);
      // console.log(randomIndex);
    }
//     console.log(passwordArray);
// console.log(passwordString);
// console.log(passwordOptions.length);
return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

