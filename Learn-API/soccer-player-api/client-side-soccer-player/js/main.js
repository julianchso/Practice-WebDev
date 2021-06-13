document.querySelector("button").addEventListener("click", getPlayerName);

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
