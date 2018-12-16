import React from 'react';

import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard'
import { UserProvider, UserConsumer } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <UserConsumer>
      {({ userLogged }) => (
        userLogged ? <Dashboard /> : <LoginPage />
      )}
      </UserConsumer>
    </UserProvider>
  )
}

export default App;
