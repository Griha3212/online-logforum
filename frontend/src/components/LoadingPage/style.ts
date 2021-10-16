import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.2)',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: 1500,
    right: 0,
  },
}));

export default useStyles;
