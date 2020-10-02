import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter); //Quando utilizo o "use", ser para qualquer tipo
routes.use('/users', usersRouter); //Quando utilizo o "use", ser para qualquer tipo
routes.use('/sessions', sessionsRouter); //Quando utilizo o "use", ser para qualquer tipo

export default routes;