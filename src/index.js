/* eslint-disable no-console */
const logger = require("./logger");
const app = require("./app");
const port = process.env.PORT || app.get("port");
const server = process.env.PORT || app.listen(port);

process.on("unhandledRejection", (reason, p) =>
  logger.error("Unhandled Rejection at: Promise ", p, reason)
);

server.on("listening", () =>
  logger.info(
    "Feathers application started on http://%s:%d",
    app.get("host"),
    port
  )
);
