import { scopePerRequest } from 'awilix-express';

import express from 'express';
import routes from './api/routes';
import configuration from './configuration';

const app = express();

const container = configuration();
app.use(scopePerRequest(container));

app.use('/api/', routes);

export default app;
