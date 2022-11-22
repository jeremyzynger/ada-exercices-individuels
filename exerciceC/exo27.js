function factorial(num) {
  counter = 1;
  for (let i = 1; i <= num; i++) {
    counter *= i;
  }
  return counter;
}
console.log(factorial(4));
