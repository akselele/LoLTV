import { scopePerRequest } from 'awilix-express';
import cors from 'cors';
import express from 'express';
import routes from './api/routes';
import configuration from './configuration';

const app = express();

const container = configuration();
app.use(scopePerRequest(container));
app.use(cors({ origin: true, credentials: true }));
app.use('/api/', routes);

export default app;
