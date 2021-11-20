/* eslint-disable import/no-cycle */
import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  Index, OneToMany, ManyToMany, JoinTable,
} from 'typeorm';
import Speakers from './speakers';
import UsersSpeakersContacts from './usersSpeakersContacts';
import Votes from './votes';

@Entity()
export default class Users extends BaseEntity {
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
  email: string;

  @Index()
  @Column({ nullable: true })
  phone: string;

  @Index()
  @Column({ nullable: true })
  company: string;

  // uniq login code
  @Index()
  @Column({ nullable: true })
  loginCode?: string;

  @Index()
  @Column({ nullable: true })
  jwtToken: string;

  @Index()
  @Column({ nullable: true })
  jwtRefreshToken: string;

  @Index()
  @Column({ nullable: true })
  jwtTokenValidUntilDate: Date;

  @Index()
  @Column({ nullable: true })
  jwtRefreshTokenValidUntilDate: Date;

  @Index()
  @Column({ default: false })
  isAdmin: boolean;

  @Index()
  @Column({ nullable: true })
  adminOfTheChannelNumber: number;

  @Index()
  @Column({ default: false })
  hasAccessToStatisticPage: boolean;

  @ManyToMany(() => Speakers,
    (watchedSpeakers) => watchedSpeakers.usersWhoWatchedSpeaker, { cascade: true })
  @JoinTable()
  watchedSpeakers: Speakers[];

  @OneToMany(() => Votes, (votes) => votes.user)
  votes: Votes[];

  @OneToMany(() => UsersSpeakersContacts,
    (usersSpeakersContacts) => usersSpeakersContacts.user)
  speakersToWhomContactsWereSent: UsersSpeakersContacts[];

  @Index()
  @Column({ nullable: true })
  activeChannel: number;

  @Index()
  @Column({ default: false })
  showOtherChannelsBlock: boolean;

  @Index()
  @Column({ default: false })
  wantToTakeAPartInRafflePrizes: boolean;

  @Index()
  @Column({ nullable: true })
  statusInCompany: string;
}
