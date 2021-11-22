import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  partnerImgContainer: {

    textAlign: 'center',
    marginLeft: '0px',
    paddingTop: '0px',

    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      paddingTop: '25px',
      marginTop: '0px',
    },

    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      paddingTop: '15px',
      padding: '50px 0px',
      marginBottom: '0px',
      marginTop: '0px !important',
      // maxWidth: '28%',
      // flexBasis: '28%',
    },

    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      marginBottom: '0px',
      padding: '0px 0px',
      // maxWidth: '30%',
      // flexBasis: '30%',
      marginTop: 'auto !important',
    },

    [theme.breakpoints.up('lg')]: {
      // maxWidth: '30%',
      // flexBasis: '30%',
      paddingTop: '5%',
    },

    [theme.breakpoints.up('xl')]: {
      padding: '0px',
      maxWidth: '28%',
      flexBasis: '28%',
    },

  },

  imgPartnerP: {

    display: 'flex',

    [theme.breakpoints.up('sm')]: {
      height: '150px',
      marginBottom: '0px',
    },

    [theme.breakpoints.up('md')]: {
      height: '150px',
      marginBottom: '0px',
    },

    [theme.breakpoints.up('lg')]: {
      height: '100px',
      marginBottom: '55px',
    },

    [theme.breakpoints.up('xl')]: {

      height: '100px',
      marginBottom: '107px',
    },

  },

  partnerImgContainerBottom: {

    // maxHeight: '100px',
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    marginRight: '15px',
    marginLeft: '15px',

    [theme.breakpoints.down('xs')]: {

      maxWidth: '45% !important',
      flexBasis: '45% !important',
      margin: '0 auto',
      minHeight: '80px',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },

    [theme.breakpoints.down('sm')]: {

      maxWidth: '45%',
      flexBasis: '45%',
      margin: '0 auto',
      // marginBottom: '20px !important',
    },

    [theme.breakpoints.down('md')]: {

      maxWidth: '12%',
      flexBasis: '12%',
      margin: '0 auto',
      // marginBottom: '20px !important',
    },

  },

  imgPartner: {

    [theme.breakpoints.down('xs')]: {
      marginBottom: '73px',
      width: '75% !important',
    },

    [theme.breakpoints.up('sm')]: {
      marginBottom: '73px',
      width: '70% !important',
    },

    [theme.breakpoints.up('md')]: {
      marginBottom: '35px',
      width: '70% !important',
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: '0px',
      width: '75% !important',
    },

    [theme.breakpoints.up('xl')]: {

      width: '75% !important',
    },

  },

  partnerText: {

    fontFamily: 'Proxima Nova Black',
    textAlign: 'left',
    color: '#172645',

    [theme.breakpoints.down('xs')]: {
      fontSize: '5vw',
    },

    [theme.breakpoints.up('sm')]: {

    },

    [theme.breakpoints.up('md')]: {

    },

    [theme.breakpoints.up('lg')]: {
      // marginBottom: '20px',
    },

    [theme.breakpoints.up('xl')]: {

      fontSize: '24px',
      lineHeight: '41px',
      marginBottom: '16px',
      marginTop: '0px',
    },

  },

  partnersContainerImg: {

    gap: '86px',

    [theme.breakpoints.up('xs')]: {
      justifyContent: 'center',
    },

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },

    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },

    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-start',
      // width: '80%',
    },

  },

  partnersContainerImg2: {

    [theme.breakpoints.up('xs')]: {
      justifyContent: 'center',

    },

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',

    },

    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',

    },

    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-between',

    },

    [theme.breakpoints.up('xl')]: {

    },

  },

  partnersContainerImg3: {

    maxHeight: '150px',

    [theme.breakpoints.up('xs')]: {
      justifyContent: 'center',
      maxHeight: '100%',
    },

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },

    [theme.breakpoints.up('md')]: {
      maxHeight: '100%',
    },

    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-between',
      marginTop: '30px !important',
      maxHeight: '150px',
    },

    [theme.breakpoints.up('xl')]: {
      marginTop: '15px !important',
    },

  },

  partnersHeader: {

    [theme.breakpoints.down('xs')]: {
      marginBottom: '47px',
    },

  },

  infoPartnersHeader: {
    marginBottom: '30px',

    [theme.breakpoints.down('xs')]: {
      marginBottom: '47px',
      textAlign: 'center',
    },

  },

  cursorPointer: {

    cursor: 'pointer',

  },

  bottomLink: {

    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },

  },

  footerLogoAndPhone: {

    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      marginTop: '12px !important',
      marginBottom: '22px !important',
    },

    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      marginTop: '12px !important',
      marginBottom: '22px !important',
    },

    [theme.breakpoints.up('lg')]: {
      textAlign: 'right',
      marginTop: 'auto !important',
      marginBottom: 'auto !important',
    },

  },

  footerTextDate: {

    fontFamily: 'Gotham Pro Light',

    marginTop: '0px',

    color: 'white',

    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      marginBottom: '22px !important',
    },

    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      marginBottom: '22px !important',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.6vw',
      marginBottom: '0px !important',
      marginTop: '0px !important',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2vw',
      marginBottom: '0px !important',
      marginTop: '0px !important',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '24px',
      lineHeight: '27px',
      marginBottom: '0px !important',
      marginTop: '0px !important',
    },

  },

  footerOrganizatorText: {
    fontFamily: 'Proxima Nova Thin',
    fontSize: '10px',
    color: 'white',
    textAlign: 'left',
  },

  socialFooterImg: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2vw',
    },
    [theme.breakpoints.up('xl')]: {
      width: 'auto',
    },

  },

  footerLogoContainer: {

    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      marginBottom: '22px !important',
      marginTop: '32px !important',
    },

    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      marginBottom: '22px !important',
      marginTop: '32px !important',
    },

    [theme.breakpoints.up('md')]: {
      marginBottom: 'auto !important',
      marginTop: 'auto !important',
    },

  },

  footerContainerInner: {

    [theme.breakpoints.up('xs')]: {
      padding: '0 0px',
      justifyContent: 'center',

    },

    [theme.breakpoints.up('sm')]: {
      padding: '0 0px',
      justifyContent: 'center',

    },

    [theme.breakpoints.up('md')]: {
      padding: '0 70px',
      justifyContent: 'space-between',

    },

    [theme.breakpoints.up('lg')]: {
      padding: '0 220px',
      justifyContent: 'space-between',

    },

  },

  footerContainer: {

    backgroundColor: '#00143D',

    [theme.breakpoints.up('xs')]: {
      marginTop: '25px',
      height: 'auto',
    },

    [theme.breakpoints.up('sm')]: {
      height: 'auto',
      marginTop: '35px',
    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '100px',
      height: '170px',
    },

  },

  imgFluid: {

    width: '100%',
    height: 'auto',

  },

  partnersContainer: {

    marginTop: '120px',

    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: '70px',
    },

  },

  infoPartnersContainer: {
    marginTop: '200px',

    [theme.breakpoints.down('lg')]: {
      marginTop: '150px',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '70px',
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: '100px',
    },

  },

  containerForPartnersTop: {

    [theme.breakpoints.up('xs')]: {

    },

    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {
      position: 'relative',
      zIndex: 2,
      backgroundColor: 'white',
      paddingRight: '135px',
      paddingTop: '26px',

    },

  },

  singleTopPartnerContainer: {

    [theme.breakpoints.up('xs')]: {

    },

    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {
      marginRight: '116px',
      marginBottom: '28px',

    },

  },

  multicolorLine: {

    [theme.breakpoints.up('xs')]: {

    },

    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {
      position: 'absolute',
      left: '0px',
      bottom: '0px',

    },

  },

  greyDecoratedLine: {

    [theme.breakpoints.up('xs')]: {

    },

    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

      width: '100%',
      marginBottom: '22px',

    },

  },

  topPartnersText: {
    [theme.breakpoints.up('xs')]: {

    },

    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {
      fontFamily: 'Gotham Pro Medium',
      fontSize: '11px',
      lineHeight: '12px',
      marginBottom: '16px',
    },

  },

  mainVideoContainer: {

    // background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(235,235,235,1) 100%);',

    [theme.breakpoints.up('xs')]: {
      height: '270px',
    },

    [theme.breakpoints.up('sm')]: {
      height: '270px',
    },
    [theme.breakpoints.up('md')]: {
      height: '720px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '720px',

    },
    [theme.breakpoints.up('xl')]: {
      height: '720px',
      // paddingTop: '58px',
      // paddingLeft: '78px',
      // paddingRight: '78px',

    },

  },

  channelContainer: {

    maxWidth: '29%',
    cursor: 'pointer',
    flexDirection: 'column',
    flexWrap: 'nowrap',

    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',

      '&:not(:last-child)': {

        marginBottom: '20px',
      },
    },

  },

  chooseChannelSessionLetter: {

    fontFamily: 'Open Sans',
    fontWeight: 700,
    color: 'black',
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'center',

    [theme.breakpoints.up('xs')]: {
      fontSize: '9.7vw',
      lineHeight: '12.8vw',
      paddingTop: '36px',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.8vw',
      lineHeight: '3.5vw',
      paddingTop: '20px',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '2.5vw',
      lineHeight: '3.5vw',
      paddingTop: '18px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '2.4vw',
      lineHeight: '3.3vw',
      paddingTop: '0px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '48px',
      lineHeight: '55px',
      paddingTop: '0px',
    },

  },

  chooseChannelSessionDescription: {

    fontFamily: 'Open Sans',
    fontWeight: 400,

    color: 'black',
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '4.6vw',
      lineHeight: '6.2vw',
      paddingBottom: '50px',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8vw',
      lineHeight: '2.5vw',
      paddingBottom: '0px',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
      lineHeight: '1.5vw',
      paddingBottom: '0px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1vw',
      lineHeight: '1.5vw',
      paddingBottom: '0px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '25px',
      lineHeight: '34px',
    },

  },

  logforumFooterLogo: {

    [theme.breakpoints.up('lg')]: {
      width: '11.5vw',
    },
    [theme.breakpoints.up('xl')]: {
      width: 'auto',
    },

  },

  channelContainerBottomPart: {

    backgroundColor: '#ECF1F1',

    [theme.breakpoints.up('lg')]: {
      padding: '30px 0px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '44px 0px',
    },

  },

  mainContainerBckgChangeSession: {

    [theme.breakpoints.up('xs')]: {
      padding: '0px',
      marginTop: '0px',
    },

    [theme.breakpoints.up('sm')]: {
      padding: '0px',
      marginTop: '0px',
    },

    [theme.breakpoints.up('md')]: {
      padding: '0px 33px',
      marginTop: '0px',
    },

    [theme.breakpoints.up('lg')]: {
      padding: '0 196px',
    },

  },

  otherSessionContainerInner: {

    [theme.breakpoints.up('sm')]: {

      marginBottom: '90px',

    },

    [theme.breakpoints.up('lg')]: {

      marginBottom: '114px',

    },

    [theme.breakpoints.up('xl')]: {

      marginBottom: '135px',

    },

  },

  mainContainerBckgChangeSessionFirst: {

    [theme.breakpoints.down('xl')]: {

      marginTop: '0',
      marginBottom: '25px',

    },

    [theme.breakpoints.down('lg')]: {

      marginTop: '100px',
      marginBottom: '0px',

    },

    [theme.breakpoints.down('md')]: {
      padding: '0px 33px',
      marginTop: '0',
      textAlign: 'left',
      marginBottom: '60px',

    },

    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      marginTop: '0',
      textAlign: 'center',
      marginBottom: '47px',
    },

    [theme.breakpoints.down('xs')]: {
      padding: '0px',
      marginTop: '0',
      textAlign: 'center',
      marginBottom: '22px',
    },

  },

  speakersBlockHeader: {

    fontFamily: 'Proxima Nova Black',
    fontSize: '70px',

    color: '#000000',

    [theme.breakpoints.up('xs')]: {
      fontSize: '6.7vw',
      lineHeight: '6.8vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '4.7vw',
      lineHeight: '4.8vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '3.4vw',
      lineHeight: '3.8vw',
      marginLeft: '0px',
      marginRight: '0px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '3.3vw',
      lineHeight: '79px',
      marginTop: '0px',
      marginLeft: '0px',

    },

    [theme.breakpoints.up('xl')]: {
      fontSize: '78px',
      lineHeight: '72px',
      marginTop: '0px',
      marginLeft: '0px',
    },
  },

  thanksText: {
    color: '#FF414A',
  },

  thanksTextSmall: {
    fontFamily: 'Proxima Nova Regular',
    maxWidth: '915px',

    [theme.breakpoints.up('xl')]: {
      fontSize: '24px',
      lineHeight: '32px',
    },
  },

  changeSessionMainContainer: {

    backgroundColor: '#ECF1F1',

    marginTop: '140px',

    [theme.breakpoints.down('lg')]: {
      marginTop: '87px',
      backgroundColor: '#ECF1F1',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '72px',
      backgroundColor: '#ECF1F1',
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
      backgroundColor: 'white',
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: '0px',
      backgroundColor: 'white',
    },

  },
  innerContainer: {

    width: '100%',
    position: 'relative',
    zIndex: 2,
    maxWidth: '1520px',
    margin: '0 auto',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '64px',
      paddingRight: '64px',

    },

    [theme.breakpoints.down('sm')]: {
      paddingLeft: '50px',
      paddingRight: '50px',

    },

    [theme.breakpoints.down('xs')]: {
      paddingLeft: '24px',
      paddingRight: '24px',

    },

  },

  blackBckgContainer: {

    backgroundColor: '#000000',
    height: '458px',
    position: 'absolute',
    zIndex: 1,

    [theme.breakpoints.up('xs')]: {
      height: '900px',
    },

    [theme.breakpoints.up('sm')]: {
      height: '735px',
    },

    [theme.breakpoints.up('lg')]: {
      height: '50.5vw',
    },
    [theme.breakpoints.up('xl')]: {
      height: '458px',
    },

  },

  arrow: {
    position: 'absolute',
    width: '120px',
    height: '110px',
    top: '400px',
    left: '201px',
  },

  arrowImage: {
    position: 'absolute',
    width: '120px',
    height: '110px',
  },

  blackBckgContainerShort: {

    backgroundColor: '#000000',

    position: 'absolute',
    zIndex: 1,

    [theme.breakpoints.up('xs')]: {
      height: '175px',
    },

    [theme.breakpoints.up('sm')]: {
      height: '260px',
    },

    [theme.breakpoints.up('md')]: {
      height: '24.5vw',
    },

    [theme.breakpoints.up('lg')]: {
      height: '16.5vw',
    },
    [theme.breakpoints.up('xl')]: {
      height: '458px',
    },

  },

  myAuto: {

    marginTop: 'auto',
    marginBottom: 'auto',

  },

  topPart: {

    [theme.breakpoints.up('xs')]: {
      height: '100px',
    },

    [theme.breakpoints.up('sm')]: {
      height: '100px',
    },

    [theme.breakpoints.up('lg')]: {
      height: '183px',
    },
    [theme.breakpoints.up('xl')]: {
      height: '183px',
    },

  },

  conferenceTopText: {

    fontFamily: 'Proxima Nova Bold',
    textTransform: 'uppercase',
    color: 'white',
    // marginLeft: '7vw',

    [theme.breakpoints.up('xs')]: {
      fontSize: '5.4vw',
      textAlign: 'left',
      // lineHeight: '56px',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '4.4vw',
      textAlign: 'left',
      // lineHeight: '56px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '2vw',
      textAlign: 'center',
      // lineHeight: '56px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.2vw',
      lineHeight: '2.3vw',
      textAlign: 'center',
    },

  },
  blackBckgTop: {
    backgroundColor: '#000000',
  },
  logforumTopLogoImg: {

    position: 'relative',
    top: '5px',
    cursor: 'pointer',

    [theme.breakpoints.up('xs')]: {
      width: '34vw',
      // height: '38px',
    },

    [theme.breakpoints.up('sm')]: {
      width: '25vw',
      // height: '38px',
    },

    [theme.breakpoints.up('lg')]: {
      width: '18vw',
      // height: '38px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '374px',
      height: '61px',
    },

  },

  mainContainer: {

    [theme.breakpoints.up('xs')]: {
      paddingLeft: '35px',
      paddingRight: '35px',

    },

    [theme.breakpoints.up('sm')]: {
      paddingLeft: '34px',
      paddingRight: '34px',

    },

    [theme.breakpoints.up('lg')]: {
      paddingLeft: '200px',
      paddingRight: '200px',

    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '200px',
      paddingRight: '200px',
    },

  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
