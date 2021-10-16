import React, { FC } from 'react';
import { Hidden } from '@material-ui/core';
import useStyles from './style';

export const ContentContainer: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>

      <div className={classes.container}>
        {children}
      </div>
    </>
  );
};

export default ContentContainer;
