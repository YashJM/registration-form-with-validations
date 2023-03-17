import React from 'react';
import { CircularProgress, Backdrop } from '@mui/material';

type LoadingScreenProps = {
  [key: string]: any;
};

const LoadingScreen: React.FC<LoadingScreenProps> = (props) => {
  return (
    <Backdrop open={props.loading} style={{ zIndex: 1 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default LoadingScreen;
