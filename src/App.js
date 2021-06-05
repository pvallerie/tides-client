import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignUp from './components/SignUp'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  render () {
    const { user } = this.state

    return (
      <Fragment>
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp setUser={this.setUser}/>
          )} />
        </main>
      </Fragment>
    );
  }
}

export default App;
