import { Router } from 'express';

const router = Router();

router.use('/matches', matchRouter);
export default router;
