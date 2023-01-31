let totalAllumettes = 50;
let isPlaying = 1;

function askPlayer(isPlaying) {
  let allumettes = parseInt(prompt(`player ${isPlaying} cb?`));
  substract(allumettes);
}

function substract(n) {
  if (n != null && n > 0 && n <= 6) {
    totalAllumettes -= n;
    if (totalAllumettes >= 0) {
      document.getElementById("result").innerHTML = alert(totalAllumettes);
    }
    return totalAllumettes;
  }
}
function winCondition() {
  if (totalAllumettes <= 0) {
    console.log(`Bravo joueur ${isPlaying}`);
    document.getElementById("result").innerHTML = `Bravo joueur ${isPlaying}`;
  }
}

function whoIsPlaying() {
  if (isPlaying === 1) {
    askPlayer(isPlaying);
    isPlaying = 2;
  } else if (isPlaying === 2) {
    askPlayer(isPlaying);
    isPlaying = 3;
  } else if (isPlaying === 3) {
    askPlayer(isPlaying);
    isPlaying = 1;
  }
}

function gamePlay() {
  while (totalAllumettes > 0) {
    whoIsPlaying();
    winCondition();
  }
}
gamePlay();
