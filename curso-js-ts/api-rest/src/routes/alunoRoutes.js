import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, AlunoController.store);
router.get('/', AlunoController.index);
router.put('/:id', loginRequired, AlunoController.update);
router.get('/:id', AlunoController.show);
router.delete('/:id', loginRequired, AlunoController.delete);

export default router;
