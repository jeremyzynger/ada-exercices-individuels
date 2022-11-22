a = "I love coding";

function reverseString(str) {
  let phrase = "";
  for (let i = str.length; i >= 0; i--) {
    // console.log(str[i]);
    phrase += str.charAt(i);
  }
  return phrase;
}
console.log(reverseString(a));
