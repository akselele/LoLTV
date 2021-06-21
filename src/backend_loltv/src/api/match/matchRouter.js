import { Router } from 'express';
import { makeInvoker } from 'awilix-express';

import matchController from './matchController';

const router = Router();
const matchApi = makeInvoker(matchController);

router.get('/msi', matchApi('getMsiGames'));
// router.get('/:id(*)', matchApi('getGameById'));
router.get('/:id(*)/short', matchApi('getShortGameById'));

export default router;
