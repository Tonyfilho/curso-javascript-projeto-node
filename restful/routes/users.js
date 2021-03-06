/**1º Cria a VAR do Banco de dados */
let NeDB = require("nedb");
/**
 * 1º Config. é o nome do Arquivo em disco, filename:users
 * 2º Config. é fazer uma AutoLoad, para que toda vez q for atualizado seja carregado automaticamente
 */
let db = new NeDB({
  filename: "users.db",
  autoload: true,
});

/** aqui agora passamos a Var APP como paramentro de uma função do CONSIGN com o nome da todas as rotas*/
module.exports = (app) => {
  const routes = "/users";
  /**Find é o GetAll, sem paramentros ele traz tudo, caso queira algum item passe o Objeto desejado
   * 1º Sort orderna o resultado  1 é ASC e -1 é DESC, neste caso pela Coluna NOME:1
   * 2º Exec, onde temos 2 paramentros, err e success
   */
  app.get(routes, (req, res) => {
    db.find({})
      .sort({ name: 1 })
      .exec((err, success) => {
        if (err) {
          app.utils.errors.send(err, req, res, 400, "Error no Find All");
        } else {
          res.json({ users: success });
          res.status(200).json;
        }
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
  app.post(routes, (req, res) => {
    /**Usando o Modulo de Validação criado no utils, caso haja erros, retornará false e lançará um error */
    if (app.utils.validator.validaUser(app, req, res)) {
      return false;
    }

    db.insert(req.body, (err, success) => {
      if (err) {
        // console.error(`Error Na DB ${err}`); //console do error
        // res.status(400).json({
        //   error: err,
        // }); //um status code do error
        app.utils.errors.send(err, req, res, 400, "Error Post");
      } else {
        /** e mandamos um JSON com o success que foi salvo na DB */
        res.status(200).json(success);
      }
    });
  });
  /**Buscando somente 1 usuário pela id,
   * NOTE: Usamos uma VAR ROUTEID para ja receber de APP a rota,
   *  e com isto não precisamos escrever lá no GET
   * 1º Usaremos o FindOne();
   * 2º Usaremos o atributo _id e o paramentro que o _id:req.params.id vai receber
   * 3º Oreq.params.id . o Final ID tem q ser o mesmo que é passado no app.route('/users/:id')
   */
  let routeId = app.route("/users/:id");
  routeId.get((req, res) => {
    db.findOne({ _id: req.params.id }).exec((err, success) => {
      if (err) {
        app.utils.errors.send(
          err,
          req,
          res,
          400,
          "Erro ao Buscar o usuário pela Id"
        );
      } else {
        res.status(200).json(success);
      }
    });
  });
  /** FAzendo o Update dos dados, usaremos o ID, mas ao invez de usar o GET usaremos o PUT
   * 1º usaremos o put
   * 2º no Objecto DB, usaremos o UPDATE
   * 3º o ID é o 1º Paramentro
   * 4º o req.body é 2º paramentro do Update. É onde vem os dados pela body
   * 5º é o Função de CallBack o Err é o 3º paramentro do Update e lança uma função caso haja erro.
   *
   */
  routeId.put((req, res) => {
    /**Usando o Modulo de Validação criado no utils, caso haja erros, retornará false e lançará um error */
    if (app.utils.validator.validaUser(app, req, res)) {
      return false;
    }

    db.update({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        app.utils.errors.send(err, req, res, 400, "erro ao fazer o update");
      } else {
        res.status(200).json(Object.assign(req.params, req.body));
        // res.status(200).json([...req.params, ...req.body]) não aceita ;
      }
    });
  });
  /**Fazendo o Delete dos dados. usaremos o ID e usaremos o DELETE do NODE e o REMOVE DB.
   * 1º Paramentro é onde passamos o Objeto do ID, ou seja o Registro de Remoção.
   * 2º Paramentro é Opcional, quando temos varios registro para ser removido
   * 3º Paramentro é o Função de CallBack, onde passamos o erro ,caso haja ou outros
   */

  routeId.delete((req, res) => {
    db.remove({ _id: req.params.id }, {}, (err) => {
      if (err) {
        app.utils.errors.send(err, req, res, 400, "erro ao fazer o update");
      } else {
        res.status(200).json(req.params); // retornaremos o ID de que foi excluido
      }
    });
  });
}; //end class
