const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

// Vercel needs a function export, not .listen()
module.exports = server;
