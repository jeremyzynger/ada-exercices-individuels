
# 1. Parlez-vous le morse ? 🆘 -- Enoncé

Cet exercice vise à créer un encodeur et un décodeur de morse.
Le [morse](https://fr.wikipedia.org/wiki/Code_Morse_international) est un alphabet codé qui remplace les caractères par des impulsions représentées par des points (.) ou des tirets (-), produites par des signes, une lumière, un son ou un geste.
Ce codage de caractères assigne à chaque lettre, chiffre et signe de ponctuation une combinaison unique de signaux intermittents. Le code morse est considéré comme le précurseur des communications numériques.

Si vous le souhaitez, vous pouvez partir du template [template](https://github.com/adatechschool/exercices-individuels/raw/master/html_template.zip) HTML+CSS+JS pour cet exercice.

*Contraintes:* 

- Langage JS

## Étape 1

Dans un fichier JavaScript, commencez par écrire une fonction `getLatinCharacterList`. Cette fonction va prendre en paramètre du texte et retourner un tableau (i.e une liste, un array) contenant chaque caractère.

Testez la fonction avec la phrase (chaine de caractères) “Hello, world”, et assurez-vous qu’elle renvoie bien `["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]`

## Étape 2

Ajoutez le dictionnaire en annexe 1 au début de votre fichier js. Il s'agit d'un dictionnaire de correspondance entre les caractères des alphabets latin et morse.

Créez une fonction `translateLatinCharacter` qui prend en paramètre un caractère latin et renvoie sa correspondance en morse.

Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien `.-`.

## Étape 3

Toujours dans le même fichier js, créez une nouvelle fonction `encode` qui prend en paramètre du texte et qui utilise les deux fonctions précédentes pour transformer une phrase en caractère latin en son équivalent morse.

Attention: le dictionnaire de correspondance ne contient que des caractères majuscules.

## Étape 4

Vous trouverez en annexe 2 le dictionnaire de correspondance inversé (morse => latin).Ajoutez-le également au début de votre fichier js.

Créez les fonctions suivantes:
- `getMorseCharacterList`: comme pour la fonction précédente `getLatinCharacterList`, cette fonction prend en paramètre des caractères en morse et retourne un tableau (i.e une liste, un array) contenant chaque caractère.
- `translateMorseCharacter`, qui prend en paramètre un caractère morse et renvoie sa correspondance en caractère latin.

Utilisez ces deux fonctions pour créer une fonction `decode`, qui transforme le morse en caractères latins.

Pour cet exercice, la convention est que les lettres en morse sont séparées par un espace.
Les mots en caractères morses sont séparés par des “/” (slash).
Vous devrez trouver un moyen d'intégrer ces espaces, dans vos fonctions ou ... ailleurs :-)


## Étape **5**

Pour finir cet exercice, ouvrez votre fichier HTML pour créez une interface utilisateur qui s'affichera dans votre navigateur.

Utilisez des champs de saisie input (ou bien utilisez la fonction prompt()) et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.

Bonne chance et surtout, amusez-vous!

## Annexe 1

```jsx
const latinToMorse = {
  'A':'.-',
  'B':'-...',
  'C':'-.-.',
  'D':'-..',
  'E':'.',
  'F':'..-.',
  'G':'--.',
  'H':'....',
  'I':'..',
  'J':'.---',
  'K':'-.-',
  'L':'.-..',
  'M':'--',
  'N':'-.',
  'O':'---',
  'P':'.--.',
  'Q':'--.-',
  'R':'.-.',
  'S':'...',
  'T':'-',
  'U':'..-',
  'V':'...-',
  'W':'.--',
  'X':'-..-',
  'Y':'-.--',
  'Z':'--..'
}
```

## Annexe 2

```jsx
const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}
```
