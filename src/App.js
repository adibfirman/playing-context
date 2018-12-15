import React from 'react';

import LoginPage from './pages/Login';
import { UserProvider, UserConsumer } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <UserConsumer>
      {({ userLogged }) => (
        userLogged ? <div>user has been login</div> : <LoginPage />
      )}
      </UserConsumer>
    </UserProvider>
  )
}

export default App;
