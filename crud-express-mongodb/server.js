const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
  console.log("index.html is here");
});

app.post("/quotes", (req, res) => {
  console.log("Hellooooooooooooooooooo!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
