const http = require("http");

const project = process.env.PROJECT;
const port = process.env.API_PORT;

if (!port) throw new Error("No evironment API_PORT set");

//create a server object:
http
  .createServer(function (req, res) {
    res.write(`Project ${project} api environment is running...`);
    res.end();
  })
  .listen(port);
