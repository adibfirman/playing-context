import React from 'react';

// import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard'
// import { UserProvider, UserConsumer } from './context/UserContext';

const App = () => {
  return (
    <Dashboard />
    // <UserProvider>
    //   <UserConsumer>
    //   {({ userLogged }) => (
    //     userLogged ? <div>user has been login</div> : <LoginPage />
    //   )}
    //   </UserConsumer>
    // </UserProvider>
  )
}

export default App;
