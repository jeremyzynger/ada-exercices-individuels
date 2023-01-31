let o = "o";
let hyphen = "-";
let atLine = "\n";
let verticalLine = "|";
let space = " ";
let line = "";
box = function (width, height) {
  let str = "";
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      line = o + hyphen.repeat(width - 2) + o;
    }
    str += line + atLine;
  }

  return str;
};

console.log(box(8, 5));
