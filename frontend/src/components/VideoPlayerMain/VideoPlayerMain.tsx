import React, { memo, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Iframe from 'react-iframe';
import { createPortal } from 'react-dom';
import useStyles from './style';

const VideoPlayerMain = (props: any) => {
  const classes = useStyles();

  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef;
  const inputRef: any = React.useRef<HTMLInputElement>(null); // note the passed in `null` arg

  const playVideo = (): any => {

  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      data-testid="loading-page"
    >
      <div
        className={props.classNameInner}
        ref={inputRef}
      >
        <Iframe
          // test url https://facecast.net/v/pybh3r?nolabel&noanimation&autorun=true&t=30
          url={props.videoURL}
          width="100%"
          height={props.height}
          position="relative"
          allow="fullscreen"
          onLoad={playVideo()}
        />
      </div>
    </Grid>

  );
};

export default memo(VideoPlayerMain);
