const express = require("express");
const logger = require("./middlewere/logger");
const app = express();
app.use(logger);
app.use(express.static("public"));
app.listen(3000, () => {
  console.log(`Listening to port 3000 `);
});
//
