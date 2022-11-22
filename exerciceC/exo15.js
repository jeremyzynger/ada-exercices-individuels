const email = "nonoler@eacteur.io";

function checkEmail(para) {
  let valid = false;
  // début de votre code
  for (let i = 0; i < para.length; i++) {
    if (para[i] === "@") {
      valid = true;
    }
  }
  return valid;
}
// fin de votre code
console.log(checkEmail(email));
