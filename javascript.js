/*1*/
function add7(number){
    return number+7 ;
}

/*2*/
function multiply(multiplier_1, multiplier_2){
    return multiplier_1 * multiplier_2; 
}

/* 3*/
function capitalize(string) {
    if (typeof string !== "string" || string.length === 0) {
      return string; 
    }
    var firstChar = string.charAt(0).toUpperCase();
    var restOfString = string.slice(1).toLowerCase();
    return firstChar + restOfString;
  }

/*4*/
function lastLetter(str) {
    return str.charAt(str.length - 1);
}
console.log(lastLetter("abcd"));
