import React from 'react';
import { Box, Card } from '@mui/material';

import RegistrationForm from '../components/RegistrationForm';

const Registration: React.FC = () => {
  return (
    <Box width={'100%'}>
      <Box maxWidth={'500px'} margin={'0 auto'}>
        <Box
          component={'span'}
          sx={{ fontWeight: 'bold', fontSize: '20px', mb: '15px' }}
        >
          Create User Account
        </Box>
        <Box className="customCard">
          <RegistrationForm />
        </Box>
      </Box>
    </Box>
  );
};
export default Registration;
