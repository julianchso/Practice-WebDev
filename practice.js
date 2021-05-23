const fs = require("fs");
const path = require("path");
const os = require("os");
const myUrl = require("url");
const http = require('http')

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello world",
//   (err) => {
//     if (err) throw err;
//     console.log("File created...");
//   }
// );

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "I love Node.js",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to...");
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " Hello world",
//       (err) => {
//         if (err) throw err;
//         // console.log("File written to...");
//       }
//     );
//   }
// );

// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log(os.arch());
// console.log(os.constants);
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.uptime());

http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
})
.listen(5000, () => console.log('Server running...'))

