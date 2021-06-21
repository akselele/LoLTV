import { Router } from 'express';
import matchRouter from './match/matchRouter';

const router = Router();

router.use('/matches', matchRouter);
export default router;
