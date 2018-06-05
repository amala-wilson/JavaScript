/* Deck of Class */
class Deck{
    constructor(){
        this._cards = this.buildCardSet();
    }

    buildCardSet(){
        let cards = [];
        let suitArr = ["clubs","spades","hearts","diamonds"];
        let valArr = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        for(let i=0;i<valArr.length;i++){
            for(let j=0;j<suitArr.length;j++){
                let card = {"suit":suitArr[i], "num":valArr[j]};
                cards.push(card);
            }
        }
        return cards;
    }

    /* Took from https://bost.ocks.org/mike/shuffle/ */
    shuffleCards(){
        var m = this._cards.length, t, i;

        // While there remain elements to shuffle...
        while (m){
            // Pick a remaining element...
            i = Math.floor(Math.random() * m--);

            // And swap is with the current element.
            t = this._cards[m];
            this._cards[m] = this._cards[i];
            this._cards[i] = t;
        }
    }

    /* The Deck should be able to reset */
    restoreCards(){
        this._cards = this.buildCardSet();
    }

    /* Deal a random card */
    dealCard(){
        let randChoice = Math.trunc(Math.random()*this._cards.length);
        let cardDealt = this._cards[randChoice];
        this._cards.splice(randChoice, 1);
        return cardDealt;
    }
}

class Player{
    constructor(name, cards){
        this.name = name;
        this.cards = cards; 
    }

    deal(){
        let playerCardDealt = this.cards.dealCard();
        console.log(playerCardDealt);
        console.log(this.cards);
    }

}

let deck1 = new Deck();
// console.log(deck1);
// shuffledCards = deck1.shuffleCards()
// console.log(shuffledCards);
// orgCards = deck1.restoreCards(shuffledCards);
// console.log(orgCards);
// dealtCard = deck1.dealCard();
// console.log(dealtCard);

let player1 = new Player("Bob", deck1);
player1.deal();
player1.deal(); 