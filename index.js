const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("pong");
});

app.post("/webhook", () => {
  fetch(
    "http://145.223.31.50:3000/api/box/deploy/05354d7b5529b97c20332469b5138799647392de2a9e0ea0",
    {
      method: "POST",
    }
  );
});

app.listen(3001);
