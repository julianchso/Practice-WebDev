const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 8000;

app.use(cors());

const username = "Julian";
const password = "SBrqcfq93ebTnN0M";
const connectionString = `mongodb+srv://${username}:${password}@cluster0.7k2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to database");
    const db = client.db("soccer-players");
    const playerCollection = db.collection("players");

    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static("public"));

    app.get("/", (req, res) => {
      db.collection("players")
        .find()
        .toArray()
        .then((result) => {
          res.render("index.ejs", { players: result });
        })
        .catch((error) => console.error(error));
    });

    app.get("/api/players", (req, res) => {
      db.collection("players")
        .find()
        .toArray((err, arr) => {
          res.json(arr);
        });
    });

    app.post("/players", (req, res) => {
      playerCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
      console.log(req.body);
    });

    app.delete("/", (req, res) => {});

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
