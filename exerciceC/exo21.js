let a = "pooop";
// console.log(a[a.length - 1]);

function palindrome(str) {
  let str2 = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let len = str2.length;

  for (i = 0; i < len; i++) {
    if (str2[i] !== str2[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome(a));

// Tant que les caractères de chaque correspondances sont identiques, la boucle FOR continue de s'exécuter
