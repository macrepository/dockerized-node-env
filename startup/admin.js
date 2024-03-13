const http = require("http");

const project = process.env.PROJECT;
const port = process.env.ADMIN_PORT;

if (!port) throw new Error("No evironment ADMIN_PORT set");

//create a server object:
http
  .createServer(function (req, res) {
    res.write(`Project ${project} admin environment is running...`);
    res.end();
  })
  .listen(port);
