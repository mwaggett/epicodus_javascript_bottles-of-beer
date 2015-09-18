var bottlesOfBeer = function(number) {
  if (number === 0) {
    return lastRound();
  } else {
    return oneRound(number) + bottlesOfBeer(number-1);
  }
}

var oneRound = function(number) {
  var nextNumber = number - 1;
  return number + " bottles of beer on the wall, " + number + " bottles of beer. Take one down and pass it around, " + nextNumber + " bottles of beer on the wall. ";
}

var lastRound = function() {
  return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
}


$(document).ready(function() {
  $("form#bottles").submit(function(event) {
    var number = parseInt($("input#number").val());
    var song = bottlesOfBeer(number);

    $("#input").text(number);
    $("#song").text(song);

    $(".result").show();
    $(".input").hide();
    event.preventDefault();
  });
});
