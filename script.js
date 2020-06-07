// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  punctuationInput = document.getElementById("punctuation"),
  numbersInput = document.getElementById("numbers"),
  lengthInput = document.getElementById("length"),
  passwordFeild = document.getElementById("password"),
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy"),
  plength,
  userPassword,
  passwordCharSet;

  function generate() {
    userPassword = "";
    passwordCharSet = "";
    if (lowercaseInput.checked) {
      passwordCharSet += lowercase;
    }
    if (uppercaseInput.checked) {
      passwordCharSet += uppercase;
    }
    if (punctuationInput.checked) {
      passwordCharSet += punctuation;
    }
    if (numbersInput.checked) {
      passwordCharSet += numbers;
    }

    plength = Number(10);
    for (let i = 0; i < plength; i++) {
      userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length)
      );
    }
    if (userPassword == "") {
      let alertbox = document.getElementById('alert');
      alertbox.innerHTML = "Please select an option before generating"
      alertbox.classList.add('fail');
      setTimeout(function(){ 
        alertbox.classList.remove('fail');
      }, 3000);
    } 
    if (userPassword == "") {
      let alertbox = document.getElementById('alert');
      alertbox.innerHTML = "Please select an option before generating"
      alertbox.classList.add('fail');
      setTimeout(function(){ 
        alertbox.classList.remove('fail');
      }, 3000);
    } 
    
    else {
      passwordFeild.innerHTML = userPassword;
    }
    
  }
  generateButton.addEventListener("click", generate);
   
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
