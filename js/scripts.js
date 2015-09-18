// var bottlesOfBeer = function(number) {
//   if (number === 0) {
//     return lastRound(number);
//   } else {
//     return oneRound(number) + bottlesOfBeer(number-1);
//   }
// }
// I know this is broken for the last line. I just really wanted to use recursion. :[

var oneRound = function(number) {
  var nextNumber = number - 1;
  return number + " bottles of beer on the wall, " + number + " bottles of beer. Take one down and pass it around, " + nextNumber + " bottles of beer on the wall. ";
}

var lastRound = function(startNumber) {
  return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + startNumber + " bottles of beer on the wall."
}


$(document).ready(function() {
  $("form#bottles").submit(function(event) {
    var number = parseInt($("input#number").val());
    for (var bottle = number; bottle > 0; bottle--) {
      $("#song").append("<li>"+oneRound(bottle)+"</li>");
    }
    $("#song").append("<li>"+lastRound(number)+"</li>");

    $("#input").text(number);

    $(".result").show();
    $(".input").hide();
    event.preventDefault();
  });
});
