/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, OneToMany, ManyToMany, ManyToOne, JoinColumn,
} from 'typeorm';
import Sessions from './sessions';
import Users from './users';
import UsersSpeakersContacts from './usersSpeakersContacts';
import Votes from './votes';

@Entity()
export default class Speakers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ nullable: true })
  firstName: string;

  @Index()
  @Column({ nullable: true })
  lastName: string;

  @Index()
  @Column({ nullable: true })
  company: string;

  @Index()
  @Column({ nullable: true })
  linkToZoom: string;

  @Index()
  @Column({ nullable: true })
  linkToImg: string;

  @Index()
  @Column({ nullable: true })
  linkToPresentation: string;

  @ManyToMany(() => Users, (users) => users.watchedSpeakers)
  usersWhoWatchedSpeaker: Users[];

  // @ManyToMany(() => Users, (users) => users.speakersToWhomContactsWereSent)
  // usersWhoSendContacts: Users[];

  @OneToMany(() => UsersSpeakersContacts,
    (usersSpeakersContacts) => usersSpeakersContacts.speaker)
  usersWhoSendContacts: UsersSpeakersContacts[];

  @OneToMany(() => Votes, (votes) => votes.speaker)
  @JoinColumn()
  votes: Votes[];

  @Index()
  @ManyToOne(() => Sessions,
    (sessions) => sessions.speakers, { cascade: true })
  @JoinColumn()
  sessions: Sessions;

  @Index()
  @Column({ nullable: true })
  topicName: string;

  @Index()
  @Column({ nullable: true })
  innerSystemName: string;

  @Index()
  @Column({ default: false })
  isModerator: boolean;

  @Index()
  @Column({ nullable: true })
  statusInCompany: string;

  @Index()
  @Column({ default: false })
  hasSendContactsButton: boolean;

  @Index()
  @Column({ default: false })
  hasRafflePrizesButton: boolean;
}
