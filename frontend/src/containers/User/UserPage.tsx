/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, {
  FC, memo, useState, useEffect, useRef,
} from 'react';
import {
  useMediaQuery, Grid, Typography, Hidden,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Redirect, useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import useStyles from './style';
import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import parseToken from '../../utils/parseToken';
import VideoPlayerMain from '../../components/VideoPlayerMain/VideoPlayerMain';
import SessionInfoBlock from '../../components/SessionInfoBlock/SessionInfoBlock';
import topLogforumLogo from '../../img/logforum_top_logo.svg';
import arrowImage from '../../img/arrow.svg';
import {
  apiGetUser, apiUserUpdateWatchedSpeakers,
  apiGetAllChannels, apiUserChangeActiveChannel,
  apiUserUpdateWatchedSpeakersAllInSession,
} from '../../api/user';
import footerCCLLogo from '../../img/ccl_logo.svg';
import {
  DataForUser, Vote, Channel, Speaker, DataFromSocket,
} from '../../interfaces/allInterfaces';

import sap from '../../img/partnersImg/sap.svg';
import comitas from '../../img/partnersImg/comitas.svg';

import veeroute from '../../img/partnersImg/veeroute_2021.jpg';
import sberlogistika from '../../img/partnersImg/sblogistica.svg';
import spaceCargo from '../../img/partnersImg/space_cargo.svg';
import firstLogistics from '../../img/partnersImg/first_logistics.png';

import ntls from '../../img/partnersImg/new_tech.png';
import scanCode from '../../img/partnersImg/scancode.png';
import cemat from '../../img/partnersImg/cemat.jpg';
import cipherLab from '../../img/partnersImg/cipher_lab.jpg';
import axelot from '../../img/partnersImg/axelot.svg';

import infoscan from '../../img/partnersImg/infoscan.png';
import psi from '../../img/partnersImg/psi.png';
import korusKonsalting from '../../img/partnersImg/korus.jpg';
import medPoint from '../../img/partnersImg/medpoint_logo.png';
import { showOtherChannelsBlock } from '../../utils/helpers/showOtherChannelsBlock.helper';

const socket = io(`${process.env.REACT_APP_API_URL}`, { transports: ['websocket'] });

const UserPage: FC = () => {
  const [isAuth] = useState(!!getLocalStorageData().token.accessToken);
  if (!isAuth) return <Redirect to="/signin" />;
  const { token } = getLocalStorageData();
  const [userData] = useState(parseToken(token.accessToken as string));

  if (userData.isAdmin) {
    return <Redirect to="/admin" />;
  }

  if (userData.hasAccessToStatisticPage) {
    return <Redirect to="/stats" />;
  }

  const classes = useStyles();

  const [user] = useState(parseToken(token.accessToken as string));
  const history = useHistory();

  const [dataForUser, setDataForUser] = React.useState<DataForUser>();

  // active session info
  const [activeSessionLetter, setActiveSessionLetter] = React.useState<DataForUser>();
  const [activeSessionDescription, setActiveSessionDescription] = React.useState<DataForUser>();

  // active speaker info
  const [activeSpeakerInfo, setActiveSpeakerInfo] = React.useState<DataForUser>();
  const [activeSpeakerRate, setActiveSessionSpeakersRate] = React.useState<number>();

  // active moderator info
  const [activeModeratorInfo, setActiveModeratorInfo] = React.useState<DataForUser>();

  // active session speakers info
  const [activeSessionSpeakersInfo, setActiveSessionSpeakersInfo] = React.useState<DataForUser>();
  const [activeSessionSpeakersAllRates, setActiveSessionSpeakersAllRates]
    = React.useState<Vote[]>();

  // all channels info

  const [allChannelsInfo, setAllChannelsInfo] = React.useState<Channel[]>();

  const changeSession = useRef<HTMLDivElement>(null);

  const mainVideoBock = useRef<HTMLDivElement>(null);

  const executeScrollToChangeSessionBlock = () => {
    if (changeSession.current) {
      changeSession.current.scrollIntoView();
    }
  };

  const executeScrollToMainVideoBlock = () => {
    if (mainVideoBock.current) {
      mainVideoBock.current.scrollIntoView();
    }
  };
  // run this function from an event handler or an effect to execute scroll

  // on reconnect of socket, if server restarts
  useEffect(() => {
    socket.on('disconnect', () => {
      // connect to personalRoom
      socket.emit('connectToPersonalRoom', user.id);
      // connect to channelRoom
      socket.emit('connectToChannelRoom', user.activeChannel);
    });
  }, []);

  const findAndSetCurrentSpeakerRate = (votes: Vote[] | undefined) => {
    if (activeSpeakerInfo && votes) {
      const currentSpeakerRate2 = votes.find((element: Vote) => element.speaker.id
        === activeSpeakerInfo.id);

      setActiveSessionSpeakersRate(currentSpeakerRate2 && currentSpeakerRate2.rate);
    }
  };

  const loadDataForUser = async () => {
    const response = await apiGetUser(userData.id, token);
    setDataForUser(response);

    const response2 = await apiGetAllChannels(userData.id, token);
    setAllChannelsInfo(response2);

    if (response) {
      setActiveSessionLetter(response && response.channelUserInfo
        && response.channelUserInfo.activeSession && response.channelUserInfo.activeSession.letter);

      setActiveSessionDescription(response && response.channelUserInfo
        && response.channelUserInfo.activeSession
        && response.channelUserInfo.activeSession.description);

      setActiveSpeakerInfo(response && response.channelUserInfo
        && response.channelUserInfo.activeSpeaker);

      setActiveModeratorInfo(response && response.channelUserInfo
        && response.channelUserInfo.activeSession &&
        response.channelUserInfo.activeSession.speakers.find(
          (element: Speaker) => element.isModerator,
        ));

      setActiveSessionSpeakersInfo(response && response.channelUserInfo
        && response.channelUserInfo.activeSession
        && response.channelUserInfo.activeSession.speakers);
      socket.emit('connectToChannelRoom', response.foundUser.activeChannel);
    }
  };

  const updateWatchedSpeakersSingleSpeaker = async (speakerId: number) => {
    await apiUserUpdateWatchedSpeakers(speakerId, userData.id, token);
    loadDataForUser();
  };

  const updateWatchedSpeakersAllSpeakersInSession = async (sessionId: number) => {
    await apiUserUpdateWatchedSpeakersAllInSession(sessionId, userData.id, token);
    loadDataForUser();
  };

  // watch timer functional

  // if there is active speaker, update timer every seconds,
  // until 10, then speaker status set to viewed
  // if type of session voteForAllSession another logic
  useEffect(() => {
    const interval = setInterval(() => {
      // count for usual session
      if (activeSpeakerInfo && dataForUser &&
        !dataForUser.channelUserInfo.activeSession.voteFoAllSession) {
        let initialValueCurrentSpeaker = localStorage.getItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`);

        if (!initialValueCurrentSpeaker) {
          localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, '0');
        } else {
          if (initialValueCurrentSpeaker !== 'viewed') {
            if (initialValueCurrentSpeaker === '350') {
              localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, 'viewed');
              // send to back viewed status
              updateWatchedSpeakersSingleSpeaker(activeSpeakerInfo.id);
            } else {
              initialValueCurrentSpeaker = String(+initialValueCurrentSpeaker + 1);
              localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, initialValueCurrentSpeaker);
            }
          }
        }
      }

      // count in panel session
      if (activeSpeakerInfo && dataForUser &&
        dataForUser.channelUserInfo.activeSession.voteFoAllSession) {
        let initialValueCurrentSpeaker = localStorage.getItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`);

        if (!initialValueCurrentSpeaker) {
          localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, '0');
        } else {
          if (initialValueCurrentSpeaker !== 'viewed') {
            if (initialValueCurrentSpeaker === '300') {
              localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, 'viewed');
              // send to back viewed status
              updateWatchedSpeakersSingleSpeaker(activeSpeakerInfo.id);
            } else {
              initialValueCurrentSpeaker = String(+initialValueCurrentSpeaker + 1);
              localStorage.setItem(`${String(activeSpeakerInfo && activeSpeakerInfo.id)}`, initialValueCurrentSpeaker);
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [activeSpeakerInfo]);

  useEffect(() => {
    socket.on('connectToPersonalRoom', (dataFromSocket: DataFromSocket) => {
      if (dataFromSocket.message === 'disconnect current user') {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        history.push('/');
      }

      if (dataFromSocket.message === 'update current speakers votes') {
        loadDataForUser();
        // setActiveSessionSpeakersAllRates(data.votes);
      }

      if (dataFromSocket.message === 'update user info') {
        loadDataForUser();
      }
    });
    return () => {
      socket.off('connectToPersonalRoom');
    };
  });

  useEffect(() => {
    socket.on('connectToChannelRoom', (dataFromSocket: DataFromSocket) => {
      loadDataForUser();

      if (dataFromSocket.message === 'update') {
        loadDataForUser();
      }
    });
    return () => {
      socket.off('connectToChannelRoom');
    };
  });

  useEffect(() => {
    socket.emit('connectToPersonalRoom', user.id);
    loadDataForUser();
  }, []);

  useEffect(() => {
    // loadDataForUser();
    findAndSetCurrentSpeakerRate(dataForUser && dataForUser.foundUser.votes);
    setActiveSessionSpeakersAllRates(dataForUser && dataForUser.foundUser.votes);
  }, [activeSpeakerInfo]);

  // const sendLoginDataToServer =

  const changeActiveChannel = async (channelNumber: number) => {
    await apiUserChangeActiveChannel(channelNumber, userData.id, token);
    executeScrollToMainVideoBlock();
    loadDataForUser();
  };

  const renderSessionLetterOfTheSessionInChannel = (channel: any) => {
    if (channel) {
      if (!channel.activeSession && channel.break) {
        return channel.startChannelSessionLetter;
      }

      if (channel.activeSession && channel.break) {
        return channel.activeSession.nextSessionLetter;
      }

      if (channel.activeSession.letter) {
        return channel.activeSession.letter;
      } else return 'Сессия #';
    } else return 'Сессия #';
  };

  const renderSessionDescriptionOfTheSessionInChannel = (channel: any) => {
    if (channel) {
      if (!channel.activeSession && channel.break) {
        return channel.startChannelSessionDescription;
      }

      if (channel.activeSession && channel.break) {
        return channel.activeSession.nextSessionDescription;
      }

      if (channel.activeSession.description) {
        return channel.activeSession.description;
      } else return 'Назавание сессии';
    } else return 'Назавание сессии';
  };

  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isXs = useMediaQuery(theme.breakpoints.up('xs'));

  const calculateHeightOfSmallChannelWindow = () => {
    if (isXl) return '235px';
    if (isLg) return '148px';
    if (isMd) return '122px';
    if (isSm) return '94px';
    if (isXs) return '227px';
  };

  const calculateHeightOfBigChannelWindow = () => {
    if (isXl) return '720px';
    if (isLg) return '720px';
    if (isMd) return '720px';
    if (isSm) return '270px';
    if (isXs) return '270px';
  };

  const renderSpeakersSessionInfoBlock = () => {
    // if first session and start position, don't show block
    if (dataForUser && !dataForUser.channelUserInfo.activeSession
      && dataForUser.channelUserInfo.number === 1) {
      return null;
    }

    // if exc session
    if (dataForUser && dataForUser.channelUserInfo.activeSession &&
      dataForUser.channelUserInfo.activeSession.isSessionForSecondDay) {
      return null;
    }

    if (dataForUser && !dataForUser.channelUserInfo.activeSpeaker &&
      dataForUser.channelUserInfo.activeSession &&
      dataForUser.channelUserInfo.activeSession.nextSessionName === 'LogistOfTheYear') {
      return null;
    }
  };

  const renderOtherSessions = (channel: any) => {
    if (channel.number !== dataForUser?.channelUserInfo.number) {
      return (
        <>
          <Grid
            item
            container
            className={classes.channelContainer}
            id={channel.number}
            onClick={(e) => changeActiveChannel(+e.currentTarget.id)}
          >

            <VideoPlayerMain height={calculateHeightOfSmallChannelWindow()} classNameInner="channelVideoContainer" videoURL={channel.link} />

            <Grid item xs={12} className={classes.channelContainerBottomPart}>

              <p className={classes.chooseChannelSessionLetter}>
                {renderSessionLetterOfTheSessionInChannel(channel)}
              </p>
              <p className={classes.chooseChannelSessionDescription}>
                {renderSessionDescriptionOfTheSessionInChannel(channel)}
              </p>

            </Grid>

          </Grid>
        </>
      );
    }
  };

  return (
    <>
      {/* header pc */}
      <Hidden xsDown>
        <Grid
          container
          xl={12}
          justify="space-between"
          className={`${classes.mainContainer} ${classes.blackBckgTop} ${classes.topPart}`}
        >

          <Grid item className={classes.myAuto} lg={3} xl={3} sm={4}>
            <img
              onClick={() => { window.open('https://sklad.logforum.ru/', '_blank'); }}
              className={classes.logforumTopLogoImg}
              src={topLogforumLogo}
              alt=""
            />
          </Grid>

          <Grid item className={classes.myAuto} xl={3} lg={3} sm={4}>
            <Typography className={classes.conferenceTopText} align="center">Экскурсии</Typography>
          </Grid>

        </Grid>
      </Hidden>

      {/* header mobile */}
      <Hidden only={['lg', 'xl', 'md', 'sm']}>
        <Grid
          container
          xl={12}
          justify="space-between"
          className={`${classes.mainContainer} ${classes.blackBckgTop} ${classes.topPart}`}
        >

          <Grid item className={classes.myAuto} xs={6}>
            <p style={{ marginBottom: '0px' }}>
              <img
                onClick={() => { window.open('https://sklad.logforum.ru/', '_blank'); }}
                className={classes.logforumTopLogoImg}
                src={topLogforumLogo}
                alt=""
              />

            </p>
            <p style={{ marginTop: '5px' }}><Typography className={classes.conferenceTopText} align="center">Экскурсии</Typography></p>

          </Grid>
        </Grid>
      </Hidden>

      <Grid ref={mainVideoBock} container className={classes.mainVideoContainer} xl justify="center">

        <VideoPlayerMain
          height={calculateHeightOfBigChannelWindow()}
          classNameInner="mainVideoContainerBig"
          videoURL={dataForUser && dataForUser.channelUserInfo && dataForUser.channelUserInfo.link}
        />

      </Grid>

      {/* <Grid container className={classes.containerForPartnersTop} xl>
        <Grid item xl={4}>
          <img className={classes.multicolorLine} src={multicolorLine} alt="" />
        </Grid>

        <Grid item container justify="flex-end" xl={8}>
          <Grid item className={classes.singleTopPartnerContainer}>
            <p className={classes.topPartnersText}>Генеральный партнер</p>
            <img src={sapTop} alt="" />
          </Grid>
          <Grid item className={classes.singleTopPartnerContainer}>
            <p className={classes.topPartnersText}>Эксклюзивный партнер</p>
            <img src={comitasTop} alt="" />
          </Grid>
          <Grid item>
            <p className={classes.topPartnersText}>IT партнер</p>
            <img src={smartLogisticsTop} alt="" />
          </Grid>

        </Grid>

      </Grid> */}

      {/* <Grid container xl={12}>
        <img className={classes.greyDecoratedLine} src={greyDecoratedLine} alt="" />
      </Grid> */}

      {/* black bckg */}
      <Grid
        className={classes.blackBckgContainerShort}
        container
        item
        justify="center"
      >
        <div className={classes.arrow}>
          <img className={classes.arrowImage} src={arrowImage} alt="" />
        </div>
      </Grid>

      {/* first block (active speaker) info ---------------------------*/}
      <Grid item className={classes.innerContainer}>
        <SessionInfoBlock
          executeScrollToChangeSessionBlock={executeScrollToChangeSessionBlock}
          currentSessionLetter={activeSessionLetter}
          currentSessionDescription={activeSessionDescription}
          currentSpeakerInfo={activeSpeakerInfo}
          token={token}
          userId={user.id}
          currentSpeakerRate={activeSpeakerRate}
          currentUserData={dataForUser}
          key={dataForUser}
        />

      </Grid>

      {/* block with all speakers in session---------------------------------------------------
      render if not LogistOfTheYear */}
      {renderSpeakersSessionInfoBlock()}

      {/* show/hide OtherChannelsBlock-------------------------------------------------------- */}
      {showOtherChannelsBlock(dataForUser) ? (
        <Grid container className={classes.changeSessionMainContainer} xl>
          <Grid ref={changeSession} item className={classes.innerContainer}>
            <Grid xs={12} item container className={`${classes.mainContainerBckgChangeSession} ${classes.mainContainerBckgChangeSessionFirst}`}>
              <p className={classes.speakersBlockHeader} />
            </Grid>

            <Grid
              xs={12}
              item
              justify="space-between"
              container
              className={`${classes.mainContainerBckgChangeSession}
             ${classes.otherSessionContainerInner}`}
            >
              {allChannelsInfo && dataForUser
                && allChannelsInfo.map((element) => renderOtherSessions(element))}
            </Grid>

          </Grid>

        </Grid>
      ) : null}

      <Grid container className={classes.partnersContainer} justify="space-around">

        <Grid item className={classes.innerContainer}>
          <Grid xs={12} item container className={classes.mainContainerBckgChangeSession}>
            <p className={`${classes.speakersBlockHeader} ${classes.partnersHeader}`}>
              Выражаем
              {' '}
              <span className={classes.thanksText}>благодарность</span>
              {' '}
              партнерам форума
            </p>

            <p className={classes.thanksTextSmall}>
              За активное участие в работе
              над концепцией мероприятия и формировании деловой программы.
            </p>
          </Grid>

          <Grid justify="flex-start" container item className={`${classes.mainContainerBckgChangeSession} ${classes.partnersContainerImg}`}>

            <Grid
              className={`${classes.myAuto} ${classes.partnerImgContainer}`}
              item
              xs={10}
              sm={4}
              md={3}
              xl={3}
              lg={4}
            >

              <p className={classes.partnerText}>
                Генеральный
                партнер
              </p>

              <p className={classes.imgPartnerP}>
                {' '}
                <img
                  className={`${classes.imgFluid} ${classes.imgPartner}`}
                  src={firstLogistics}
                  alt=""
                />
              </p>

            </Grid>

            <Grid
              className={`${classes.myAuto} ${classes.partnerImgContainer}`}
              item
              xs={10}
              sm={4}
              md={3}
              xl={3}
              lg={4}
            >

              <p className={classes.partnerText}>
                Стратегический
                партнер
              </p>

              <p className={classes.imgPartnerP}>
                {' '}
                <img
                  className={`${classes.imgFluid} ${classes.imgPartner}`}
                  src={sap}
                  alt=""
                />
              </p>

            </Grid>
          </Grid>

          <Grid
            justify="flex-start"
            container
            direction="row"
            item
            className={`${classes.mainContainerBckgChangeSession} ${classes.partnersContainerImg2}`}
          >

            <Grid className={`${classes.myAuto} ${classes.partnerImgContainerBottom}`} item xs>
              <img className={`${classes.imgFluid}`} src={ntls} alt="" />
            </Grid>
            <Grid className={`${classes.myAuto} ${classes.partnerImgContainerBottom}`} item xs>
              <img className={`${classes.imgFluid}`} src={scanCode} alt="" />
            </Grid>
            <Grid className={`${classes.myAuto} ${classes.partnerImgContainerBottom}`} item xs>
              <img className={`${classes.imgFluid}`} src={cemat} alt="" />
            </Grid>
            <Grid className={`${classes.myAuto} ${classes.partnerImgContainerBottom}`} item xs>
              <img className={`${classes.imgFluid}`} src={cipherLab} alt="" />
            </Grid>

          </Grid>
        </Grid>

      </Grid>

      {/* footer--------------------------------------------------------------------------- */}
      <Grid container>

        <Grid item container justify="space-around" className={classes.footerContainer}>

          <Grid justify="space-between" container item className={classes.footerContainerInner}>

            <Grid xs={12} md={3} xl={3} lg={3} className={`${classes.myAuto} ${classes.footerLogoContainer}`} item>
              <img
                onClick={() => { window.open('https://sklad.logforum.ru/', '_blank'); }}
                className={`${classes.cursorPointer} ${classes.logforumFooterLogo}`}
                src={topLogforumLogo}
                alt=""
              />

            </Grid>

            <Grid xs={12} md={3} xl={2} lg={2} className={`${classes.myAuto} ${classes.footerLogoAndPhone}`} item>
              <p className={classes.footerOrganizatorText}>Организатор</p>
              <p>
                <img
                  onClick={() => { window.open('https://ccl-logistics.ru/', '_blank'); }}
                  className={classes.cursorPointer}
                  src={footerCCLLogo}
                  alt=""
                />

              </p>
            </Grid>
          </Grid>

        </Grid>

      </Grid>

    </>
  );
};

export default memo(UserPage);
