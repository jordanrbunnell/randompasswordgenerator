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
  wild = "☝☥☦☙☆⚉☜☁☂☄☞♲☬☤☍⚾♨★☸⚔✍⌚✈☣♽⚜☠🦁☢☘"
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  punctuationInput = document.getElementById("punctuation"),
  numbersInput = document.getElementById("numbers"),
  lengthInput = document.getElementById("length"),
  passwordFeild = document.getElementById("password"),
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy"),
  alertbox = document.getElementById('alert'),
  wildInput = document.getElementById("wild"),
  bigfoot = document.getElementById("bigfoot")
  bft = document.getElementById("bf")
  strength = document.getElementById('complexity');
  
console.log(alertbox)
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

    if (plength === 128) {
      bigfoot.checked = true;
    }
    else {
      bigfoot.checked = false;
    }
    if (wildInput.checked && numbersInput.checked && punctuationInput.checked && uppercaseInput.checked && lowercaseInput.checked && bigfoot.checked) {
      alert("With a Password this secure... You must be protecting the secret of BigFoot!?")
      img = document.createElement('img'); 
      img.src = "bigfoot.gif"; 
      document.getElementById('bf').appendChild(img);
    }
   
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
      // bft.innerHTML = "<img src = "bigfoot.gif">";
      
        
        
     
	  //Writes string "userPassword" to "password" Element ID in html

      passwordFeild.innerHTML = userPassword;
    }
    checkPwdStrength();
  };
   
  console.log(bft)

// // Add event listener to generate button


// Script credit: https://gist.github.com/madan712/6559819
	
	
	function getPwdScore(strPassword) {
		// Reset combination count
		var nScore = 0;
	
		// Password length
		// -- Less than 4 characters
		if (strPassword.length < 5) {
			nScore += 5;
		}
		// -- 5 to 7 characters
		else if (strPassword.length > 4 && strPassword.length < 8) {
			nScore += 10;
		}
		// -- 8 or more
		else if (strPassword.length > 7) {
			nScore += 25;
		}
	
		// Letters
		var nUpperCount = countContain(strPassword, uppercase);
		var nLowerCount = countContain(strPassword, lowercase);
		var nLowerUpperCount = nUpperCount + nLowerCount;
		// -- Letters are all lower case
		if (nUpperCount == 0 && nLowerCount != 0) {
			nScore += 10;
		}
		// -- Letters are upper case and lower case
		else if (nUpperCount != 0 && nLowerCount != 0) {
			nScore += 20;
		}
	
		// Numbers
		var nNumberCount = countContain(strPassword, numbers);
		// -- 1 number
		if (nNumberCount == 1) {
			nScore += 10;
		}
		// -- 3 or more numbers
		if (nNumberCount >= 3) {
			nScore += 20;
    }
    if (nNumberCount >= 10) {
			nScore += 500;
		}
	
		// Characters
		var nCharacterCount = countContain(strPassword, punctuation);
		// -- 1 character
		if (nCharacterCount == 1) {
			nScore += 10;
		}
		// -- More than 1 character
		if (nCharacterCount > 1) {
			nScore += 25;
		}
	
		// Bonus
		// -- Letters and numbers
		if (nNumberCount != 0 && nLowerUpperCount != 0) {
			nScore += 2;
		}
		// -- Letters, numbers, and characters
		if (nNumberCount != 0 && nLowerUpperCount != 0 && nCharacterCount != 0) {
			nScore += 3;
		}
		// -- Mixed case letters, numbers, and characters
		if (nNumberCount != 0 && nUpperCount != 0 && nLowerCount != 0
				&& nCharacterCount != 0) {
			nScore += 5;
		}
	
		return nScore;
	}
	
	// Checks a string for a list of characters
	function countContain(strPassword, strCheck) {
		// Declare variables
		var nCount = 0;
	
		for (i = 0; i < strPassword.length; i++) {
			if (strCheck.indexOf(strPassword.charAt(i)) > -1) {
				nCount++;
			}
		}
	
		return nCount;
	}
	function checkPwdStrength() {

		
		if (plength == 0) {
			scorebar.style.backgroundPosition = '0px 0px';
			comp = "Password Strength";
		}
		else {
			scr = parseInt(getPwdScore(userPassword));
	
			if (wildInput.checked && numbersInput.checked && punctuationInput.checked && uppercaseInput.checked && lowercaseInput.checked && bigfoot.checked) {
				scorebar.style.backgroundPosition = '0px -30px';
				comp = "EPIC";
			}
     		 else if(scr >= 100) {
				scorebar.style.backgroundPosition = '0px -30px';
				comp = "Feel the Power of The Dark Side";
			}
			else if(scr >= 90) {
				scorebar.style.backgroundPosition = '0px -30px';
				comp = "Very Strong";
			}
			else if(scr >= 70) {
				scorebar.style.backgroundPosition = '0px -24px';
				comp = "Strong";
			}
			else if(scr >= 50) {
				scorebar.style.backgroundPosition = '0px -18px';
				comp = "Good";
			}
			else if(scr >= 30) {
				scorebar.style.backgroundPosition = '0px -12px';
				comp = "Weak";
			}
			else if(scr >= 0) {
				scorebar.style.backgroundPosition = '0px -6px';
				comp = "Very Weak";
			}
		}
		strength.innerHTML = comp;

		return false;
	}

	generateButton.addEventListener("click", generate);
