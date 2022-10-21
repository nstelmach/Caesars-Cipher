function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}

function rot13(str) {

let newStr = '';

for (let i = 0; i < str.length; i++) {
  if (isCharacterALetter(str[i])) {
    let charCode = str.charCodeAt(i)+13;
    if (charCode > 90) {
      charCode = charCode - 1 - 90 + 65;
    }
    newStr += String.fromCharCode(charCode); 
  }
  else {
    newStr += str[i];
  }
 }
return newStr;
}
