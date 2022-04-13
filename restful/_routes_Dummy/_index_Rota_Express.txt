const express = require("express"); //carregando modulo http
const routes = express.Router();


/**Aqui no express, temos como paramentro a rota, NESTE CASO O barra */
routes.get("", (req, res) => {
  /** A Resposta é o que colocarmos aqui em baixo, feito isto fecha a rota e cria outra */
  res.statusCode = 200; //
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Server rodando</h1>");
});


/** feito isto tem temos que exportar a Rota */

module.exports = routes;