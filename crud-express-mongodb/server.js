const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve and index.html file that is found
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// post item from action in form in index.html

// start server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const username = "Julian";
const password = "SBrqcfq93ebTnN0M";
const connectionString = `mongodb+srv://${username}:${password}@cluster0.7k2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("star-wars-quotes");
    const quotesCollection = db.collection("quotes");

    // app.use(/* ... */);

    app.get("/", (req, res) => {
      const cursor = db
        .collection("quotes")
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
        })
        .catch((err) => console.log(err));
      console.log(cursor);
    });

    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((err) => console.log(err));
    });
    app.listen(/* ... */);
  })
  .catch((err) => console.log(err));
