document.querySelector("submitButton").addEventListener("click", getPlayerName);
document
  .querySelector("dataDeleteNameButton")
  .addEventListener("click", deleteEntry);

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

async function deleteEntry() {
  console.log("Button is working!");
}
