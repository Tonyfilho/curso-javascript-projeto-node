//  import * as consign from '/node_modules/consign';
const express = require("express"); //carregando modulo http
const consign = require("consign"); //carregando Consign gerencia as ROTAS
const bodyParser = require("body-parser");//carregando o BodyPaser para recebermos os POST

/**Cria a var APP e o express ja traz o metodo GET */
let app = express();

/**Passamos os BodyPaser para dentro da var APP, com 2 paramentros
 * 1ª para transformar tudo que vem em JSON 
 * 2º é a URL encoded onde decodifica a URL
 */

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



/** Falamos para CONSIGN incluir o diretorio das ROTAS chamado 
 * ROUTES e falar em qual VAR, neste caso APP*/
consign().include('/routes').into(app);




/**Pela Variavel q foi atribuida, chamamos o metodo Listen para ficar ouvindo na porta 3000 */
app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});