document.querySelector("submitButton").addEventListener("click", getPlayerName);
document
  .querySelectorAll(".dataDeleteNameButton")
  .addEventListener("click", deleteEntry);

async function deleteEntry(id) {
  console.log("Button is working!");
}

async function getPlayerName() {
  const playerName = document.querySelector("input").value;
  try {
    const res = await fetch(`http://localhost:8000/api/players/${playerName}`);
    const data = await res.json();

    document.querySelector("h2").innerText = `Result: ${data.birthName}`;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
