const limit = 20;

for (let i = 0; i <= limit; i += 2) {
  console.log(i);
}

for (let i = 0; i <= limit; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
