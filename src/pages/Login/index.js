import React from 'react';
import { Input, Icon, Button } from 'antd';

import { Wrapper, Box } from './styles';
import { UserConsumer } from '../../context/UserContext';

const LoginPage = () => {
  const userIcon = <Icon type="user" />
  const passIcon = <Icon type="key" />

  return (
    <UserConsumer>
    {({ handleTextChange, username, password, handleSubmit }) => (
      <Wrapper>
        <Box.Wrapper>
          <h4>Simple App Using React Context</h4>
          <Input
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleTextChange}
            prefix={userIcon} />
          <Box.Password
            as={Input}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleTextChange}
            prefix={passIcon} />
          <Button
            onClick={handleSubmit}
            type="primary"
            block>Login</Button>
        </Box.Wrapper>
      </Wrapper>
    )}
    </UserConsumer>
  )
}

export default LoginPage
