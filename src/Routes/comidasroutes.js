import { Router } from "express";
import ComidasController from '../controller/ComidasController.js';
const router = Router();

router.post("/criarTabela", ComidasController.criarTabela)

router.get("/comidas", ComidasController.buscarComidas)

router.post("/comidas", ComidasController.inserirComida)

router.get("/comidasBuscar/:id", ComidasController.bucarComidaPorId);

router.put("/atualizar/:id", ComidasController.atualizarComida);

router.delete("/deletar/:id", ComidasController.deletarComida);

export default router;