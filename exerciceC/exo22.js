a = "thereactor";

function vowelCount(str) {
  counter = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "y"
    ) {
      //   console.log(i, str[i]);
      counter += 1;
    }
  }
  return counter;
}

console.log(vowelCount(a));
