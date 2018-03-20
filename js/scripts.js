var sentence = prompt("Please write a sentence.");

var char1= sentence.charAt(0);
var char2= sentence.charAt(sentence.length-1);

var charUpper1=char1.toUpperCase();
var charUpper2=char2.toUpperCase();

var switch1 = charUpper1.subString(charUpper2);
var switch2 = charUpper2.subString(charUpper1);

var firstLast = function(letter1, letter2) {
  return (letter1 + " " + letter2);
}

alert(sentence.substring(char1, char2)); //not working from this point//
