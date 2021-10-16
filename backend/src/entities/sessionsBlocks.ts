/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index,
} from 'typeorm';

@Entity()
export default class SessionsBlocks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ nullable: true })
  sequenceNumber: number;

  @Index()
  @Column({ nullable: true })
  sessionsAmount: number;
}
