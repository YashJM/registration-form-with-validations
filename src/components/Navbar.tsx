import { Box } from '@mui/material';
import React from 'react';

import Logo from '../assets/idea-theorem-logo.png';

type NavbarProps = {
  [key: string]: any;
};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      px={'10%'}
      bgcolor={'#252F3D'}
    >
      <a href="/">
        <Box py={'12px'} component="img" alt="Idea Theorem Logo" src={Logo} />
      </a>
    </Box>
  );
};
export default Navbar;
