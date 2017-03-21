// Create deck (class) of 52 cards (array, list, whatever bs i++ we did before)
//
// Ask users for usernames
//
// Each user draws a card
//
// Higher card wins
//
// Each users draw 26 cards

var prompt = require('prompt')

//
// Start the prompt
//
prompt.start()

//
// Get two properties from the user: username and email
//


var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
var scores = {'ace':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9, 'ten':10, 'jack':11, 'queen':13, 'king':12}

class card {
    constructor (suit, rank, score) {
    this.suit = suit,
    this.rank = rank,
    this.score = score,
    this.title = rank + " of " + suit
  }
}


class deckOfCards {
  constructor() {
    this.cards = []
    this.createNewDeck = function () {
      if (this.cards.length === 0) {
        for (var i = 0; i < suits.length; i++) {
          for (var j = 0; j < ranks.length; j++) {
            var newCard = new card(suits[i], ranks[j], scores[ranks[j]] )
            this.cards.push (newCard)
          }
        }
      }
    }
  }
}
var callDeckOfCards = new deckOfCards ()
// console.log(callDeckOfCards)
// console.log(callDeckOfCards.createNewDeck)
callDeckOfCards.createNewDeck()
// console.log(callDeckOfCards)


class user {
  constructor (username) {
  this.username = username,
  this.cards = []
  }
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var randomizeDeck = shuffle(callDeckOfCards.cards)
// console.log(randomizeDeck)

prompt.get(['username1', 'username2'], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:')

var user1 = new user (result.username1)
var user2 = new user (result.username2)

user1.cards = randomizeDeck.splice(0, 26)
user2.cards = randomizeDeck
// console.log(randomizeDeck.length)
// return 0

var cardCounter = 1

while (user1.cards.length < 52 && user2.cards.length < 52) {
  let card1 = user1.cards.shift()
  let card2 = user2.cards.shift()
  let winner = ""
  // console.log(card1)
  //   console.log(card2)
    if (card1.score >= card2.score) {
      winner = user1.username
      user1.cards.push (card1, card2)
    }else {
      winner = user2.username
      user2.cards.push (card1, card2)
    }
  console.log("round" + cardCounter + " " + card1.title + " " + card2.title + " " + winner + " " + user1.cards.length + " " + user2.cards.length)
  cardCounter ++
}


});
