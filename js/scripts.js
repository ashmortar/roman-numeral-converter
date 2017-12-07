//back end logic
 var numeralConverter = function(inputNumber) {
   var breakNumbers = [1000, 500, 100, 50, 10, 5, 1];
   var numberSymbols = ["m", "d", "c", "l", "x", "v", "i"];
   var result = [];
   remainder = 0;
   //this checks if the number can be converted to roman numerals
   if ((inputNumber <= 0) || (inputNumber >= 4000)) {
     return "This cannot be converted to roman numerals, sorry";
   }
   //this takes input number, makes it into a string, splits it into an array, reverses array and converts back to numbers
   var string = ("" + inputNumber).split("");
   string.reverse();
   var userInput = string.map(Number);
//below is the code for ones digits;
   //this returns values for 9 and 4 correctly
   if ((userInput[0] === 4) || (userInput[0] === 9)) {
     for (var i = 0; i < breakNumbers.length; i++) {
       if ((userInput[0] + 1) === breakNumbers[i]) {
        result[0] = numberSymbols[i];
        var remainder = breakNumbers[i] - userInput[0];
       }
       for (var j = 0; j < breakNumbers.length; j++) {
         if (remainder === breakNumbers[j]) {
           result[0] = numberSymbols[j] + result[0];
           remainder = remainder - 1;
         }
       }
     }
   } else {

     //this returns values for other single digits

     for (var k = 0; k < breakNumbers.length; k ++) {
       if (breakNumbers[k] === userInput[0]){
         result[0] = numberSymbols[k];
         break;
      }else if (breakNumbers[k] < userInput[0]) {
         result[0] = numberSymbols[k];
         remainder = userInput[0] - breakNumbers[k];
         userInput[0] = 0;
       }
       for (var l = 0; l < breakNumbers.length; l ++) {
         if (breakNumbers[l] <= remainder) {
           result[0] = result[0] + numberSymbols[l];
           var remainderTwo = remainder - breakNumbers[l];
           remainder = 0;
         }
         for (var m = 0; m <breakNumbers.length; m ++) {
           if (breakNumbers[m] <= remainderTwo) {
             result[0] = result[0] + numberSymbols[m];
             var remainderThree = remainderTwo - breakNumbers[m];
             remainderTwo = 0;
           }
           for (var n = 0; n < breakNumbers.length; n ++) {
             if (breakNumbers[n] <= remainderThree) {
               result[0] = result[0] + numberSymbols[n];
               var remainderFour = remainderThree - breakNumbers[n];
               remainderThree = 0;
             }
           }
         }
       }
     }
   }
//below is the code for tens digits;
  //this returns values for 90 and 40 correctly
  userInput[1] = userInput[1] * 10;
  if ((userInput[1] === 40) || (userInput[1] === 90)) {
     for (var i = 0; i < breakNumbers.length; i++) {
       if ((userInput[1] + 10) === breakNumbers[i]) {
        result[1] = numberSymbols[i];
        var remainder = breakNumbers[i] - userInput[1];
       }
       for (var j = 0; j < breakNumbers.length; j++) {
         if (remainder === breakNumbers[j]) {
           result[1] = numberSymbols[j] + result[1];
           remainder = remainder - 1;
         }
       }
     }
   } else {

     //this returns values for other tens digits

     for (var k = 0; k < breakNumbers.length; k ++) {
       if (breakNumbers[k] === userInput[1]){
         result[1] = numberSymbols[k];
         break;
      }else if (breakNumbers[k] < userInput[1]) {
         result[1] = numberSymbols[k];
         remainder = userInput[1] - breakNumbers[k];
         userInput[1] = 0;
       }
       for (var l = 0; l < breakNumbers.length; l ++) {
         if (breakNumbers[l] <= remainder) {
           result[1] = result[1] + numberSymbols[l];
           var remainderTwo = remainder - breakNumbers[l];
           remainder = 0;
         }
         for (var m = 0; m <breakNumbers.length; m ++) {
           if (breakNumbers[m] <= remainderTwo) {
             result[1] = result[1] + numberSymbols[m];
             var remainderThree = remainderTwo - breakNumbers[m];
             remainderTwo = 0;
           }
           for (var n = 0; n < breakNumbers.length; n ++) {
             if (breakNumbers[n] <= remainderThree) {
               result[1] = result[1] + numberSymbols[n];
               var remainderFour = remainderThree - breakNumbers[n];
               remainderThree = 0;
             }
           }
         }
       }
     }
   }
//below is the code for hundreds digits;
 //this returns values for 900 and 400 correctly
 userInput[2] = userInput[2] * 100;
 if ((userInput[2] === 400) || (userInput[2] === 900)) {
    for (var i = 0; i < breakNumbers.length; i++) {
      if ((userInput[2] + 100) === breakNumbers[i]) {
       result[2] = numberSymbols[i];
       var remainder = breakNumbers[i] - userInput[2];
      }
      for (var j = 0; j < breakNumbers.length; j++) {
        if (remainder === breakNumbers[j]) {
          result[2] = numberSymbols[j] + result[2];
          remainder = remainder - 1;
        }
      }
    }
  } else {

    //this returns values for other hundreds digits

    for (var k = 0; k < breakNumbers.length; k ++) {
      if (breakNumbers[k] === userInput[2]){
        result[2] = numberSymbols[k];
        break;
     }else if (breakNumbers[k] < userInput[2]) {
        result[2] = numberSymbols[k];
        remainder = userInput[2] - breakNumbers[k];
        userInput[2] = 0;
      }
      for (var l = 0; l < breakNumbers.length; l ++) {
        if (breakNumbers[l] <= remainder) {
          result[2] = result[2] + numberSymbols[l];
          var remainderTwo = remainder - breakNumbers[l];
          remainder = 0;
        }
        for (var m = 0; m <breakNumbers.length; m ++) {
          if (breakNumbers[m] <= remainderTwo) {
            result[2] = result[2] + numberSymbols[m];
            var remainderThree = remainderTwo - breakNumbers[m];
            remainderTwo = 0;
          }
          for (var n = 0; n < breakNumbers.length; n ++) {
            if (breakNumbers[n] <= remainderThree) {
              result[2] = result[2] + numberSymbols[n];
              var remainderFour = remainderThree - breakNumbers[n];
              remainderThree = 0;
            }
          }
        }
      }
    }
  }
//below is the code for thousands digits;
 userInput[3] = userInput[3] * 1000;
    for (var k = 0; k < breakNumbers.length; k ++) {
      if (breakNumbers[k] === userInput[3]){
        result[3] = numberSymbols[k];
        break;
     }else if (breakNumbers[k] < userInput[3]) {
        result[3] = numberSymbols[k];
        remainder = userInput[3] - breakNumbers[k];
        userInput[3] = 0;
      }
      for (var l = 0; l < breakNumbers.length; l ++) {
        if (breakNumbers[l] <= remainder) {
          result[3] = result[3] + numberSymbols[l];
          var remainderTwo = remainder - breakNumbers[l];
          remainder = 0;
        }
        for (var m = 0; m <breakNumbers.length; m ++) {
          if (breakNumbers[m] <= remainderTwo) {
            result[3] = result[3] + numberSymbols[m];
            var remainderThree = remainderTwo - breakNumbers[m];
            remainderTwo = 0;
          }
          for (var n = 0; n < breakNumbers.length; n ++) {
            if (breakNumbers[n] <= remainderThree) {
              result[3] = result[3] + numberSymbols[n];
              var remainderFour = remainderThree - breakNumbers[n];
              remainderThree = 0;
            }
          }
        }
      }
    }

   result.reverse();
   var result = result.join('');
   return result;
 };














//ui logic

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#inputNumber").val());
    var output = numeralConverter(inputNumber);
    $(".result").text(output);
  });
});
