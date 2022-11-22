const str = "le reacteur c'est super !";
let counter = 0; // stocke le nombre de e
// début de votre code
for (i in str) {
  //   console.log(str[i]);
  if (str[i] === "e") {
    counter += 1;
  }
}
// fin de votre code
console.log(counter);
