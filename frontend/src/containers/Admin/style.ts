import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  stickyCentralMenu: {

    [theme.breakpoints.up('xs')]: {
      position: 'fixed',
      left: 'auto',
    },

    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      left: '36%',
    },

    [theme.breakpoints.up('lg')]: {
      position: 'fixed',
      left: '36%',
    },

  },

  activateSelectedSpeakerP: {

    marginTop: '0px',

  },

  activeSpeakerText: {

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      marginTop: '0px',
      position: 'fixed',
      left: '57%',
      top: '150px',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
      marginTop: '0px',
      position: 'fixed',
      left: '68%',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '22px',
      marginTop: '0px',
      position: 'fixed',
      left: '68%',
      top: 'auto',
    },

  },

  sessionLetter: {

    fontSize: '24px',
    marginTop: '5px',
    textAlign: 'center',
  },

  speakerButtonActive: {

    marginBottom: '30px',
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer',

    '&:hover': {

      marginBottom: '30px',
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer',
    },
  },

  textCenter: {

    textAlign: 'center',

  },

  speakerButton: {

    marginBottom: '30px',
    cursor: 'pointer',

  },

  speakerButtonBigMargin: {

    [theme.breakpoints.up('xs')]: {
      marginBottom: '60px',
    },

    [theme.breakpoints.up('sm')]: {
      marginBottom: '120px',
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: '120px',
    },

  },

  paper: {

    [theme.breakpoints.up('xs')]: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    position: 'relative',
  },
}));

export default useStyles;
