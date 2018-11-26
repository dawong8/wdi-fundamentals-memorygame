console.log("Up and Running");




var cards = [
	{
		rank: "queen",
		suit: "hearts", 
		cardImage: "images/queen-of-hearts.png"

	},
	{
		rank: "queen",
		suit: "diamonds", 
		cardImage: "images/queen-of-diamonds.png"

	},
	{
		rank: "king",
		suit: "hearts", 
		cardImage: "images/king-of-hearts.png"

	},
	{
		rank: "king",
		suit: "diamonds", 
		cardImage: "images/king-of-diamonds.png"

	},


];
var cardsInPlay = [];

var createBoard = function() {

	var div = document.getElementById('game-board');

	for (var a = 0; a < cards.length; a++) {
		var cardItem = document.createElement('img');
		cardItem.setAttribute('src', 'images/back.png');
		cardItem.setAttribute('id', a);	
		cardItem.addEventListener('click', flipCard);
		div.appendChild(cardItem);
	}
}


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
	}
}



var flipCard = function() {
	var cardId = this.getAttribute('id');

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();

	}
}

createBoard();