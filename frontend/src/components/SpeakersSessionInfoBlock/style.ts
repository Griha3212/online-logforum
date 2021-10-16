import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  moderatorAvatarImgBlock: {

    [theme.breakpoints.up('xs')]: {

      textAlign: 'right',

    },

    [theme.breakpoints.up('sm')]: {

      maxWidth: '100%',

    },

  },

  moderatorAvatarImg: {

    [theme.breakpoints.up('xs')]: {

      maxWidth: '70%',

    },

    [theme.breakpoints.up('sm')]: {

      maxWidth: '100%',

    },

  },

  singleSpeakerBlock: {

    [theme.breakpoints.up('xs')]: {
      marginBottom: '15px',
      marginRight: '0px',
      flex: '0 0 100% !important',
      maxWidth: '100% !important',

    },

    [theme.breakpoints.up('sm')]: {
      marginbottom: '25px',
      marginRight: '0px',
      flex: '0 0 50% !important',
      maxWidth: '50% !important',

    },

    [theme.breakpoints.up('md')]: {

      marginRight: '0px',

      marginBottom: '0px',
      flex: '0 0 20% !important',
      maxWidth: '20% !important',

    },

    [theme.breakpoints.up('lg')]: {

      marginRight: '0px',

      marginbottom: '25px',
      flex: '0 0 20% !important',
      maxWidth: '20% !important',

    },
    [theme.breakpoints.up('xl')]: {

      marginRight: '0px',
      marginbottom: '25px',
      flex: '0 0 20% !important',
      maxWidth: '20% !important',

    },

  },

  loadZoomImg: {

    [theme.breakpoints.up('xs')]: {
      width: '60px',
      height: '60px',
      position: 'relative',
      bottom: '25px',
    },

    [theme.breakpoints.up('md')]: {
      width: '33px',
      height: '33px',
      position: 'relative',
      bottom: '25px',

    },

    [theme.breakpoints.up('lg')]: {
      width: '50px',
      height: '50px',
      position: 'relative',
      bottom: '20px',

    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      height: 'auto',

    },

  },

  sendContactsImg: {

    [theme.breakpoints.up('xs')]: {
      width: '60px',
      height: '60px',
      position: 'relative',
      bottom: '25px',
    },

    [theme.breakpoints.up('md')]: {
      width: '33px',
      height: '33px',
      position: 'relative',
      bottom: '25px',

    },

    [theme.breakpoints.up('lg')]: {
      width: '50px',
      height: '50px',
      position: 'relative',
      bottom: '20px',

    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      height: 'auto',

    },

  },

  loadPDFImg: {

    [theme.breakpoints.up('xs')]: {
      width: '60px',
      height: '60px',
      position: 'relative',
      bottom: '25px',

    },

    [theme.breakpoints.up('md')]: {
      width: '33px',
      height: '33px',
      position: 'relative',
      bottom: '25px',
    },

    [theme.breakpoints.up('lg')]: {
      width: '50px',
      height: '50px',
      position: 'relative',
      bottom: '20px',

    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      height: 'auto',

    },

  },

  pointerImg: {

    cursor: 'pointer',

  },

  disabledImg: {

    // pointerEvents: 'none',

  },

  popoverText: {

    padding: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      fontSize: '14px',
      lineHeight: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '14px',
      lineHeight: '0px',

    },

  },

  speakerAvatarInsideSessionParagraph: {

    textAlign: 'center',

  },

  speakerNameInsideSession: {

    fontFamily: 'Open Sans',
    fontWeight: 700,

    color: 'black',
    marginBottom: '0px',
    marginTop: '0px',
    textAlign: 'center',

    [theme.breakpoints.up('xs')]: {
      fontSize: '23px',
      lineHeight: '32px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4vw',
      lineHeight: '1.8vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '30px',
      lineHeight: '41px',

    },

  },

  speakerSecondNameInsideSession: {

    fontFamily: 'Open Sans',
    fontWeight: 700,

    color: 'black',
    marginBottom: '0px',
    marginTop: '0px',
    textAlign: 'center',

    [theme.breakpoints.up('xs')]: {
      marginBottom: '35px',
      fontSize: '23px',
      lineHeight: '32px',

    },

    [theme.breakpoints.up('sm')]: {
      marginBottom: '20px',

    },

    [theme.breakpoints.up('md')]: {
      marginBottom: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4vw',
      lineHeight: '1.8vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '30px',
      lineHeight: '41px',

    },

  },

  speakerAvatarInsideSession: {

    [theme.breakpoints.up('sm')]: {
      maxWidth: '100px',

    },

    [theme.breakpoints.up('md')]: {
      maxWidth: '79px',

    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: '90px',

    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '144px',

    },

  },

  smallScoreStarImg: {

    color: '#FF414A',

    [theme.breakpoints.up('xs')]: {
      fontSize: '2.5rem',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '15px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '22px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '30px',

    },

  },

  moderatorFullName: {

    fontFamily: 'Open Sans',
    fontWeight: 600,

    color: 'black',
    marginBottom: '0px',
    marginTop: '0px',

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
      lineHeight: '1.8vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '30px',
      lineHeight: '41px',

    },

  },

  sessionSpeakersBlock: {

    [theme.breakpoints.up('xs')]: {
      marginTop: '30px',
      display: 'flex',
      // flexDirection: 'row',
      // flexWrap: 'nowrap',
      overflow: 'auto',
      // overflowX: 'scroll',

      '&::-webkit-scrollbar': {
        height: '15px',

      },

      '&::-webkit-scrollbar-track': {
        backgroundColor: '#e3e3e3',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ff414a',
      },

    },

    [theme.breakpoints.up('sm')]: {
      marginTop: '30px',
      display: 'flex',
      overflow: 'auto',
      justifyContent: 'center',
      // flexDirection: 'row',
      // flexWrap: 'nowrap',
      // overflowX: 'scroll',

      '&::-webkit-scrollbar': {
        height: '15px',

      },

      '&::-webkit-scrollbar-track': {
        backgroundColor: '#e3e3e3',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ff414a',
      },

    },

    [theme.breakpoints.up('md')]: {
      marginTop: '30px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      overflow: 'visible',

    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '30px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      overflow: 'visible',

    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '80px',
      justifyContent: 'center',
      overflow: 'visible',
    },

  },

  moderatorInfoBlock: {

    // maxHeight: '120px',

    [theme.breakpoints.up('xs')]: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '0px',
      paddingLeft: '20px',

    },

    [theme.breakpoints.up('md')]: {
      marginTop: '5px',
      marginBottom: 'auto',
      marginLeft: '0px',
      paddingLeft: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '10px',
      marginBottom: 'auto',
      marginLeft: '0px',
      paddingLeft: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '18px',
      paddingLeft: '0px',

    },

  },

  moderatorContainerInfoBlock: {

    height: '120px',

    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '20px',
      justifyContent: 'center',

    },

    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '20px',
      justifyContent: 'space-around',

    },

  },

  moderatorHeaderText: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',

    backgroundColor: '#FF414A',
    fontSize: '20px',
    lineHeight: '30px',
    width: '135px',
    height: '31px',

    color: 'white',
    textAlign: 'center',

    [theme.breakpoints.up('xs')]: {
      fontSize: '4vw',
      lineHeight: '5.7vw',
      width: '28.7vw',
      height: '5.6vw',
      marginBottom: '13px',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.7vw',
      lineHeight: '3.2vw',
      width: '12vw',
      height: '3vw',
      marginBottom: '5px',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.1vw',
      lineHeight: '2.2vw',
      width: '7.5vw',
      height: '2vw',
      marginBottom: '11px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      lineHeight: '1.7vw',
      width: '6.7vw',
      height: '1.6vw',
      marginBottom: '13px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '20px',
      lineHeight: '30px',
      width: '135px',
      height: '31px',
      marginBottom: '8px',

    },

  },

  zoomPdfIconsItem: {

    display: 'flex',
    justifyContent: 'center',

  },

  speakersBlockHeader: {

    fontFamily: 'Gotham Pro Black',

    textTransform: 'uppercase',
    color: '#00124D',

    [theme.breakpoints.up('xs')]: {
      fontSize: '6.7vw',
      textAlign: 'center',
      marginTop: '40px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '4.7vw',
      lineHeight: '4.8vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '3.4vw',
      lineHeight: '4vw',
      marginTop: '10px',
      textAlign: 'left',
      marginLeft: '4vw',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '3.3vw',
      textAlign: 'left',
      marginLeft: '0vw',
      marginTop: '5px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '70px',
      lineHeight: '79px',
      textAlign: 'left',
      marginTop: '18px',
      marginLeft: '3vw',
    },

  },

  mainContainerBckg: {
    boxShadow: '0px 3px 60px #00000029',
    backgroundColor: 'white',
    // height: '827px',

    [theme.breakpoints.up('xs')]: {

      marginTop: '20px',

    },

    [theme.breakpoints.up('md')]: {
      padding: '0 60px',
      paddingTop: '68px',
      marginTop: '37px',
      paddingbottom: '25px',

    },

    [theme.breakpoints.up('lg')]: {
      padding: '0 106px',
      paddingTop: '68px',
      marginTop: '45px',
      paddingBottom: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 110px',
      paddingTop: '107px',
      paddingBottom: '91px',
      marginTop: '105px',

    },

  },

  moderatorImg: {

    [theme.breakpoints.up('xs')]: {

    },

    [theme.breakpoints.up('md')]: {

    },

    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '117px',

    },

  },

  mainSessionInfoContainer: {

  },

  mxAuto: {

    margin: '0 auto',

  },

  textCenter: {

    textAlign: 'center',

  },

  goToZoomButton: {

    fontFamily: 'Gotham Pro Medium',
    fontSize: '21px',
    lineHeight: '23px',
    backgroundColor: '#2D8CFF',
    height: '53px',
    width: '302px',
    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',

  },

}));

export default useStyles;
