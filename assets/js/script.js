// Assignment code here
let numOptions = [0,1,2,3,4,5,6,7,8,9];
let lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let spcLtr = ['~','!','@','#','$','%','^','&','*','(',')','-','+','/',':',';','<','>','=','?','|'];
let pwdResult = [];

//debugger;

/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
*/

let promptUserInput = function() {
  let numChar = prompt("How many characters do you want in your password?");
    if (numChar < 8 || numChar > 128) {
      alert("Please enter a number between 8 and 128");
      return false;
    }

  let numYes = confirm("Do you want numbers in your password?");
  let lowYes = confirm("Do you want lower case letters in your password?");
  let upYes = confirm("Do you want upper case letters in your password?");
  let spcYes = confirm("Do you want special characters in your password?");

  for (let i = 0; i < numChar; i++){

      if (numYes) {
        let numChar = numOptions[Math.floor(Math.random() * numOptions.length)];
        pwdResult.push(numChar);
      }
      else if (lowYes) {
        let numChar = lowCase[Math.floor(Math.random() * lowCase.length)];
        pwdResult.push(numChar);
      }
      else if (upYes) {
        let numChar = upCase[Math.floor(Math.random() * upCase.length)];
        pwdResult.push(numChar);
      }
      else if (spcYes) {
        let numChar = spcLtr[Math.floor(Math.random() * spcLtr.length)];
        pwdResult.push(numChar);
      }
  }
  alert("Your password is " + pwdResult.join(''));
}

generate.addEventListener("click", promptUserInput);
