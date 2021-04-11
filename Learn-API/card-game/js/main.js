// Get the deck
let deckId = "";
const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    deckId = data.deck_id;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document.querySelector("button").addEventListener("click", playWar);

function playWar() {
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#player1").src = data.cards[0].image;
      document.querySelector("#player2").src = data.cards[1].image;

      let player1Card = Number(cardValue(data.cards[0].value));
      let player2Card = Number(cardValue(data.cards[1].value));

      if (player1Card > player2Card) {
        console.log("player1 won");
        document.querySelector("h3").innerHTML = "Player 1 won!";
      } else if (player1Card < player2Card) {
        console.log("player2 won");
        document.querySelector("h3").innerHTML = "Player 2 won!";
      } else {
        console.log("WARRRRR!!!");
      }
    });
}

function cardValue(val) {
  if (val == "ACE") {
    return 14;
  } else if (val == "JACK") {
    return 11;
  } else if (val == "QUEEN") {
    return 12;
  } else if (val == "KING") {
    return 13;
  } else {
    return val
  }
}
