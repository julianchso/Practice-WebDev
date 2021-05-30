const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const path = require("path");

const server = http.createServer((req, res) => {
  
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server running on port ${PORT}`));
