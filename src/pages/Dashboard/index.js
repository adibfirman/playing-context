import React, { Component } from 'react';
import { Button, Icon } from 'antd';

import { Wrapper, LogoutWrapper } from './styles';
import { ContextType } from '../../context/UserContext';

export default class Dashboard extends Component {

  static contextType = ContextType

  render() {
    const { username, handleLogout } = this.context
    return (
      <React.Fragment>
        <Wrapper>
          <h3>Welcome, {username}</h3>
          <LogoutWrapper>
            <Button type="danger" onClick={handleLogout}>
              <Icon type="logout" /> Logout
            </Button>
          </LogoutWrapper>
        </Wrapper>
      </React.Fragment>
    )
  }

}
