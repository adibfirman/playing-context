import React, { Component } from 'react';
import { Button, Icon } from 'antd';

import { Wrapper, LogoutWrapper } from './styles';
import { UserConsumer } from '../../context/UserContext';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <UserConsumer>
          {({ username, handleLogout }) => (
            <Wrapper>
              <h3>Welcome, {username}</h3>
              <LogoutWrapper>
                <Button type="danger" onClick={handleLogout}>
                  <Icon type="logout" /> Logout
                </Button>
              </LogoutWrapper>
            </Wrapper>
          )}
        </UserConsumer>
      </React.Fragment>
    )
  }
}
