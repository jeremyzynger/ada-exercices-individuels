const m = [
  "Evil",
  "Vile",
  "Cruel",
  "Trashy",
  "Despicable",
  "Embarrassing",
  "Disreputable",
  "Atrocious",
  "Twirling",
  "Orange",
  "Terrifying",
  "Awkward",
];
const d = [
  "Mustache",
  "Pickle",
  "Hood Ornament",
  "Raisin",
  "Recycling Bin",
  "Potato",
  "Tomato",
  "House Cat",
  "Teaspoon",
  "Laundry Basket",
];

let birthday = new Date(1985, 04, 30);

// console.log(m[birthday.getMonth()]);

// console.log(d[birthday.getDate() % 10]);

let result = m[birthday.getMonth()] + "," + d[birthday.getDate() % 10];

console.log(result);

function getVillainName(birthday) {
  return m[birthday.getMonth()] + "," + d[birthday.getDate() % 10];
}

document.getElementById("web").innerHTML = result;
