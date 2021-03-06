import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import User from './User';

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'provider_id' })
    provider: User;

    @Column()
    date: Date;

    @CreateDateColumn()
    Created_at: Date;

    @UpdateDateColumn()
    Updated_at: Date;

    // constructor({ provider, date }: Omit<Appointment, 'id'>) {
    //     this.provider = provider;
    //     this.date = date;
    //     this.id = v4();
    // }
}

export default Appointment;
