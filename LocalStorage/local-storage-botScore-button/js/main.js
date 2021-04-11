//Create a button that adds 1 to a botScore stored in localStorage

if (!localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0);
}

document.querySelector("button").addEventListener("click", addBotScore);

function addBotScore() {
  let score = localStorage.getItem("botScore");
  score++;
  localStorage.setItem("botScore", score);
}
