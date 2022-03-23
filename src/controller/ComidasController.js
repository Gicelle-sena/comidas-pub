/*import { bdComidas } from "../model/comidabd.js";
import Metodoscomidas from "../DAO/metodoscomidas.js";
import { verificaDadosComidas } from "../services/verificaDadosValidos.js";*/
import metodoscomidas from "../DAO/Metodoscomidas.js";


class ComidasController {
  //Método Create --------------------
    static criarTabela(req, res) {
    metodoscomidas
      .criarTabela()
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }

  //Método Create --------------------
   static inserirComida(req, res) {
    /*const comida = new Promise((resolve, reject) => {
      resolve([req.body.id, req.body.titulo, req.body.descricao, req.body.preco]);

      reject("Não foi possivel pegar as informações da comida");
    });*/

    const comida = [req.body.titulo, req.body.descricao, req.body.preco]

    console.log(comida)
    metodoscomidas
      .inserirComida(comida)
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }

  //Método Read ----------------------
    static async buscarComidas(req, res) {
    metodoscomidas
      .buscarComidas()
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }

  //Método Read --------------------
    static bucarComidaPorId(req, res) {
    const id = req.params.id;
    metodoscomidas
      .bucarComidaPorId(id)
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }

  //Método Delete --------------------
    static deletarComida(req, res) {
    const id = req.params.id;
    metodoscomidas
      .deletarComida(id)
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }

  //Método Update --------------------
   static async atualizarComida(req, res) {
    const novaComida = await new Promise((resolve, reject) => {
      resolve([
        req.params.id,
        req.body.titulo,
        req.body.descricao,
        parseFloat(req.body.preco),
      ]);
    });
    metodoscomidas
      .atualizarComida(...novaComida)
      .then((response) => res.send(response))
      .catch((response) => res.send(response));
  }
}

export default ComidasController;