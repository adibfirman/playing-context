import React, { PureComponent } from 'react';

let ContextType
const { Provider, Consumer } = ContextType = React.createContext()

class UserProvider extends PureComponent {

  state = {
    username: '',
    password: '',
    userLogged: false
  }

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ userLogged: true })
  }

  handleLogout = () => {
    this.setState({
      userLogged: false,
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        handleTextChange: this.handleTextChange,
        handleSubmit: this.handleSubmit,
        handleLogout: this.handleLogout
      }}>
        {this.props.children}
      </Provider>
    )
  }

}

export { UserProvider, Consumer as UserConsumer, ContextType }
