console.log("Up and Running");




var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardTwo);

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
