$(function(){
  $("#add").click(function(event) {
    event.preventDefault();
    var input1 = parseInt($("#number1").val());
    var input2 = parseInt($("#number2").val());
    var result = add(input1, input2);
    $("#output").text(result);
    $("#output").show();
  });
  $("#subtract").click(function(event) {
    event.preventDefault();
    var input1 = parseInt($("#number1").val());
    var input2 = parseInt($("#number2").val());
    var result = subtract(input1, input2);
    $("#output").text(result);
    $("#output").show();
  });
  $("#multiply").click(function(event) {
    event.preventDefault();
    var input1 = parseInt($("#number1").val());
    var input2 = parseInt($("#number2").val());
    var result = multiply(input1, input2);
    $("#output").text(result);
    $("#output").show();
  });
  $("#divide").click(function(event) {
    event.preventDefault();
    var input1 = parseInt($("#number1").val());
    var input2 = parseInt($("#number2").val());
    var result = divide(input1, input2);
    $("#output").text(result);
    $("#output").show();
  });
});


var add = function(input1,input2) {
  return input1+input2;
};
var subtract = function(input1,input2) {
  return input1-input2;
}
var multiply = function(input1,input2) {
  return input1*input2;
};
var divide = function(input1,input2) {
  return input1/input2;
};
