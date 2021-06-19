import { Router } from 'express';
import { makeInvoker } from 'awilix-express';

import matchController from './matchController';

const router = Router();
const matchApi = makeInvoker(matchController);

router.get('/upcoming', matchApi('getUpcomingMatches'));
router.get('/games', matchApi('getGames'));

export default router;
