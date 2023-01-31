const generateString = (num) => {
  let str = "";

  let hyphen = "-";
  let last = "o";

  str = hyphen.repeat(num - 1) + last;

  return str;
};

console.log(generateString(1)); // Doit afficher `o`
console.log(generateString(2)); // Doit afficher `-o`
console.log(generateString(4)); // Doit afficher `---o`
console.log(generateString(19)); // Doit afficher `------------------o`
