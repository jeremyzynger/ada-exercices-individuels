function exOh(str) {
  let counter1 = 0;
  let counter2 = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      counter1 += 1;
    } else if (str[i] == "o") {
      counter2 += 1;
    }
  }

  return counter1 == counter2;
}
console.log(exOh("xoxo"));

//METHODE 1

// function exOh(str) {
//   let counter1 = 0;
//   let counter2 = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i] == "x") {
//       counter1 += 1;
//     } else if (str[i] == "o") {
//       counter2 += 1;
//     }
//   }
//   if (counter1 == counter2) {
//     return true } else { return false}
//   }
//   return [counter1, counter2, egalite];
// }
// console.log(exOh("xoxoxoxxxxxx"));

//METHODE 2

// function exOh(str) {
//   let counter1 = 0;
//   let counter2 = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i] == "x") {
//       counter1 += 1;
//     } else if (str[i] == "o") {
//       counter2 += 1;
//     }
//   }
//   if (counter1 == counter2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(exOh("xo"));
