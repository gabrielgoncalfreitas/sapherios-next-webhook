const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/webhook", async (req, res) => {
  try {
    const easypanelUrl = "http://145.223.31.50:3000/api/box/deploy/05354d7b5529b97c20332469b5138799647392de2a9e0ea0";
    const params = new URLSearchParams(req.body).toString(); // Converte o body do POST para query params

    await axios.get(`${easypanelUrl}?${params}`);
    res.status(200).send("Requisição redirecionada com sucesso!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao redirecionar a requisição.");
  }
});

app.listen(3001, () => console.log("Middleware rodando na porta 3000"));
