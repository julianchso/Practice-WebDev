const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const path = require("path");
const EventEmitter = require("events");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //       console.log(res);
  //     }
  //   );
  // }

  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url == "/" ? "index.html" : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
        console.log("Success!");
        res.writeHead(200, { "Content-Type": contentType });
        console.log(contentType);
        res.write(`<h1>${flipACoin()}</h1>`);
        res.end(content);
      });
    }
  });
});

const flipACoin = () => {
  let flip = Math.random();
  if (flip > 0.5) {
    console.log(flip);
    return "heads";
  } else {
    console.log(flip);
    return "tails";
  }
};
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
