const express = require("express");

const app = express();

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`Listening port ${port}`);

  // routes
  app.use("/", (req, res) => {
    res.status(200).send({ message: "helloe world" });
  });
});
