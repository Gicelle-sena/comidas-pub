import bdComidas from "../model/comidabd.js";

class MetodosComidas {
  //Método Create Table --------------------
  static criarTabela() {
    try {
      return new Promise((resolve, reject) => {
        const scriptCreateTable = `
                CREATE TABLE IF NOT EXISTS comidas (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  titulo VARCHAR(50),
                  descricao VARCHAR(50),
                  preco FLOAT
                )
            `;

        bdComidas.run(scriptCreateTable, (e) => {
          if (!e) {
            resolve("Tabela criada com sucesso");
          } else {
            reject("Erro ao criar tabela");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Create Comida --------------------
    static inserirComida(comida) {
    try {
      return new Promise((resolve, reject) => {
        const scriptInsertComida = `
                INSERT INTO comidas (titulo, descricao, preco) VALUES 
                (?, ?, ?)
            `;
        bdComidas.run(scriptInsertComida, comida, (e) => {
          if (!e) {
            resolve(
              `Dados da comida 
                  titulo: ${comida[0]},
                  descricao: ${comida[1]},
                  preco:  ${comida[2]}
                  inseridos com sucesso`
            );
          } else {
            console.log(e.message)
            reject("Erro ao salvar dados das Comidas");
          }
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  //Método Read ----------------------
    static async buscarComidas() {
    try {
      return new Promise((resolve, reject) => {
        const scriptSelectComidas = `SELECT * FROM comidas`;
        bdComidas.all(scriptSelectComidas, (e, rows) => {
          if (!e) {
            resolve(rows);
          } else {
            reject("Problema ao obter dados");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Read ID --------------------
  static bucarComidaPorId(id) {
    try {
      return new Promise((resolve, reject) => {
        const scriptSelectComidaId = `SELECT * FROM comidas WHERE id = ${id}`;
        bdComidas.get(scriptSelectComidaId, (e, row) => {
          if (!e) {
            if (row != undefined) {
              resolve(row);
            } else {
              reject("Nenhum registro encontrado");
            }
          } else {
            reject("Não foi possivel acessar o banco de dados");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Delete --------------------
  static deletarComida(id) {
    try {
      return new Promise((resolve, reject) => {
        const scriptDelete = `DELETE FROM comidas WHERE id = ${id}`;
        bdComidas.run(scriptDelete, (e) => {
          if (!e) {
            resolve("Registro da comida deletada com sucesso");
          } else {
            reject("Não foi possivel deletar o registro");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Update --------------------
  static async atualizarComida(id, novoTitutlo, novaDescricao, novoPreco) {
    try {
      return new Promise((resolve, reject) => {
        const scriptUpdate = `UPDATE comidas SET nome='${novoTitutlo}', tipo='${novaDescricao}', valor='${novoPreco}' WHERE id = ${id}`;
        bdComidas.run(scriptUpdate, (e) => {
          if (!e) {
            resolve("Registro da comida atualizado com sucesso");
          } else {
            reject("Não foi possivel atualizar o registro");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }
}
export default MetodosComidas;