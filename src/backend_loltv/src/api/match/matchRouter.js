import { Router } from 'express';
import { makeInvoker } from 'awilix-express';

import matchController from './matchController';

const router = Router();
const matchApi = makeInvoker(matchController);

router.get('/msi', matchApi('getMsiGames'));

export default router;
