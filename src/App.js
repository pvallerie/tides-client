import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AuthenticatedRoute from './components/AuthenticatedRoute'
import Navigation from './components/Navigation'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  // Updates user state
  setUser = user => this.setState({ user })

  render () {
    const { user } = this.state

    return (
      <Fragment>
        <Navigation user={user} />
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp setUser={this.setUser}/>
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn setUser={this.setUser}/>
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() =>
          <p>Authenticated Route works!</p>} />
        </main>
      </Fragment>
    );
  }
}

export default App;
