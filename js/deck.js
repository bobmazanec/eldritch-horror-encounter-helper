class deck {
  discardPile = [];
  drawStack = [];
  name = "";

  constructor(name, cards) {
    this.name = name;
    this.drawStack = cards;
    this.shuffle();
  }

  discard(card) {
    this.discardPile.push(card);
  }

  drawCard() {
    if (this.isEmpty()) {
      this.drawStack = this.discardPile;
      this.discardPile = [];
      this.shuffle();
    }

    const card = this.drawStack.shift();
    this.discard(card);
    return card;
  }

  isEmpty() {
    return this.drawStack.length === 0;
  }

  map(callback) {
    return this.drawStack.map(callback);
  }

  removeCardsFromDrawStack(callback) {
    // Callback identifies cards to be *removed* from the draw stack
    // So negate the callback's return value to keep cards that do *not* match
    // Removed cards are not added to the discard pile
    this.drawStack = this.drawStack.filter(card => !callback(card));
  }

  reset() {
    this.drawStack = this.drawStack.concat(this.discardPile);
    this.discardPile = [];
    this.shuffle();
  }

  searchArray(array, callback) {
    return array.findLastIndex(callback);
  }

  searchForCard(callback) {
    // Per the rules, "Search" means to start at the *bottom* of the deck
    // Then search the discard pile if not found in the draw stack

    let cards = this.drawStack;
    let cardIndex = this.searchArray(cards, callback);

    if (cardIndex === -1) {
      cards = this.discardPile;
      cardIndex = this.searchArray(cards, callback);
    }

    const card = cards.splice(cardIndex, 1)[0];
    this.discard(card);

    return card;
  }

  shuffle() {
    for (let i = this.drawStack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.drawStack[i], this.drawStack[j]] = [this.drawStack[j], this.drawStack[i]];
    }
  }

  topCard() {
    if (this.isEmpty()) {
      this.reset();
    }

    return this.drawStack[0];
  }
}
