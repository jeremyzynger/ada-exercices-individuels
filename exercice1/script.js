function askName() {
  let userName = prompt("quel est votre nom");
  // toujours penser a controler les saisies des utilisateurs
  // Ici, je vais m'assurer d'avoir une réponse non-null.
  if (userName != null && userName != 0) {
    let presentation = " Bonjour " + userName;
    document.body.innerHTML += "<h1>" + presentation + "</h1>";
    document.getElementById("presentation").innerHTML = presentation;
    console.log(userName);
  }
}
askName();

// J'applique les mêmes procédés que précédemment.
function askBirthYear() {
  let year = prompt("Quel est votre année de naissance ?");
  if (year != null && year != 0) {
    let age = 2022 - year;
    let textAge = "Vous avez " + age + " ans";
    document.body.innerHTML += "<h1>" + textAge + "</h1>";
    document.getElementById("age").innerHTML = textAge;
  }
}
// J'appelle les fonctions que je définis.
askBirthYear();

//J'ai utilisé 2 methodes pour afficher mes resusltats de script JS a ma page HTML.
// 1 -- document.body.innerHTML +=
// 2 -- document.getElementById("").innerHTML =
