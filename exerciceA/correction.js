// ETAPE 1
// client start duree prix
let trip = "Perdita 8 10 8";
let trip1 = "Jay 18 6 4";

// const str = 'The quick brown fox jumps over the lazy dog.';
// const words = str.split(' ');
// for (i in words) {
//     console.log(i, words[i]);
// }
// déclare function parseTrip (paramTrip)
function parseTrip(str) {
  // décomposer la string en mot séparé par espace
  const arr1 = str.split(" ");
  // structurer la donnée en objet
  const objet = {
    start: arr1[1],
    duration: arr1[2],
    client: arr1[0],
    prix: arr1[3],
  };
  // retourner l'object
  return objet;
}
//console.log(parseTrip(trip));

// proposition parseTripFleche
const parseTripBis = (str) => {
  const arr1 = str.split(" ");
  const objet = {
    client: arr1[0],
    start: arr1[1],
    duration: arr1[2],
    prix: arr1[3],
  };
  return objet;
};

// ETAPE 2
let trips = ["Roger 0 5 10", "Pongo 3 7 14", "Perdita 8 10 8", "Anita 16 3 7"];

//Créer une fonction parsetrips(arrTrips)
function parsetrips(arrTrips) {
  // mais comme cette fonction prend en param un tableau
  let result = [];
  // alors je boucle pour parcourir le tableau
  for (let i = 0; i < arrTrips.length; i++) {
    // a chaque tour de boucle j'appelle parseTrip pour
    // formater le voyage sur lequel je boucle en object
    // je remplis mon tableau de resultat avec les object
    result.push(parseTrip(arrTrips[i]));
  }
  // enfin je retroune le tableau d'objets
  return result;
}
//console.log(parsetrips(trips))
//Appeler la function parsetrip dedans
//Prendre en compte une journée complète
//Retourner un tableau sous le même format que précédemment

const parsetripsBis = (arrTrips) => {
  // mais comme cette fonction prend en param un tableau
  let result = [];
  // alors je boucle pour parcourir le tableau
  for (let i = 0; i < arrTrips.length; i++) {
    // a chaque tour de boucle j'appelle parseTrip pour
    // formater le voyage sur lequel je boucle en object
    // je remplis mon tableau de resultat avec les object
    result.push(parseTrip(arrTrips[i]));
  }
  // enfin je retroune le tableau d'objets
  return result;
};

// ETAPE 3
// creer une fonction getTripsPrice(para[])
const getTripsPrice = (tabpoulet) => {
  let total = 0;
  for (let i = 0; i < tabpoulet.length; i++) {
    console.log(tabpoulet[i]);
    total += parseInt(tabpoulet[i].prix);
  }
  return total;
};
// const voyages = parsetrips(trips)
// console.log(getTripsPrice(voyages))
console.log(getTripsPrice(parsetrips(trips)));
// et qui va nous retourner la somme des prix des voyages
