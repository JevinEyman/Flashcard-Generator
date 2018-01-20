// Create a new file named BasicCard.js:
//
//
// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
// module.exports = BasicCard;
//
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.

var inquirer = require("inquirer");

// Scope-safe Constructor:
// Not sure how to implement this into the code:
//
// function BasicCard (){
//   if (this instanceof BasicCard){
//     this.card = card;
//   } else{
//     return new BasicCard();
//   }
// };


// constructor function for creating card objects
var BasicCard = function(frontCard, backCard) {
  // this.card will hold all of the card objects
  this.card = [];
  this.numQuestions = 0;
  this.frontCard = frontCard;
  this.backCard = backCard;
  // a method that creates a card using our card constructor.
  // It then pushes the new card object to this.card and updates this.numCards
  this.addCard = function(x, y, z) {
    this.card.push(new Card(x, y, z));
    this.numCards = this.cards.length;
  };
};


module.exports = BasicCard;


// Scope-safe Constructor:
// Not sure how to implement this into the code:
//
// function BasicCard (){
//   if (this instanceof BasicCard){
//     this.card = card;
//   } else{
//     return new BasicCard();
//   }
// };
