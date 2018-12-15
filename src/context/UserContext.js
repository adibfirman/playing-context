import React, { PureComponent } from 'react';

const { Provider, Consumer } = React.createContext()

class UserProvider extends PureComponent {

  state = {
    username: '',
    password: '',
    userLogged: false,
    isWrong: false
  }

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      userLogged: true,
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        handleTextChange: this.handleTextChange,
        handleSubmit: this.handleSubmit
      }}>
        {this.props.children}
      </Provider>
    )
  }

}

export { UserProvider, Consumer as UserConsumer }
