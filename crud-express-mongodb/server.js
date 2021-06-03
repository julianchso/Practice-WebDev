const express = require("express");
const bodyParser = require("body-parser");
const app = express();

PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve and index.html file that is found 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// post item from action in form in index.html
app.post("/quotes", (req, res) => {
  console.log(req.body);
});

// start server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
