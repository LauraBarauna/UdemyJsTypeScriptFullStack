import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const router = new Router();

router.get('/', AlunoController.index);
router.delete('/:id', AlunoController.delete);

export default router;
