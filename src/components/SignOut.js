import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../api/auth'

class SignOut extends Component {
  componentDidMount () {
    const { msgAlert, history, clearUser, user } = this.props

    signOut(user)
      .finally(() => history.push('/sign-in'))
      .finally(() => clearUser())
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)