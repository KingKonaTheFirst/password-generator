// Assignment Code
var generateBtn = document.querySelector("#generate");

// pw generation indexs
let number = ['0','1','2','3','4','5','6','7','8','9'];
let specialChar = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']'];
let alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Write password to the #password input
  function writePassword() {
    var pwLength = prompt("How long? Choose between 8 and 128")
      if (pwLength >=8 && pwLength <=128){
        //pw specs
        numbs = confirm("Would you like numbers?");
        lower = confirm("Do you want lower case letters?");
        upper = confirm("How about upper case letters?");
        signs = confirm("want those weird symbols");

    }
  
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
