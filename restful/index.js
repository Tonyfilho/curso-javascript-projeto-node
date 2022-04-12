const express= require('express'); //carregando modulo http

/**Cria a var APP e o express ja traz o metodo GET */
let app = express();
/**Aqui no express, temos como paramentro a rota, NESTE CASO O barra */
app.get('/',(req, res) => {
    /** A Resposta é o que colocarmos aqui em baixo, feito isto fecha a rota e cria outra */
    res.statusCode = 200; //
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Server rodando</h1>');
});


app.get('/users',(req, res) => {
    res.statusCode = 200; //
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name: 'tony',
            email: 'tony@gmail.com',
            id: 1
        }]
    });

});

/**Pela Variavel q foi atribuida, chamamos o metodo Listen para ficar ouvindo na porta 3000 */
app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});