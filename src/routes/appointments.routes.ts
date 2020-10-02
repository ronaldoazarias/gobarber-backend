import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { startOfHour, parseISO, isEqual } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// DTO - Data Transfer Object - quando é passado informação de um arquivo para outro

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {

        const { provider_id, date } = request.body;

        const parsedDate = parseISO(date); // Transformação de dado fica na rota

        const createAppointment = new CreateAppointmentService();

        const appointment = await createAppointment.execute({ date: parsedDate, provider_id });

        return response.json(appointment);

});

export default appointmentsRouter;