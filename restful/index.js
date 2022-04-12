const http= require('http'); //carregando modulo http


/**Criando o servidor com a função server, guardamos este servidor dentro da var SERVER */
let server = http.createServer((req, res) => {

    console.log('URL:', req.url); //aqui mostra qual URL chamada no servidor
    console.log('METHOD:', req.method); //aqui mostra qual o Metodo chamado no Servidor

    res.end('OK');//aqui é a resposta para o servidor ficar rodando sem parar

});
/**Pela Variavel q foi atribuida, chamamos o metodo Listen para ficar ouvindo na porta 3000 */
server.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});