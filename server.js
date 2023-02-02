const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server run on port ${port} `);
});
