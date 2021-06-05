import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Fragment>
      <main className="container">
        <Route path='/sign-up' render={() => (
          <SignUp setUser={setUser}/>
        )} />
      </main>
    </Fragment>
  );
}

export default App;
