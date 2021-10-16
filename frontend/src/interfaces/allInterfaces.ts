export interface DataForUser {
  channelUserInfo: {
    id: number,
    break: boolean,
    link: string,
    number: number,
    started: boolean,
    activeSpeaker: Speaker,
    activeSession: {
      voteFoAllSession: boolean,
      name: string,
      id: number,
      partnerOfTheSessionImgSrc: string,
      isSessionForSecondDay: boolean,
      nextSessionName: string,
    },
  },

  channelForShowing: {
    break: boolean,
    id: number,
    link: string,
    number: number
  },
  description: string;
  id: number;
  letter: string;
  name: string;
  speakers: Array<Speaker>

  foundUser: {
    votes: Array<Vote>
    id: number;
    showOtherChannelsBlock: boolean
  }

}

export interface Vote {

  createdAt: Date;
  id: number;
  rate: number;
  speaker: Speaker

}

export interface Speaker {

  company: string;
  firstName: string;
  id: number;
  innerSystemName: string;
  isModerator: boolean;
  lastName: string;
  linkToImg: string;
  linkToPresentation: string;
  linkToZoom: string;
  topicName: string;
  hasSendContactsButton: boolean;
}

export interface SpeakerUserContacts {
  id: number;
  createdAt: Date;
  speaker: Speaker
}

export interface Channel {

  break: boolean, id: number, link: string,
  number: number

}

export interface DataFromSocket {

  message: string,
  votes: Array<Vote>

}
