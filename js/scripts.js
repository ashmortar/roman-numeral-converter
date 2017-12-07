//back end logic
 var numeralConverter = function(userInput) {
   var breakNumbers = [1000, 500, 100, 50, 10, 5, 1];
   var numberSymbols = ["m", "d", "c", "l", "x", "v", "i"];
   var result = "";
   remainder = 0;
   //this checks if the number can be converted to roman numerals
   if ((userInput <= 0) || (userInput >= 4000)) {
     return "This cannot be converted to roman numerals, sorry";
   }
   //this returns the corresponding roman numeral if what is entered exactly matches one numeral

   //this returns values for 9 and 4 correctly
   if ((userInput === 4) || (userInput === 9)) {
     for (var i = 0; i < breakNumbers.length; i++) {
       if ((userInput + 1) === breakNumbers[i]) {
        result = numberSymbols[i];
        var remainder = breakNumbers[i] - userInput;
       }
       for (var j = 0; j < breakNumbers.length; j++) {
         if (remainder === breakNumbers[j]) {
           result = numberSymbols[j] + result;
           remainder = remainder - 1;
         }
       }
     }
   } else {

     //this returns values for other single digits

     for (var k = 0; k < breakNumbers.length; k ++) {
       if (breakNumbers[k] === userInput){
         result = numberSymbols[k];
         break;
      }else if (breakNumbers[k] < userInput) {
         result = numberSymbols[k];
         remainder = userInput - breakNumbers[k];
         userInput = 0;
       }
       for (var l = 0; l < breakNumbers.length; l ++) {
         if (breakNumbers[l] <= remainder) {
           result = result + numberSymbols[l];
           var remainderTwo = remainder - breakNumbers[l];
           remainder = 0;
         }
         for (var m = 0; m <breakNumbers.length; m ++) {
           if (breakNumbers[m] <= remainderTwo) {
             result = result + numberSymbols[m];
             var remainderThree = remainderTwo - breakNumbers[m];
             remainderTwo = 0;
           }
           for (var n = 0; n < breakNumbers.length; n ++) {
             if (breakNumbers[n] <= remainderThree) {
               result = result + numberSymbols[n];
               var remainderFour = remainderThree - breakNumbers[n];
               remainderThree = 0;
             }
           }
         }
       }
     }
   }
   return result;
 };














//ui logic

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#inputNumber").val());
    var output = numeralConverter(userInput);
    $(".result").text(output);
  });
});
