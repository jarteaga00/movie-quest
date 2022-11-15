// Variable Here
var generateBtn = document.querySelector("#generate");
var passwordBase = "";
var numberBase = "0123456789";
var specialBase = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var uppercaseBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseBase = uppercaseBase.toLowerCase();
var generateBtn = document.querySelector("#generate");
var temp = [];

// Function to start generating password
function generatePassword() {
  console.log("Click the button");
// Password questions requirment  
// Question 1: How long is the password?
  var length = prompt(
    "How many characters will your password be? Enter a number between 8 and 128"
  );
  console.log(length);
  // Double checks of the password does requires the right amount of charaters
  if (length < 8 || length > 128) {
  // Will send a message reminding users password must be between 8 adn 128
    alert("Your password must be between 8 and 128");
    return generatePassword();
  }
// Question 2: "Do you want lowercase included?"
  var wantLower = confirm("Do you want lowercase included?");
  console.log(wantLower);
  if (wantLower == true) {
    for (var i = 0; i < lowercaseBase.length; i++) {
      temp.push(lowercaseBase[i]);
    }
  }
  // Question 3: "Do you want uppercase included?"
  var wantUpper = confirm("Do you want uppercase included?");
  console.log(wantUpper);
  if (wantUpper == true) {
    for (var i = 0; i < uppercaseBase.length; i++) {
      temp.push(uppercaseBase[i]);
    }
  }
  // Question 4: "Do you want special characters included?"
  var wantSpecial = confirm("Do you want special charaters included?");
  console.log(wantSpecial);
  if (wantSpecial == true) {
    for (var i = 0; i < specialBase.length; i++) {
      temp.push(specialBase[i]);
    }
  }
// Question 5: "Do you want numbers included?"
  var wantNumber = confirm("Do you want numbers included?");
  console.log(wantNumber);
  if (wantNumber == true) {
    for (var i = 0; i < numberBase.length; i++) {
      temp.push(numberBase[i]);
    }
  }

  console.log(temp);

  for (var i = 0; i < length; i++) {
    passwordBase = passwordBase + temp[Math.floor(Math.random() * temp.length)];
  }

  return passwordBase;
}
// Function to begin the password generate process
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event Listener added
generateBtn.addEventListener("click", writePassword);
