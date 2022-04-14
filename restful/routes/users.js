/**1º Cria a VAR do Banco de dados */
const NeDB = require("nedb")
/**
 * 1º Config. é o nome do Arquivo em disco, filename:users
 * 2º Config. é fazer uma AutoLoad, para que toda vez q for atualizado seja carregado automaticamente
 */
let db = new NeDB({
   filename: 'users.db',
   autoLoad: true

});


/** aqui agora passamos a Var APP como paramentro de uma função do CONSIGN com o nome da todas as rotas*/
module.exports = (app) => {
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
    /**3º Usaremos a VAR DB aqui no POST para salvar,
     * usando o metodo INSERT()
     * dentro INSERT(), temos alguns paramentros
     * 1º Objeto JSON, q em nosso caso é o que vem do PostMan o req.body
     * 2º Função com 2 paramentros err e success que é a Registro do foi salvo
     *  no banco de dados. Quando ele receber o req.body, e salva e retorna o success 
     * com um rash que é o ID.
     * 3º Temos que fz o If e Else das verificações 
     */
    app.post('/users',(req, res) => {        
        // console.log(req.body);
        db.insert(req.body, (err, success) => {
            if (err) {
                console.error(`Error Na DB ${err}`); //console do error
                res.status(400).json({
                    error:err
                });//um status code do error
            } else {
                /** e mandamos um JSON com o success que foi salvo na DB */ 
               res.status(200).json(success);
               console.log('dentro do else ', JSON.parse(success));
            }


        } )
    
    });
    app.get('/users/admin',(req, res) => {
        res.statusCode = 200; //
        res.setHeader('Content-Type', 'application/json');
        res.json({
            admins: [{
                name: 'tony',
                email: 'tony@gmail.com',
                id: 1
            }]
        });
    
    });


};