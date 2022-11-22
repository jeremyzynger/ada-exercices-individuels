let quote1 = "All engines running/nLiftoff! 🚀";
let quote2 = "Ignition sequence start";

for (let i = 12; i >= -1; i--) {
  if (i === 8) {
    console.log(quote2);
  } else if (i === 7) {
  } else if (i === -1) {
    console.log(quote1);
  } else {
    console.log(i);
  }
}
