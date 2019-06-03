$(document).ready(function(){
  $("#add").click(function() {
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result= add(number1,number2);
    alert(result);
  });
  $("#subtract").click(function() {
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result= subtract(number1,number2);
    alert(result);
  });
  $("#multiply").click(function() {
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result= multiply(number1,number2);
    alert(result);
  });
  $("#divide").click(function() {
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result= divide(number1,number2);
    alert(result);
  });
});


var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};
