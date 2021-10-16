/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, OneToMany, ManyToOne,
} from 'typeorm';
import Channels from './channels';
import Speakers from './speakers';

@Entity()
export default class Sessions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ nullable: true })
  name: string;

  @Index()
  @Column({ nullable: true })
  letter: string;

  @Index()
  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Speakers, (speakers) => speakers.sessions)
  speakers: Speakers[];

  @Index()
  @ManyToOne(() => Channels,
    (channelForShowing) => channelForShowing.id, { cascade: true })
  channelForShowing: Channels;

  @Index()
  @Column({ nullable: true })
  nextSessionLetter: string;

  @Index()
  @Column({ nullable: true })
  nextSessionDescription: string;

  @Index()
  @Column({ nullable: true })
  nextSessionName: string;

  @Index()
  @Column({ default: false })
  voteFoAllSession: boolean;

  @Index()
  @Column({ default: false })
  isSessionForSecondDay: boolean;

  @Index()
  @Column({ nullable: true })
  partnerOfTheSessionImgSrc: string;
}
