/*
  L'objectif de cet exercice est d'afficher les 3 lignes de 5 caractères
  suivantes :
  -----
  -----
  -----
*/

/*

  Aide :
  Vous aurez besoin de créer une boucle dans une boucle et d'utiliser '\n'
  pour déclencher des retours à la ligne
*/

const generateString = (height, width) => {
  let str = "";
  let hyphen = "-";
  let atLine = "\n";

  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      str += hyphen;
    }
    {
      str += atLine;
    }
  }

  return str;
};

const height = 5;
const width = 5;
console.log(generateString(height, width));
