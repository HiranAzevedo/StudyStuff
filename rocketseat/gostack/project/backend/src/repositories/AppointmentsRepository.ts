import { isEqual } from 'date-fns';
import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
    public findByDate(date: Date): Appointment | null {
        const findAppointmentInSameDate = this.appointments.find(appointment =>
            isEqual(date, appointment.date),
        );

        return findAppointmentInSameDate || null;
    }
}

export default AppointmentsRepository;
