const express= require('express'); //carregando modulo http
const routerIndex = require('./routes/index');
const routerUsers = require('./routes/users');

/**Cria a var APP e o express ja traz o metodo GET */
// let app = express();

/** Depois de feitas as Rotas, aqui no App, passamos a variaveis */
// app.use('/', routerIndex);
// app.use('/users', routerUsers);




/**Pela Variavel q foi atribuida, chamamos o metodo Listen para ficar ouvindo na porta 3000 */
// app.listen(3000, '127.0.0.1', () => {

//     console.log("servidor rodando!");

// });