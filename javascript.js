/*1*/
function add7(number){
    return number + 7 ;
}

/*2*/
function multiply (a, b) {
    return a * b; 
}

/* 3*/
function capitalize(string) {
    if (typeof string !== "string" || string.length === 0) {
      return string; 
    }
  
    var firstupper = string.charAt(0).toUpperCase();
    var restlower = string.slice(1).toLowerCase();
  
    return firstChar + restOfString;
  }

/*4*/
function lastLetter(str) {
    return str.charAt(str.length - 1);
}
console.log(lastLetter("abcd"));