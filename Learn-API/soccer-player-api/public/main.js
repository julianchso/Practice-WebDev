// document.querySelector("submitButton").addEventListener("click", getPlayerName);
const deletePlayer = document.querySelectorAll(".dataDeleteNameButton");

Array.from(deletePlayer).forEach((e) => {
  e.addEventListener("click", deleteEntry);
});

async function deleteEntry(id) {
  console.log("Button is working!");
  const Name = this.parentNode.childNodes[1].innerText;
  const club = this.parentNode.childNodes[3].innerText;
  // console.log(playerName);
  // console.log(club);
  try {
    const res = await fetch("deletePlayer", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        playerName: Name,
        playerClub: club,
      }),
    });
    const data = await res.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

// async function getPlayerName() {
//   const playerName = document.querySelector("input").value;
//   try {
//     const res = await fetch(`http://localhost:8000/api/players/${playerName}`);
//     const data = await res.json();

//     document.querySelector("h2").innerText = `Result: ${data.birthName}`;
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
