import React from 'react';
import { Layout, Menu } from 'antd';

const Navbar = () => {
  return (
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
      </Menu>
    </Layout.Header>
  )
}

export default Navbar;
