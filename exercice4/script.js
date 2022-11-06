const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function getLatinCharacterList(str) {
  let majStr = str.toUpperCase();
  return Array.from(majStr);
}

function translateLatinCharacter(charLatin) {
  let value = latinToMorse[charLatin];
  return value;
}
// translateLatinCharacter("a")
function encode(texte) {
  let tabChar = getLatinCharacterList(texte);
  let resultat = "";
  tabChar.forEach((element) => {
    resultat += " " + translateLatinCharacter(element);
  });
  console.log(resultat);
  return resultat;
}
encode("Bonjour");
