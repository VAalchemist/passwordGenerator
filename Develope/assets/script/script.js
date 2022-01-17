// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// function to generate a random numeric value
var randomNumber = function() {
    var value = Math.floor(Math.random() * );

    return value;
};

// Write password to the #password input
function writePassword() {
    var password = generatePassword("#generate");
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);