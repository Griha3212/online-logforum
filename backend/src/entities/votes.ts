/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, CreateDateColumn, ManyToOne,
} from 'typeorm';
import Speakers from './speakers';
import Users from './users';

@Entity()
export default class Votes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Date of vote creation
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @Index()
  @ManyToOne(() => Users,
    (user) => user.id, { cascade: true })
  user: Users;

  @Index()
  @ManyToOne(() => Speakers,
    (speaker) => speaker.id, { cascade: true })
  speaker: Speakers;

  @Index()
  @Column({ nullable: true })
  rate: number;
}
