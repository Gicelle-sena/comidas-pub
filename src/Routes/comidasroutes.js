import { Router } from "express";
import ComidasController from '../controller/ComidasController.js';
const router = Router();

router.post("/criarTabela", ComidasController.criarTabela)

router.get("/comidas", ComidasController.buscarTodasComidas)

router.post("/comidas", ComidasController.salvarComida)

export default router;