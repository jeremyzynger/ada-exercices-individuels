ingredients = [25, "Oeufs", "Sel", "Poivre", "Lardon", "Oingons", "Parmesan"];

console.log(
  `${ingredients.length} est le nombre d’ingrédients nécessaires pour la recette`
);
// document.getElementById(
//   "result"
// ).innerHTML = `${ingredients.length} est le nombre d’ingrédients nécessaires pour la recette`;

for (i of ingredients) {
  console.log(i);
  //   document.getElementById("liste1").innerHTML += i + " ";
}

for (i = 0; i < ingredients.length; i++) {
  console.log(`${i + 1}.  ${ingredients[i]}`);
  //   document.getElementById("liste2").innerHTML += `${i + 1}.  ${
  //     ingredients[i]
  //   } `;
}

ingredients.sort((a, b) => String(a).localeCompare(String(b)));

// document.getElementById("tri").innerHTML = ingredients;

console.log(ingredients);
