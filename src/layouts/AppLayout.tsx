import React from 'react';
import Navbar from '../components/Navbar';

type AppLayoutProps = {
  [key: string]: any;
};

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default AppLayout;
