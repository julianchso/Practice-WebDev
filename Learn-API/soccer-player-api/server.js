const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

app.use(cors());

let players = {
  "david beckham": {
    age: 46,
    birthName: "David Robert Joseph Beckham",
    birthLocation: "London, England",
  },
  "zinedine zidane": {
    age: 48,
    birthName: "Zinedine Yazid Zidane",
    birthLocation: "Marseille, France",
  },
  "thierry henry": {
    age: 43,
    birthName: "Thierry Daniel Henry",
    birthPlace: "Les Ulis, France",
  },
  "dennis bergkamp": {
    age: 52,
    birthName: "Dennis Nicolaas Maria Bergkamp",
    birthPlace: "Amsterdam Netherlands",
  },
  "patrick vieira": {
    age: 44,
    birthName: "Patrick Vieira",
    birthPlace: "Dakar, Senegal",
  },
  "robert pires": {
    age: 47,
    birthName: "Robert Emmanuel Pires",
    birthPlace: "Reims, France",
  },
  unknown: {
    age: "Unknown",
    birthName: "Unknown",
    birthPlace: "Unknown",
  },
  unknown: {
    age: "Unknown",
    birthName: "Unknown",
    birthLocation: "Unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/players", (req, res) => {
  res.json(players);
});

app.get("/api/players/:soccerPlayerName", (req, res) => {
  const playerName = req.params.soccerPlayerName.toLowerCase();

  if (players[playerName]) {
    res.json(players[playerName]);
  } else {
    console.log(players[playerName]);
    res.json(players["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
