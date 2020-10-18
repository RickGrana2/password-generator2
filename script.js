// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar=["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "/", "?", "<", ">"]
var numbers=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



var passLength = 10
var useUpper = true
var useLower = true
var useNumbers = true
var useSpec = true

    function randomIndex(arr) {
      return arr[Math.floor(Math.random() * arr.
        length)]
    }

    function generatePassword() {
        var selectedOption = []
        var generatePassword = []
        var guaranteed = []

        if (useUpper) {
           selectedOption = selectedOption.concat
           (upperCase)
           guaranteed.push(randomIndex
           (upperCase))
        }
        if (useLower) {
           selectedOption = selectedOption.concat
           (lowerCase)
           guaranteed.push(randomIndex
           (lowerCase))
        }
        if (useSpec) {
           selectedOption = selectedOption.concat
           (specialChar)
           guaranteed.push(randomIndex
           (specialChar))
        }
        if (useNumbers) {
           selectedOption = selectedOption.concat
           (numbers)
           guaranteed.push(randomIndex
           (numbers))
        }

        // console.log(selectedOption)
        // console.log(guaranteed)

        for(var i = 0; i < passLength; i ++){
          generatePassword.push(randomIndex(selectedOption))
        }
        for(var i = 0; i < guaranteed.length; i++){
        generatePassword[i] = guaranteed[i]
        }
        return generatePassword.join('')
    }
    console.log(generatePassword())

   
    
    
    
    //         for(var i = 0; i < passLength; i++){
    //             generatedPassword.push(randomIndex(selectedOption))
    //         }
    //         for(var i = 0; i < guaranteed.length; i++){
    //             generatedPassword[i] = guaranteed[i]
    //         }
    //         return generatedPassword.join('')
    //     }
    //     console.log(generatePassword())