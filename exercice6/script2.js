// etape 1

randomDate = "30/02/2001";

function maxDaysinMonth(date) {
  let day = parseInt(date[0] + date[1]);
  let month = parseInt(date[3] + date[4]);
  if (month == 4 || month == 6 || month == 9 || (month == 11 && day > 30)) {
    return false;
  } else if (month == 2 && day > 28) {
    return false;
  } else {
    return true;
  }
}

function isValidDate(para) {
  arr = para.split("/");
  day = arr[0];
  month = arr[1];
  year = arr[2];
  if (
    day >= 1 &&
    day <= 31 &&
    month >= 1 &&
    month <= 12 &&
    year >= 999 &&
    year <= 9999
  ) {
    return true;
  }
  return false;
}

console.log(isValidDate(randomDate));

function isPalindrome(date) {
  valid = false;
  if (
    parseInt(date[0]) == parseInt(date[9]) &&
    parseInt(date[1]) == parseInt(date[8]) &&
    parseInt(date[3]) == parseInt(date[7]) &&
    parseInt(date[4]) == parseInt(date[6]) &&
    isValidDate(date) == true
  ) {
    valid = true;
  }
  return valid;
}

console.log(isPalindrome(randomDate));

const getNextPalindromes = (x) => {
  let date2 = "30/02/1988";
  date2 = date2.split("/");
  date2 = date2.map((i) => Number(i));
  console.log(typeof date2, date2);
  let result = [];
  while (result.length < x) {
    date2[0] += 1;
    if (date2[0] > 31) {
      date2[0] = 1;
      date2[1] += 1;
      if (date2[1] > 12) {
        date2[1] = 1;
        date2[2] += 1;
      }
    }
    if (
      isPalindrome(date2.toString().replace(",", "/").replace(",", "/")) ===
        true &&
      isValidDate(date2.toString().replace(",", "/").replace(",", "/")) === true
    ) {
      result.push(date2.toString().replace(",", "/").replace(",", "/"));
    }
  }
  return result;
};
console.log(getNextPalindromes(4));
