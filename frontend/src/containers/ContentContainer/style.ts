import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '104px 24px 32px',
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '88px 24px 32px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '104px 24px 32px',
    },
  },
}));

export default useStyles;
