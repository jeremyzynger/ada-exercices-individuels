function getNumber() {
  givenNumber = Number(prompt("entre un nombre!"));
  console.log(givenNumber);
  return givenNumber;
}

function didIwin() {
  if (givenNumber === 22) {
    winner = true;
    console.log(winner);
  } else {
    winner = false;
    console.log(winner);
  }
}

function gamePlay() {
  getNumber();
  didIwin();
  while (winner != true) {
    getNumber();
    didIwin();
  }
}

gamePlay();
document.getElementById("jeu").innerHTML = givenNumber;
