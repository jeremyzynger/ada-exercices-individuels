let trip1 = "Perdita 8 10 8";
let trip2 = "Bollos 17 11 15";
function parseTrip(trip) {
  const arr1 = trip.split(" ");
  const objet = {
    client: arr1[0],
    start: parseInt(arr1[1]),
    duration: parseInt(arr1[2]),
    price: parseInt(arr1[3]),
  };
  return objet;
}
parseTrip(trip1);

console.log(parseTrip(trip1));
//etape 2

let tripsToParse = [
  "Roger 0 5 10",
  "Pongo 3 7 14",
  "Perdita 8 10 8",
  "Anita 16 3 7",
];

function parseTrip2(y) {
  // cette fonction transforme ma liste de voyage ( un tableau de string) en un tableau dobjet
  let objet2 = [];
  for (i in y) {
    objet2.push(parseTrip(y[i]));
  }
  return objet2;
}

console.log(parseTrip2(tripsToParse));

parseTrip2(tripsToParse);

//etape 3
function getTripsPrice(z) {
  let prix = 0;
  let objet3 = parseTrip2(z); //je transforme ma Liste de voyage en un tableau de voyage [objet]
  for (let i = 0; i < objet3.length; i++) {
    // pour chaque element de mon nouveau tableau
    prix += objet3[i].price; //je viens chercher la cle "price" de chaque objet "voyage", la transforme en integer et les additionne
  }
  return prix;
}
console.log(getTripsPrice(tripsToParse));

//etape 4

function checkCompatibility(tripA, tripB) {
  let objet4 = parseTrip(tripA);
  let objet5 = parseTrip(tripB);
  let startA = objet4.start;
  let durationA = objet4.duration;
  let arrivalA = startA + durationA;
  let startB = objet5.start;

  if (arrivalA > startB) {
    return false;
  } else {
    return true;
  }
}

console.log(checkCompatibility(trip1, trip2));

//etape 5
//créer un fonction findCompatibilities
function findCompatibilities(trips) {
  //créer un tableau vide pour que plutard on puisse stocker les resusltats
  let comparaison = [];
  // faire une 1 ere boucle pour pouvoir rentrer dans la fonction precedente en para2
  for (i in trips) {
    //console.log(trips[i]);
    // faire une 2 eme boucle pour pouvoir rentrer  dans la fonction precedente en para2
    for (j in trips) {
      //console.log(trips[j]);
      //comparer les données avec la fonctions checkCompatibility if return true push dans le tableau []
      if (checkCompatibility(trips[i], trips[j]) === true) {
        //console.log[trips[i]];
        // push sous le bon format
        comparaison.push([trips[i], trips[j]]);
      }
    }
  }
  return comparaison;
}
console.log(findCompatibilities(tripsToParse));

document.getElementById("plop").innerHTML = findCompatibilities(tripsToParse);
