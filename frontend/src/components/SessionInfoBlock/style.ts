import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  myAuto: {

    marginTop: 'auto',
    marginBottom: 'auto',

  },

  noLeftPadding: {

    [theme.breakpoints.up('xs')]: {
      paddingLeft: '0px !important',

    },

    [theme.breakpoints.up('lg')]: {
      paddingTop: '0px !important',
      position: 'relative',
      bottom: '0px',
      paddingLeft: '0.6vw !important',
      paddingBottom: '0px !important',

    },

    [theme.breakpoints.up('xl')]: {
      paddingLeft: '71px !important',
      paddingBottom: '20px',

    },

  },

  popoverText: {

    padding: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      fontSize: '14px',
      lineHeight: '18px',
      textAlign: 'center',
      padding: '5px',
      marginBottom: '5px',
      marginTop: '5px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '12px',
      lineHeight: '0px',
      padding: '7px',
      textAlign: 'left',
      marginBottom: '15px',
      marginTop: '15px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '14px',
      lineHeight: '0px',
      padding: '7px',
      textAlign: 'left',

    },

  },

  MuiRating: {

    '&root': {

      color: '#F8F9F9',

    },

    [theme.breakpoints.up('xl')]: {
      '&root': {

        margingBottom: '10px',

      },
    },

  },

  rateSpeakerStarsImg: {

    color: '#FF414A',

    [theme.breakpoints.up('xs')]: {
      fontSize: '3.2rem',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4rem',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.8rem',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '28px',
      position: 'relative',
    },

  },

  speakerInfoBlock: {

    [theme.breakpoints.down('sm')]: {
      marginBottom: '47px',

    },

  },

  svg: {

  },

  speakerAvatarImg: {
    zIndex: 2,

    // borderRadius: '50%',
    // borderRight: '2px solid #FF414A',
    // borderTopRightRadius: '50%',
    // borderWidth: '1px 2px 3px 4px',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '20vw',

    },

    [theme.breakpoints.up('md')]: {
      maxWidth: '10vw',

    },

    [theme.breakpoints.up('lg')]: {
      width: '6vw',

    },
    [theme.breakpoints.up('xl')]: {
      width: '102px',
    },

  },

  speakerAvatarBlock: {
    position: 'relative',
    display: 'flex',

    [theme.breakpoints.up('xl')]: {
      width: '100px',
      height: '100px',
      marginLeft: '33px',
    },
  },

  innerSpeakerAvatarBlock: {
    backgroundColor: 'black',
    borderRadius: '50%',
    width: '103px',
    height: '103px',

  },

  speakerFullCompanyText: {

    fontFamily: 'Proxima Nova Regular',

    color: 'white',
    marginTop: '5px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4vw',
      lineHeight: '1.8vw',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
      lineHeight: '1.6vw',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '0.8vw',
      lineHeight: '1vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '15px',
      lineHeight: '20px',
    },

  },

  speakerFullNameText: {

    fontFamily: 'Proxima Nova Bold',

    color: 'white',
    marginTop: '5px',
    marginBottom: '0px',

    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
      lineHeight: '2.8vw',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4vw',
      lineHeight: '1.8vw',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '21px',
      lineHeight: '22px',
    },

  },

  speakerHeaderText: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',

    backgroundColor: '#FF414A',

    color: 'white',
    textAlign: 'center',
    marginBottom: '0px',

    [theme.breakpoints.up('xs')]: {

      width: '15.5vw',
      height: '5.3vw',
      fontSize: '3vw',
      lineHeight: '5.7vw',
    },

    [theme.breakpoints.up('sm')]: {

      width: '11vw',
      height: '3vw',
      fontSize: '1.7vw',
      lineHeight: '3.3vw',
    },

    [theme.breakpoints.up('md')]: {

      width: '7vw',
      height: '2.3vw',
      fontSize: '1.4vw',
      lineHeight: '2.3vw',
    },

    [theme.breakpoints.up('lg')]: {

      width: '4.5vw',
      height: '1.6vw',
      fontSize: '1vw',
      lineHeight: '1.7vw',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '20px',
      lineHeight: '30px',
      height: '31px',
      width: '93px',
    },

  },

  sessionNameText: {

    fontFamily: 'Gotham Pro Black',
    // fontWeight: 700,

    color: 'white',

    marginBottom: '38px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '5vw',
      lineHeight: '6.9vw',
      marginTop: '17px',
      paddingLeft: '10px',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.8vw',
      lineHeight: '3.5vw',
      marginTop: '11px',
      width: '80%',
      marginBottom: '17px',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '2.2vw',
      lineHeight: '2.5vw',
      marginTop: '14px',
      width: '80%',
      marginBottom: '21px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.7vw',
      lineHeight: '2.4vw',
      marginTop: '25px',
      width: '80%',
      marginBottom: '38px',
      paddingLeft: '20px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '36px',
      lineHeight: '51px',
      marginTop: '41px',
      width: '80%',
      marginBottom: '38px',
      paddingLeft: '33px',
    },

  },

  sessionNameText100: {

    fontFamily: 'Gotham Pro Black',
    // fontWeight: 700,

    color: 'white',

    marginBottom: '38px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '5vw',
      lineHeight: '6.9vw',
      marginTop: '17px',
      paddingLeft: '10px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.8vw',
      lineHeight: '3.5vw',
      marginTop: '11px',
      width: '100%',
      marginBottom: '17px',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.9vw',
      lineHeight: '2.5vw',
      marginTop: '14px',
      width: '100%',
      marginBottom: '16px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.7vw',
      lineHeight: '2.4vw',
      marginTop: '25px',
      width: '100%',
      marginBottom: '38px',
      paddingLeft: '20px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '36px',
      lineHeight: '51px',
      marginTop: '41px',
      width: '100%',
      marginBottom: '38px',
      paddingLeft: '33px',
    },

  },

  sessionLetterTextLong: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',

    backgroundColor: '#FF414A',

    color: 'white',
    textAlign: 'center',
    marginBottom: '0px',

    [theme.breakpoints.up('xs')]: {
      width: '35vw',
      height: '6vw',
      fontSize: '3vw',
      lineHeight: '5.9vw',

    },

    [theme.breakpoints.up('sm')]: {
      width: '23vw',
      height: '3.8vw',
      fontSize: '2vw',
      lineHeight: '4vw',

    },

    [theme.breakpoints.up('md')]: {
      width: '26vw',
      height: '3.8vw',
      fontSize: '2.2vw',
      lineHeight: '4vw',

    },

    [theme.breakpoints.up('lg')]: {
      width: '23vw',
      height: '3.8vw',
      fontSize: '2vw',
      lineHeight: '4.1vw',
    },

    [theme.breakpoints.up('xl')]: {
      width: '500px',
      height: '71px',
      fontSize: '42px',
      lineHeight: '71px',
    },

  },

  sessionLetterText: {

    marginTop: '0px',
    fontFamily: 'Gotham Pro Bold',

    backgroundColor: '#FF414A',

    color: 'white',
    textAlign: 'center',
    marginBottom: '0px',

    [theme.breakpoints.up('xs')]: {
      width: '28vw',
      height: '6vw',
      fontSize: '3vw',
      lineHeight: '5.9vw',

    },

    [theme.breakpoints.up('sm')]: {
      width: '16vw',
      height: '3.8vw',
      fontSize: '2vw',
      lineHeight: '4vw',

    },

    [theme.breakpoints.up('md')]: {
      width: '14vw',
      height: '3.8vw',
      fontSize: '2.2vw',
      lineHeight: '4vw',

    },

    [theme.breakpoints.up('lg')]: {
      width: '14vw',
      height: '3.8vw',
      fontSize: '2vw',
      lineHeight: '4.1vw',
    },

    [theme.breakpoints.up('xl')]: {
      width: '268px',
      height: '71px',
      fontSize: '42px',
      lineHeight: '71px',
    },

  },

  textCenter: {
    textAlign: 'center',
  },

  net: {
    position: 'absolute',

    [theme.breakpoints.up('lg')]: {
      width: '40px',
      height: '203px',
    },

    [theme.breakpoints.up('xl')]: {
      width: '53px',
      height: '269px',
    },

  },

  netImage: {
    position: 'relative',

    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },

    [theme.breakpoints.up('xl')]: {
      width: '53px',
      height: '269px',
      top: '48px',
      right: '53px',
      display: 'block',
    },
  },

  innerBlack: {

    backgroundColor: 'black',
    width: '100%',

    [theme.breakpoints.up('xs')]: {
      padding: '0 22px',
      paddingTop: '18px',
      paddingBottom: '42px',
      position: 'relative',
      top: '-1px',
    },

    [theme.breakpoints.up('md')]: {
      padding: '0 56px',
      paddingTop: '31px',
      paddingBottom: '23px',
      top: '0px',
    },

    [theme.breakpoints.up('lg')]: {
      padding: '0 67px',
      paddingTop: '31px',
      paddingBottom: '30px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 196px',
      paddingTop: '36px',
      paddingBottom: '93px',
    },

  },

  innerWhiteContainer: {

    backgroundColor: 'black',
    height: 'auto',

    width: '100%',

    [theme.breakpoints.up('xs')]: {
      padding: '0 22px',
      paddingTop: '14px',
    },

    [theme.breakpoints.up('md')]: {
      padding: '0 56px',
      paddingTop: '17px',
      paddingRight: '0px',
      paddingBottom: '24px',
    },

    [theme.breakpoints.up('lg')]: {
      padding: '0 67px',
      paddingTop: '34px',
      minHeight: '190px',
      paddingRight: '0px',
      paddingBottom: '36px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 196px',
      paddingTop: '39px',
      minHeight: '190px',
      paddingRight: '0px',
      paddingBottom: '48px',
    },

  },

  redLeftLineP: {

    marginTop: '0px',

    [theme.breakpoints.up('xs')]: {
      marginTop: '5px',
    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '0px',
    },

    [theme.breakpoints.up('xl')]: {
      marginTop: '0px',
    },

  },

  changeSessionPLong: {

    fontFamily: 'Gotham Pro',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '0px',

    [theme.breakpoints.up('xs')]: {
      marginTop: '0px',
    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '0px',
      fontSize: '17px',
      lineHeight: '18px',
      position: 'relative',
      right: '2vw',
    },

    [theme.breakpoints.up('xl')]: {
      marginTop: '0px',
      fontSize: '22px',
      lineHeight: '24px',
      position: 'relative',
      right: '2vw',
    },

  },

  reloadImg: {

    [theme.breakpoints.up('xs')]: {
      width: '11px',
      height: '11px',
      position: 'relative',
      top: '1px',
    },

    [theme.breakpoints.up('lg')]: {
      width: '15px',
      height: '15px',
      position: 'relative',
      top: '2px',
    },

    [theme.breakpoints.up('xl')]: {
      width: '19px',
      height: '19px',
    },

  },

  changeSessionP: {

    fontFamily: 'Gotham Pro',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '0px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '3vw',
      marginTop: '0px',
    },

    [theme.breakpoints.up('md')]: {
      marginTop: '0px',
      fontSize: '1.3vw',
      lineHeight: '1.4vw',
      position: 'relative',
      right: '13vw',
    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '0px',
      fontSize: '1.3vw',
      lineHeight: '1.7vw',
      position: 'relative',
      right: '10vw',
    },

    [theme.breakpoints.up('xl')]: {
      marginTop: '0px',
      fontSize: '22px',
      lineHeight: '24px',
      position: 'relative',
      right: '14vw',
    },

  },

  heightFitContent: {

    [theme.breakpoints.up('xs')]: {

    },

    [theme.breakpoints.up('md')]: {
      height: 'fit-content',
    },

    [theme.breakpoints.up('lg')]: {
      height: 'fit-content',
    },

    [theme.breakpoints.up('xl')]: {
      height: 'fit-content',
    },

  },

  redLeftLine: {

    [theme.breakpoints.up('xs')]: {
      marginRight: '15px',
      width: '7px',
      height: '21px',
      backgroundColor: '#FF414A',
      border: 'none',
      marginTop: '0px',
      position: 'relative',
      bottom: '5px',
    },

    [theme.breakpoints.up('lg')]: {
      marginRight: '15px',
      width: '11px',
      height: '33px',
      backgroundColor: '#FF414A',
      border: 'none',
      marginTop: '0px',
      position: 'relative',
      bottom: '5px',
    },

    [theme.breakpoints.up('xl')]: {
      marginRight: '15px',
      width: '18px',
      height: '52px',
      backgroundColor: '#FF414A',
      border: 'none',
      marginTop: '0px',
      position: 'relative',
      bottom: '5px',
    },

  },

  speakerThemeWord: {

    fontFamily: 'Proxima Nova Bold',

    color: 'white',
    marginTop: '0px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '4.5vw',
      lineHeight: '5.8vw',
      marginBottom: '12px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.4vw',
      lineHeight: '3.5vw',
      marginBottom: '50px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
      lineHeight: '2vw',
      marginBottom: '17px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2vw',
      lineHeight: '1.5vw',
      marginBottom: '22px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '24px',
      lineHeight: '32px',
      marginBottom: '22px',

    },

  },

  speakerTheme: {

    fontFamily: 'Proxima Nova Bold',

    color: 'white',
    marginTop: '0px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '4.5vw',
      lineHeight: '5.8vw',
      marginBottom: '25px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2.4vw',
      lineHeight: '3.5vw',
      marginBottom: '25px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.8vw',
      lineHeight: '2.4vw',
      marginBottom: '25px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4vw',
      lineHeight: '1.9vw',
      marginBottom: '25px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '29px',
      lineHeight: '40px',
      marginBottom: '88px',

    },

  },

  sessionPartnerImgP: {

    [theme.breakpoints.up('lg')]: {
      textAlign: 'right',
      // marginBottom: '30px',
    },

    [theme.breakpoints.up('xl')]: {
      textAlign: 'right',
      // marginBottom: '48px',
    },

  },

  imgFluid: {

    width: '100%',
    height: 'auto',

  },

  sessionPartnerWord: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    color: 'white',
    textAlign: 'center',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      lineHeight: '20px',
      marginBottom: '14px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
      lineHeight: '2.5vw',
      marginBottom: '7px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.4vw',
      lineHeight: '2.3vw',
      marginBottom: '7px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
      lineHeight: '1.7vw',
      marginBottom: '18px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '21px',
      lineHeight: '34px',
      marginBottom: '30px',
      paddingLeft: '15px',
    },

  },

  rateSpeakerText: {

    fontFamily: 'Proxima Nova Light',

    color: 'white',
    marginTop: '0px',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      lineHeight: '20px',
      marginBottom: '14px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
      lineHeight: '2.5vw',
      marginBottom: '7px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.7vw',
      lineHeight: '2.3vw',
      marginBottom: '7px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
      lineHeight: '1.7vw',
      marginBottom: '18px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '22px',
      marginBottom: '9px',
      paddingTop: '36px',
    },

  },

  loadPresenationButton: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#FF414A',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',
    transition: '0.2s',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',
      marginBottom: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '15px',
      marginBottom: '0px',

    },

    '&:hover': {
      backgroundColor: '#1B3074',
      border: '1px solid #FF414A',
      color: '#FF414A',
      transition: '0.2s',
    },

  },

  sendContactsButton: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#8A8A8A',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '11px',
    },

    '&:hover': {
      backgroundColor: '#1B3074',
      border: '1px solid #8A8A8A',
      color: '#8A8A8A',
      transition: '0.2s',
    },

  },

  takeAPartInRafflePrizesButton: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#8000FF',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '11px',
    },

    '&:hover': {
      backgroundColor: '#1B3074',
      border: '1px solid #8000FF',
      color: '#8000FF',
      transition: '0.2s',
    },

  },

  sendContactsButtonSuccess: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#24A553',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',
    pointerEvents: 'none',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '11px',
    },

    '&:hover': {
      backgroundColor: '#24A553',
      border: '1px solid #24A553',
      color: 'white',
      transition: '0.2s',
    },

  },

  takeAPartInRafflePrizesButtonSuccess: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#24A553',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',
    pointerEvents: 'none',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '11px',
    },

    '&:hover': {
      backgroundColor: '#24A553',
      border: '1px solid #24A553',
      color: 'white',
      transition: '0.2s',
    },

  },

  goToZoomButton: {

    fontFamily: 'Gotham Pro Medium',

    backgroundColor: '#2D8CFF',

    color: 'white',
    textAlign: 'center',
    borderRadius: '0px',
    textTransform: 'initial',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      height: '56px',
      width: '250px',
      marginTop: '0px',

    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9vw',
      height: '7.7vw',
      width: '100%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.3vw',
      height: '3.7vw',
      width: '82%',
      marginTop: '0px',

    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
      height: '3.5vw',
      width: '100%',
      marginTop: '0px',

    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '17px',
      lineHeight: '19px',
      height: '53px',
      width: '286px',
      marginTop: '11px',
    },

    '&:hover': {
      backgroundColor: '#1B3074',
      border: '1px solid #2D8CFF',
      color: '#2D8CFF',
      transition: '0.2s',
    },

  },

}));

export default useStyles;
