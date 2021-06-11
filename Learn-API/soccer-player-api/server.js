const express = require("express");
const app = express();
const cors = require("cors");
const { request } = require("express");
const PORT = process.env.PORT || 8000;

app.use(cors());

let players = {
  "David Beckham": {
    age: 46,
    birthName: "David Robert Joseph Beckham",
    birthLocation: "London, England",
  },
  "Zinedine Zidane": {
    age: 48,
    birthName: "Zinedine Yazid Zidane",
    birthLocation: "Marseille, France",
  },
  Unknown: {
    age: "Unknown",
    birthName: "Unknown",
    birthLocation: "Unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/players/:soccerPlayerName", (req, res) => {
  const PlayerName = request.params.soccerPlayerName
  console.log(PlayerName)
  res.json(players[PlayerName]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
