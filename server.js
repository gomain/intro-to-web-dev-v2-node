
const http = require("http");
// this doesn't work with node --experimental-modules
//import * as http from "http"; 

const server = http.createServer(function(req, res) {
  console.log(`user visited ${req.url}`);
  res.end("hello!");
});

const port = 3000;
console.log(`listening on http;//localhost:${port}`);
server.listen(port);
