const http = require("http");

const project = process.env.PROJECT;
const port = process.env.CLIENT_PORT;

if (!port) throw new Error("No evironment PORT set");

//create a server object:
http
  .createServer(function (req, res) {
    res.write(`Project ${project} client environment is running...`);
    res.end();
  })
  .listen(port);
