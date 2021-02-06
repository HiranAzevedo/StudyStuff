import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    provider: string;

    @Column('timestamp with time zone')
    date: Date;

    // constructor({ provider, date }: Omit<Appointment, 'id'>) {
    //     this.provider = provider;
    //     this.date = date;
    //     this.id = v4();
    // }
}

export default Appointment;
