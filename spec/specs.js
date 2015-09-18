describe('oneRound', function() {
  it("returns the lyrics to one round of the 99 bottles of beer on the wall song for a specific number", function() {
    expect(oneRound(99)).to.equal("99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall. ");
  });
});

describe('lastRound', function() {
  it("returns the last line of the 99 bottles of beer on the wall song", function() {
    expect(lastRound(99)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
});

// describe('bottlesOfBeer', function() {
//   it("sings the whole 99 bottles of beer on the wall song starting at a given number", function() {
//     expect(bottlesOfBeer(4)).to.equal("4 bottles of beer on the wall, 4 bottles of beer. Take one down and pass it around, 3 bottles of beer on the wall. 3 bottles of beer on the wall, 3 bottles of beer. Take one down and pass it around, 2 bottles of beer on the wall. 2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottles of beer on the wall. 1 bottles of beer on the wall, 1 bottles of beer. Take one down and pass it around, 0 bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 4 bottles of beer on the wall.");
//   });
// });
