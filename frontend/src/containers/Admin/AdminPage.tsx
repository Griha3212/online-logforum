/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/ban-types */
import React, {
  FC, memo, useState, useEffect,
  ChangeEvent,
} from 'react';

// import ContentContainer from '../ContentContainer/ContentContainer';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Hidden } from '@material-ui/core';
import useStyles from './style';
import { apiGetUser } from '../../api/user';
import parseToken from '../../utils/parseToken';
import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import {
  apiChangeActiveSpeakerInChannel, apiDisableLogistOfTheYearSession,
  apiSetBrakeInChannel, apiSetLogistOfTheYearSession,
} from '../../api/admin';

type Speaker = {

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

};

type DataForAdmin = {

  channelAdminInfo: {
    number: number,
    channelLocation: string,
  }

  foundAllSessionsInAdminChannel: Array<Session>

};

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type Session = {

  description: string;
  id: number;
  letter: string;
  name: string;
  nextSessionDescription: string;
  nextSessionLetter: string;
  speakers: Array<Speaker>;
  voteFoAllSession: boolean;

};

const AdminPage: FC = () => {
  const classes = useStyles();
  const { token } = getLocalStorageData();
  const [userData] = useState(parseToken(token.accessToken as string));

  const [error]: [string, (error: string) => void] = useState('');
  const [open, setOpen] = useState(false);

  const [activeSpeaker, setActiveSpeaker] = useState('');

  const [selectedSpeakerToActivate, setSelectedSpeakerToActivate] = useState('');

  const [dataForAdmin, setDataForAdmin] = useState<DataForAdmin>();
  const [activeButtonId, setActiveButtonId] = useState<number | undefined>();

  const loadDataForAdmin = async () => {
    const response = await apiGetUser(userData.id, token);
    setDataForAdmin(response);

    if (response && response.channelAdminInfo && response.channelAdminInfo.activeSpeaker) {
      setActiveSpeaker(`${response.channelAdminInfo.activeSpeaker.lastName} ${response.channelAdminInfo.activeSpeaker.firstName}`);
      setActiveButtonId(response.channelAdminInfo.activeSpeaker.id);
    }
  };

  useEffect(() => {
    loadDataForAdmin();
  }, []);

  const handleClose = async (event: ChangeEvent<unknown>, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    await setOpen(false);
  };

  const activateSelectedSpeaker = async (speakerId: string) => {
    const response = await apiChangeActiveSpeakerInChannel(
      token,
      Number(speakerId),
      Number(dataForAdmin && dataForAdmin.channelAdminInfo.number),
    );

    setActiveSpeaker(`${response.lastName} ${response.firstName}`);
  };

  const setBreakBetweenSessions = async () => {
    await apiSetBrakeInChannel(
      token,
      Number(dataForAdmin && dataForAdmin.channelAdminInfo.number),
      Number(activeButtonId),
    );
    setActiveSpeaker('');
    setActiveButtonId(undefined);
  };

  const setLogistOfTheYearSession = async () => {
    await apiSetLogistOfTheYearSession(
      token,
    );
    setActiveSpeaker('Логист Года активирован');
    setActiveButtonId(undefined);
  };

  const disableLogistOfTheYearSession = async () => {
    await apiDisableLogistOfTheYearSession(
      token,
    );
    setActiveSpeaker('');
    setActiveButtonId(undefined);
  };

  const renderSpeakersDataForAdmin = (element: Speaker) => {
    if (!element.isModerator && element.lastName !== 'ВСТУПИТЕЛЬНОЕ') {
      return (

        <Grid key={element.id} container item xs={12} justify="center">
          <Button
            // onTouchEnd={(e) => {
            //   setSelectedSpeakerToActivate(e.currentTarget.value);
            //   setActiveButtonId(Number(e.currentTarget.value));
            // }}
            onClick={(e) => {
              setSelectedSpeakerToActivate(e.currentTarget.value);
              setActiveButtonId(Number(e.currentTarget.value));
            }}
            key={element.id}
            value={element.id}
            data-id=""
            className={activeButtonId === element.id ?
              classes.speakerButtonActive : classes.speakerButton}
            variant="outlined"
            color="primary"
          >
            {`${element.lastName} ${element.firstName} `}
          </Button>
        </Grid>

      );
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {error}
          </Alert>
        </Snackbar>

        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Страница Администратора
          </Typography>

          <p className={classes.sessionLetter} />

        </div>

      </Container>

      <Grid container justify="space-around">

        <Grid item lg={4} xs={12}>

          {
            dataForAdmin && dataForAdmin.foundAllSessionsInAdminChannel.map(
              (session: Session) => (
                <>
                  {session.letter === 'Экскурсия' ? (
                    <p
                      key={session.id}
                      className={classes.sessionLetter}
                    >
                      {session.description}
                    </p>
                  ) : (
                    <p key={session.id} className={classes.sessionLetter}>
                      {session.letter}
                    </p>
                  )}

                  <div>
                    {session.speakers.map(
                      (speaker: Speaker) => renderSpeakersDataForAdmin(speaker),
                    )}
                  </div>
                </>
              ),
            )
          }

          {/* {
            dataForAdmin && dataForAdmin.foundAllSessionsInAdminChannel.map(
              (element: Session) => renderSpeakersDataForAdmin(element),
            )
          } */}
        </Grid>

        <Grid item container justify="center" lg={4} xs={12}>
          <div className={classes.stickyCentralMenu}>
            {/* mobile */}
            <Hidden only={['lg', 'xl', 'md']}>
              <p className={classes.activeSpeakerText}>
                Активный спикер:
                {' '}
                {`${activeSpeaker} `}
              </p>
            </Hidden>
            <p className={`${classes.textCenter} ${classes.activateSelectedSpeakerP} `}>
              <Button
                className={classes.speakerButton}
                onClick={() => activateSelectedSpeaker(selectedSpeakerToActivate)}
                variant="contained"
                color="primary"
              >
                Активировать выбранного спикера

              </Button>
            </p>

            <p className={classes.textCenter}>
              <Button
                className={classes.speakerButtonBigMargin}
                onClick={() => setBreakBetweenSessions()}
                variant="contained"
                color="primary"
              >
                Активировать перерыв

              </Button>
            </p>
          </div>
        </Grid>
        {/* pc */}
        <Hidden smDown>
          <Grid item lg={4} xs={12}>
            <p className={classes.activeSpeakerText}>
              Активный спикер:
              {' '}
              {`${activeSpeaker} `}
            </p>
          </Grid>
        </Hidden>
      </Grid>

    </>
  );
};

export default memo(AdminPage);
