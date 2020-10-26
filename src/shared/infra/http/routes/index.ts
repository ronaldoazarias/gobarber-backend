import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter); //Quando utilizo o "use", ser para qualquer tipo
routes.use('/users', usersRouter); //Quando utilizo o "use", ser para qualquer tipo
routes.use('/sessions', sessionsRouter); //Quando utilizo o "use", ser para qualquer tipo

export default routes;