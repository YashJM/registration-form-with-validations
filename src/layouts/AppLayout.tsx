import React from 'react';
import { Box } from '@mui/material';

import Navbar from '../components/Navbar';

type AppLayoutProps = {
  [key: string]: any;
};

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <Navbar />
      <Box pt={'100px'}>
        {children}
      </Box>
    </div>
  );
};
export default AppLayout;
