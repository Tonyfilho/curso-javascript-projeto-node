/** Criar o Modulo de Validação */
module.exports = {

    validaUser: (app,req,res) => {
        req.assert('name', 'O nome do campo é Obrigatório').notEmpty(); //1º Paramentro nome do campo, 2º paramentro Mensagem e por fim a validação neste caso notEmpaty();
        req.assert('email', 'O nome do campo esta invalido').notEmpty().isEmail(); //1º Parament

        /**Criando o var de errors */
        let errors = req.validationErrors();
        if (errors) {
            app.utils.errors.send(errors, req,res, 500, 'Erros nos campos do formulario');
            return false;

            
        }
        return true;
    }

}// end Module