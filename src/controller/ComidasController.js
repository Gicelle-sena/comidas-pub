import bdComidas from '../model/comidabd.js';

class ComidasController {
    static criarTabela(req, res){
        const tabela_comidas = `
        CREATE TABLE IF NOT EXISTS comidas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo VARCHAR (50),
            descricao VARCHAR (50),
            preco FLOAT
        )
       `;

       bdComidas.run(tabela_comidas, (e) => {
           if(e){
               res.send("Erro ao criar tabela", e.message)
             }
             else {
                 res.send("Tabela criada com sucesso")
             }
       }) 
    }

   static async salvarComida(req, res) {
        try{
            const comida = await new Promise((resolve, reject) => {
            
            const result = {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                preco: parseFloat(req.body.preco)
            }
            resolve(result)
            })
        
            const infoComidas = `
            INSERT INTO comidas (titulo, descricao, preco) VALUES 
            ('${comida.titulo}', '${comida.descricao}', ${comida.preco})
            `;

            bdComidas.run(infoComidas, (e) => {
            if (!e) {
                res.status(201)
                res.send(
                `Dados da comida 
                titulo: ${comida.titulo} 
                descricao: ${comida.descricao}
                preco: ${comida.preco}
                inseridos com sucesso`
                );
            }
            });
        } catch (error){
            res.status(500)
            res.send("Erro ao salvar dados das Comidas")
        }
    }

    static async buscarTodasComidas(req, res){
        const scriptSelect = `SELECT * FROM comidas`
        try{
           const results = await new Promise((resolve, reject) => {
              return (
                 bdComidas.all(scriptSelect, (e, rows) => {
                    if(!e){
                       resolve(rows)
                    } else {
                       reject("Problema ao obter dados")
                    }
                 })
              )
           })
  
           res.status(200).json(results)
  
        } catch(error) {
           res.status(500).json(error)
        }
     }

}



export default ComidasController;