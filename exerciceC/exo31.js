const generateString = (num) => {
  let str = "";
  let hyphen = "-";

  // Début de votre code
  str = hyphen.repeat(num);
  // Fin de votre code

  return str;
};

console.log(generateString(1)); // Doit afficher `-`
console.log(generateString(2)); // Doit afficher `--`
console.log(generateString(4)); // Doit afficher `----`
console.log(generateString(19)); // Doit afficher `-------------------`
