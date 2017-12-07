//back end logic
 var numeralConverter = function(inputNumber) {
   var breakNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var numberSymbols = ["m", "mc", "d", "cd", "c", "xc", "l", "xl", "x", "ix", "v", "iv", "i"];
   var result = "";

   if ((inputNumber <= 0)  || (inputNumber > 4000)) {
     return false;
   }

   for (var i = 0; i < 20; i ++) {
     for (var j = 0; j < breakNumbers.length; j++) {
       debugger;
       if (inputNumber >= breakNumbers[j]) {
         result += numberSymbols[j];
         inputNumber = inputNumber - breakNumbers[j];
         if ((inputNumber - breakNumbers[j]) === 0){
           i = 18;
         }
        break;
       }
     }
   }
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
