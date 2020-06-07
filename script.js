// Assignment Code

// Restricts input for the given textbox to the given inputFilter. Thanks to: https://jsfiddle.net/emkey08/zgvtjc51
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}


// Add filter to the "length" element to only allow for numerical values for character length <= 128.
setInputFilter(document.getElementById("length"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 128); });



var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  wild = "☝☥☦☙☆⚉☜☁☂☄☞♲☬☤☍⚾♨★☸⚔✍✈☣♽⚜☠☢☘"
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  punctuationInput = document.getElementById("punctuation"),
  numbersInput = document.getElementById("numbers"),
  lengthInput = document.getElementById("length"),
  passwordFeild = document.getElementById("password"),
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy"),
  alertbox = document.getElementById('alert'),
  wildInput = document.getElementById("wild");
//This section generates the string based on the user input of desired character sets.
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
    if (wildInput.checked) {
      passOptions += wild;
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

    
   
    if (notANumber) {
      
      alert("You must enter a number between 8 and 128");

    } 
    else if ((plength < 8) || (plength > 128)) {
      
      alertbox.innerHTML = "Password must be between 8 and 128 characters"

    } 
    else if (userPassword == "") {
      
      alertbox.innerHTML = "Please Choose a Character Type"

    } 
    
    else {
      // clears alert on successful run
      alertbox.innerHTML = ""
      
      //Writes string "userPassword" to "password" Element ID in html
      passwordFeild.innerHTML = userPassword;
    }
    
  };
   
  

// // Add event listener to generate button
generateButton.addEventListener("click", generate);
