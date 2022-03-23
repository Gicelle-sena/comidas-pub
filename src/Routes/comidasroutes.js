import { Router } from "express";
import ComidasController from '../controller/ComidasController.js';
const router = Router();

router.post("/criarTabela", ComidasController.criarTabela)

router.get("/comidas", ComidasController.buscarComidas)

router.post("/comidas", ComidasController.inserirComida)

export default router;