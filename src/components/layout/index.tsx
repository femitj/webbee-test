import React from 'react';
import Navbar from './navbar';
import Container from './style';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showNavbar, setshowNavbar] = React.useState(false);
  return (
    <Container>
      <Navbar showNavbar={showNavbar} setShowNavbar={setshowNavbar} />
      <div className='children app-padding'>{children}</div>
    </Container>
  );
};

export default Layout;
