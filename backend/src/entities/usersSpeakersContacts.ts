/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Entity, BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, Index, ManyToOne,
} from 'typeorm';
import Speakers from './speakers';
import Users from './users';

@Entity()
export default class UsersSpeakersContacts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: string;

  @Index()
  @ManyToOne(() => Users,
    (user) => user.id, { cascade: true })
  user: Users;

  @Index()
  @ManyToOne(() => Speakers,
    (speaker) => speaker.id, { cascade: true })
  speaker: Speakers;
}
