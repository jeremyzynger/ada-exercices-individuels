const compare = (num2, num1) => {
  if (num1 < num2) {
    console.log("num2 est supérieur à num1");
  } else if (num1 > num2) {
    console.log("num2 est inférieur à num1");
  } else if (num1 === num2) {
    console.log("num1 et num2 sont équivalents");
  }
};
compare(8, 17);

const compare2 = (num1, num2) => {
  switch (true) {
    case num2 > num1:
      console.log("num2 is superior to num1");
      break;
    case num2 < num1:
      console.log("num2 is inferior to num1");
      break;
    case num2 === num1:
      console.log("num1 and num2 are equivalent");
      break;
    default:
      console.log("This is not a number");
  }
};
