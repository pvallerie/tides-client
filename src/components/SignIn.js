import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    onSignIn = event => {
        event.preventDefault()

        const { setUser } = this.props

        signIn(this.state)
            .then(res => console.log('LOGGED IN:', res.data))
            .catch(console.error('ERROR: ', error.message))
    }
}

export default withRouter(SignIn)