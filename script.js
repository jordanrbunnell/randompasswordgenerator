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
  alertbox = document.getElementById('alert');
  

  function generate() {
    userPassword = "";
    passOptions = "";
    if (lowercaseInput.checked) {
      passOptions += lowercase;
    }
    if (uppercaseInput.checked) {
      passOptions += uppercase;
    }
    if (punctuationInput.checked) {
      passOptions += punctuation;
    }
    if (numbersInput.checked) {
      passOptions += numbers;
    }
// This ensures the input is a number, if it is Not then a NuN is returned
    plength = Number(lengthInput.value);
    // Begin For Loop
    for (let i = 0; i < plength; i++) {
      userPassword += passOptions.charAt(
        Math.floor(Math.random() * passOptions.length)
      );
    }
    notANumber = isNaN(plength);
    // Log the outputs
    console.log(passOptions);
    console.log(plength);
    console.log(userPassword);
    console.log(notANumber);

    
    // if (plength > 128 || plength < 1) {
    //   alertbox.innerHTML = "Password must be between 8 and 128 characters"
      
    // } 
    if (notANumber) {
      
      // alert ("Please Select Character Type Before Generating");
      alert("You must enter a number between 8 and 128");

    } 
    else if ((plength < 8) || (plength > 128)) {
      
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
    
  };
  generateButton.addEventListener("click", generate);
   
  

// Write password to the #password input
function writePassword() {
  var password = userpassword("");
  var passwordText = document.querySelector("#generate");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("generate", writePassword);
