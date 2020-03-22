import express from "express";

const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("Running on http://localhost:" + port);
});
