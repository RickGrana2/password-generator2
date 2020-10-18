var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar=["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "/", "?", "<", ">"]
var numbers=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



// var passLength = 10
// var useUpper = true
// var useLower = true
// var useNumbers = true
// var useSpec = true

//     function randomIndex(arr) {
//       return arr[Math.floor(Math.random() * arr.
//         length)]
//     }

//     function generatePassword() {
//         var selectedOption = []
//         var generatePassword = []
//         var guaranteed = []

//         if (useUpper) {
//            selectedOption = selectedOption.concat
//            (upperCasedCharacters)
//            guaranteed.push(randomIndex
//            (upperCasedCharacters))
//         }
//         if (useLower) {
//            selectedOption = selectedOption.concat
//            (lowerCasedCharacters)
//            guaranteed.push(randomIndex
//            (lowerCasedCharacters))
//         }
//         if (useUpper) {
//            selectedOption = selectedOption.concat
//            (upperCasedCharacters)
//            guaranteed.push(randomIndex
//            (upperCasedCharacters))
//         }
//         if (useUpper) {
//            selectedOption = selectedOption.concat
//            (upperCasedCharacters)
//            guaranteed.push(randomIndex
//            (upperCasedCharacters))
//         }

//         console.log(selectedOption)
//         console.log(guaranteed)

//         for(var i = 0; i < passLength; i ++){
//           var indexToReplace
//         }
//         return generatedPassword() 
//     }