/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, OneToOne, JoinColumn,
} from 'typeorm';
import Sessions from './sessions';
import Speakers from './speakers';

@Entity()
export default class Channels extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Sessions, (sessions) => sessions) // specify inverse side as a second parameter
  @JoinColumn()
  activeSession: Sessions | null;

  @Column({ default: true })
  break: boolean;

  @OneToOne(() => Speakers, (speakers) => speakers)
  @JoinColumn()
  activeSpeaker: Speakers | null;

  @Index()
  @Column({ nullable: true })
  number: number;

  @Index()
  @Column({ nullable: true })
  link: string;

  @Index()
  @Column({ nullable: true })
  startChannelSessionLetter: string;

  @Index()
  @Column({ nullable: true })
  startChannelSessionDescription: string;

  @Index()
  @Column({ nullable: true })
  channelLocation: string;

  @Index()
  @Column({ default: false })
  started: boolean;

  @Index()
  @Column({ nullable: true })
  nextSessionName: string;
}
