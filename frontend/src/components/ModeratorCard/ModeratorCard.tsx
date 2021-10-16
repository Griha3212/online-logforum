import React, { memo } from 'react';
import {
  Grid, CircularProgress, Typography, Button,
} from '@material-ui/core';
import Iframe from 'react-iframe';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import useStyles from './style';
import VideoPlayerMain from '../VideoPlayerMain/VideoPlayerMain';

const ModeratorCard = (props: any) => {
  const classes = useStyles();

  return (
    <Grid xl={2}>

      <p><img src={props.moderatorImgSrc || '../../../public/img/speakersImg/noAvatar.svg'} alt="" /></p>
      <p>
        {`${props.moderatorLastName || 'ФАМИЛИЯ'}`}
        <br />
        {`${props.moderatorFirstName || 'имя'}`}
      </p>

    </Grid>
  );
};

export default memo(ModeratorCard);
