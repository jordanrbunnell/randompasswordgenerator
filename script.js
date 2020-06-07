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
  alertbox = document.getElementById('alert'),
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

    plength = Number(lengthInput.value);
    for (let i = 0; i < plength; i++) {
      userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length)
      );
    }
    console.log(plength)
    console.log(userPassword)

    
    if (plength > 128 || plength < 1) {
      alertbox.innerHTML = "Password must be between 8 and 128 characters"
      
    } 
    else if (userPassword == "") {
      
      // alert ("Please Select Character Type Before Generating");
      alertbox.innerHTML = "Please Choose a Character Type"

     
    } 
    else {
      alertbox.innerHTML = ""
      

      passwordFeild.innerHTML = userPassword;
    }
    
  }
  generateButton.addEventListener("click", generate);
   
  

// Write password to the #password input
function writePassword() {
  var password = userpassword("");
  var passwordText = document.querySelector("#generate");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("generate", writePassword);
