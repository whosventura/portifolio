import React from 'react';
import { Menu } from 'semantic-ui-react';
import './styles.css';

const Header = () => {
  return (
    <Menu className='header-items'>
      <Menu.Item className= "header-item" name='home' />
      <Menu.Item className= "header-item" name='about' />
      <Menu.Item className= "header-item" name='services' />
      <Menu.Item className= "header-item" name='contact' />
    </Menu>
  );
};

export default Header;
