import { Router } from 'express';
import { v4 } from 'uuid';

const appointmentRoutes = Router();

const appointments = [];

appointmentRoutes.post('/', (request, response) => {
    const { provider, date } = request.body;

    const appointment = {
        id: v4(),
        provider,
        date,
    };

    appointments.push(appointment);

    return response.json(appointment);
});

export default appointmentRoutes;
