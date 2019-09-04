import React from 'react';
import Avatar from '../components/Avatar';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';

const Sidebar = () => (
  <aside className='sidebar'>
    <Avatar />
    <SideNav />
    <Footer />
  </aside>
);

export default Sidebar;
