//back end logic
 var numeralConverter = function(inputNumber) {
   var breakNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var numberSymbols = ["m", "mc", "d", "cd", "c", "xc", "l", "x", "ix", "v", "iv", "i"];
   var result = "";

   for (var i = 0; i < 20; i ++) {
     for (var j = 0; j < breakNumbers.length; j++) {
       if (inputNumber)
     }
   }

}






//ui logic

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#inputNumber").val());
    var output = numeralConverter(inputNumber);
    $(".result").text(output);
  });
});
