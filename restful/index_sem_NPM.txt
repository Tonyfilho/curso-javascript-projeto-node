const http= require('http'); //carregando modulo http


/**Criando o servidor com a função server, guardamos este servidor dentro da var SERVER */
let server = http.createServer((req, res) => {

    console.log('URL:', req.url); //aqui mostra qual URL chamada no servidor
    console.log('METHOD:', req.method); //aqui mostra qual o Metodo chamado no Servidor

 //   res.end('OK');//aqui é a resposta para o servidor ficar rodando sem parar
    switch (req.url) {
        case '/':
            res.statusCode = 200; //
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Server rodando</h1>');
            break;
    
        case '/users':
            res.statusCode = 200; //
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                users: [{
                    name: 'tony',
                    email: 'tony@gmail.com',
                    id: 1
                }]
            }));
            break;
    
        default:
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Http not found</h1>');
            break;
    }

});
/**Pela Variavel q foi atribuida, chamamos o metodo Listen para ficar ouvindo na porta 3000 */
server.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});