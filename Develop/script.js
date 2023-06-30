// Assignment Code
var generateBtn = document.querySelector("#generate");

// pw generation indexs
let number = ['0','1','2','3','4','5','6','7','8','9'];
let specialChar = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']'];
let alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var pwBuilder = [];
var finishedPW = "";
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Write password to the #password input
  function generatePassword() {
    var pwLength = prompt("How long? Choose between 8 and 128")
      if (pwLength >=8 && pwLength <=128){
        //pw specs
        numbs = confirm("Would you like numbers?");
        lower = confirm("Do you want lower case letters?");
        upper = confirm("How about upper case letters?");
        signs = confirm("want those weird symbols");
      } else {
      confirm("Please choose between 8 and 128 & press generate again");
        }
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  //pw building
  if (numbs){
    pwBuilder = pwBuilder.concat(numbs);
  }
  if (lower){
    pwBuilder = pwBuilder.concat(lower);
  }  
  if (upper){ 
    pwBuilder = pwBuilder.concat(upper);
  }
  if(signs){
    pwBuilder = pwBuilder.concat(signs);
  }
  
  
  for (var i = 0; i < length; i++){

    finishedPW = finishedPW + pwBuilder[Math.floor(Math.random() + pwBuilder.length)];
  }
  return finishedPW;
  }
  
 var writePassword = function(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
