const jsonServer = require("json-server");
// import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
// const middlewares = jsonServer.defaults();
const middlewares = jsonServer.defaults({
  static: "./dist",
});

const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(PORT, () => {
  console.log("Server.js is running.");
});
