


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
    app.post('/users',(req, res) => {
        res.statusCode = 200; //        
        res.json(req.body);
    
    });


};