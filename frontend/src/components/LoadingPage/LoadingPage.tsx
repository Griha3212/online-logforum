import React, { memo } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './style';

const LoadingPage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      justify="center"
      alignItems="center"
      data-testid="loading-page"
    >
      <CircularProgress />
    </Grid>
  );
};

export default memo(LoadingPage);
