//back end logic
 var numeralConverter = function(userInput) {
   return userInput;



 };














//ui logic

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#inputNumber").val();
    var output = numeralConverter(userInput);
    $(".result").text(output);
  });
});
