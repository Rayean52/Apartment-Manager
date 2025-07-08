import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Shared/Footer';
import Nav from '../../components/Shared/Navbar';

const HomeLayout = () => {
  return (
    <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
