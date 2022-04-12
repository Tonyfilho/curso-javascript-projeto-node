const express = require("express"); //carregando modulo http
const routes = express.Router();
routes.get('/',(req, res) => {
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
routes.get('/admin',(req, res) => {
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


module.exports = routes;