/*
  L'objectif de cet exercice est d'afficher "o---o" sur plusieurs lignes.
  Exemple si `height` vaut 4 :
  o---o
  o---o
  o---o
  o---o
*/

// Début de votre code
const generateString = (num) => {
  let str = "";
  let hyphen = "-";
  let o = "o";
  let atLine = "\n";

  line = o + hyphen.repeat(3) + o + atLine;
  str = line.repeat(num);

  return str;
};
// Fin de votre code

const height = 4;
console.log(generateString(height));
